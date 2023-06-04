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

<Content content={data.content} />

<Projects />

<Values />

<Craft />


<Contact />

<Activity lastfm={data.lastfm_data} />
