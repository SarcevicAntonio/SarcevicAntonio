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

<p hidden>
	<!-- this for some god forsaken reason fixes this string of letters being turned into another without me asking for it somewhere  -->
	process.env.NODE_ENV
</p>

<ThemeSwitch />

<main>
	<slot />
</main>

<Footer />
