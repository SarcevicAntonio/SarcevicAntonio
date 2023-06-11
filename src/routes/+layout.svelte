<script>
	import { onMount } from 'svelte'
	import '../app.postcss'
	import Footer from './Footer.svelte'
	import { browser, dev } from '$app/environment'

	onMount(() => {
		if (!dev && browser && 'serviceWorker' in navigator) {
			// register self destroying service worker
			navigator.serviceWorker.register('/sw.js')
		}
	})
</script>

<main>
	<slot />
</main>

<Footer />
