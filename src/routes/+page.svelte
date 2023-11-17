<script>
	import MaterialSymbolsArrowForwardRounded from '~icons/material-symbols/arrow-forward-rounded'
	import Contact from './Contact.svelte'
	import Content from './Content.svelte'
	import Craft from './Craft.svelte'
	import Hero from './Hero.svelte'
	import LastFM from './LastFM.svelte'
	import Projects from './Projects.svelte'
	import Values from './Values.svelte'
	export let data
</script>

<svelte:head>
	<title>sarcevic.dev — my website</title>
	<meta name="description" content="my corner of the internet" />
</svelte:head>

<Hero />

<section>
	<Content content={data.posts}>
		<h2>Blog Posts</h2>
		<a href="/content" class="arrow-link end">
			/content<MaterialSymbolsArrowForwardRounded />
		</a>
	</Content>
	<Content content={data.apperances}>
		<h2>Appearances</h2>
		<a href="/content" class="arrow-link end">
			/content<MaterialSymbolsArrowForwardRounded />
		</a>
	</Content>
</section>

<section>
	<Contact />
</section>

<section>
	<Values />
</section>

<section>
	<Craft />
</section>

<section>
	<Projects />
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
