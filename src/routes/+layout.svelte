<script lang="ts">
  import { browser, dev } from '$app/environment'
  import { posts, tags } from '$lib/stores/posts'
  import { genTags } from '$lib/utils/posts'
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  import type { LayoutData } from './$types'
  // import { registerSW } from 'virtual:pwa-register'
  import Header from '$lib/components/header.svelte'
  import Head from '$lib/components/head_static.svelte'
  import { inject } from '@vercel/analytics'
  import 'uno.css'
  import '../app.pcss'

  inject({ mode: dev ? 'development' : 'production' })

  export let data: LayoutData

  posts.set(data.res)
  tags.set(genTags(data.res))
  onMount(
    () => !dev && browser && 'serviceWorker' in navigator && navigator.serviceWorker.register('/sw.js')
    //     registerSW({
    //       immediate: true,
    //       onRegistered: r => r && setInterval(async () => await r.update(), 198964),
    //       onRegisterError: error => console.error(error)
    //     })
  )
</script>

<Head />

<Header path={data.path} />

{#key data.path}
  <div
    class="bg-base-100 md:bg-base-200 min-h-screen pt-16 md:pb-8 lg:pb-16"
    in:fly={{ y: 100, duration: 300, delay: 300 }}
    out:fly={{ y: -100, duration: 300 }}>
    <slot />
  </div>
{/key}
