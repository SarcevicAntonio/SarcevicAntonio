<script>
	import LastFM from './LastFM.svelte'
	import Contact from './Contact.svelte'
	import Entries from './Entries.svelte'
	import Craft from './Craft.svelte'
	import Hero from './Hero.svelte'
	import Projects from './Projects.svelte'
	import Values from './Values.svelte'
	import { page } from '$app/state'

	let { data } = $props()
</script>

<svelte:head>
	<title>{page.data.page_name} — my website</title>
	<meta name="description" content="my corner of the internet" />
</svelte:head>

<Hero />

<!-- <section>
	<Values />
</section> -->

<section>
	<Entries content={data.content} />
</section>

<section>
	<Contact />
</section>

<section>
	<Craft />
</section>

<section>
	<Projects />
</section>

{#if data.lastfm_data}
	<section>
		<LastFM lastfm={data.lastfm_data} />
	</section>
{/if}

<style>
	section {
		text-align: center;
		scroll-margin-block-start: 2rem;
		margin-block: 25vh;
		font-size: var(--step-1);
	}
</style>
