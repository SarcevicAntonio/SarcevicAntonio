<script>
	import LastFM from './LastFM.svelte'
	import Contact from './Contact.svelte'
	import Content from './Content.svelte'
	import Craft from './Craft.svelte'
	import Hero from './Hero.svelte'
	import Projects from './Projects.svelte'
	import Values from './Values.svelte'
	export let data
</script>

<svelte:head>
	<title>sarcevic.dev — my website</title>
	<meta
		name="description"
		content="The hub of Antonio Sarcevic: learn about him and enjoy his content."
	/>
</svelte:head>
<Hero />

<section id="first">
	<Values />
</section>

<section>
	<Content content={data.content} />
</section>

<section>
	<Craft />
</section>

<section>
	<Projects />
</section>

<section>
	<Contact />
</section>

<section>
	<LastFM lastfm={data.lastfm_data} />
</section>

<style>
	section {
		text-align: center;
		scroll-margin-block-start: 2rem;
		margin-block: 25vh;
		font-size: var(--step-1);
	}
</style>
