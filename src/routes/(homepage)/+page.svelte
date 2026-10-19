<script>
	import { page } from '$app/state'
	import Craft from './Craft.svelte'
	import Entries from './Entries.svelte'
	import Hero from './Hero.svelte'
	import Projects from './Projects.svelte'
	import Values from './Values.svelte'

	const { data } = $props()
</script>

<svelte:head>
	<title>linkplay.space — my website</title>
	<meta name="description" content="my corner of the internet" />
</svelte:head>

<Hero />
<section><Values /></section>
<section><Craft /></section>
<section><Entries content={data.content} /></section>
<!-- <section><Contact /></section> -->
<section><Projects /></section>

<style>
	section {
		text-align: center;
		scroll-margin-block-start: 2rem;
		margin-block: 25vh;
		font-size: var(--step-1);
	}
</style>
