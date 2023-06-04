<script>
	import Activity from './Activity.svelte'
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
</svelte:head>

<Hero />

<section id="first">
	<Content content={data.content} />
</section>

<section>
	<Projects />
</section>

<section>
	<Values />
</section>

<section>
	<Craft />
</section>

<section>
	<Contact />
</section>

<section>
	<Activity lastfm={data.lastfm_data} />
</section>

<style>
	section {
		text-align: center;
		scroll-margin-block-start: 2rem;
		margin-block: 25vh;
		font-size: var(--step-1);
	}
</style>
