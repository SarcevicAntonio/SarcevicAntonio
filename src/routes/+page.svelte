<script>
	import { page } from '$app/state'
	import Craft from '$lib/homepage/Craft.svelte'
	import Entries from '$lib/homepage/Entries.svelte'
	import Hero from '$lib/homepage/Hero.svelte'
	import Values from './Values.svelte'

	let { data } = $props()
</script>

<svelte:head>
	<title>{page.data.page_name} — my website</title>
	<meta name="description" content="my corner of the internet" />
</svelte:head>

<Hero />

<section><Craft /></section>

<section><Values /></section>

<section><Entries content={data.content} /></section>

<!-- <section><Contact /></section> -->

<!-- <section><Projects /></section> -->

<style>
	section {
		text-align: center;
		scroll-margin-block-start: 2rem;
		margin-block: 25vh;
		font-size: var(--step-1);
	}
</style>
