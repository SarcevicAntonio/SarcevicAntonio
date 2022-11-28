/// <reference lib="webworker" />
declare const self: ServiceWorkerGlobalScope

// implementation from https://github.com/NekR/self-destroying-sw

self.addEventListener('install', function (e) {
  self.skipWaiting()
})

self.addEventListener('activate', function (e) {
  self.registration
    .unregister()
    .then(function () {
      return self.clients.matchAll()
    })
    .then(function (clients) {
      clients.forEach(client => (client as any).navigate(client.url))
    })
})

export type {}
