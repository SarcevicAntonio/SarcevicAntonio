<script>
	import { browser, dev } from '$app/environment'
	import ThemeSwitch from '$lib/theme/ThemeSwitch.svelte'
	import { onMount } from 'svelte'
	import '../app.postcss'
	import Footer from './Footer.svelte'

	onMount(() => {
		if (!dev && browser && 'serviceWorker' in navigator) {
			// register self destroying service worker
			navigator.serviceWorker.register('/sw.js')
		}
	})
</script>

<ThemeSwitch />

<main>
	<slot />
</main>

<Footer />
