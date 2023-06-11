/// <reference lib="webworker" />

// implementation from https://github.com/NekR/self-destroying-sw

self.addEventListener('install', () => {
	self.skipWaiting()
})

self.addEventListener('activate', () => {
	self.registration
		.unregister()
		.then(function () {
			return self.clients.matchAll()
		})
		.then(function (clients) {
			clients.forEach((client) => client.navigate(client.url))
		})
})
