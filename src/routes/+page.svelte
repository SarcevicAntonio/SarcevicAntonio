<script>
	import Content from './Content.svelte'
	import Craft from './Craft.svelte'
	import Hero from './Hero.svelte'
	import Projects from './Projects.svelte'
	import Values from './Values.svelte'
	export let data
</script>

<Hero />

<Values />

<Craft />

<Content content={data.content} />

<Projects />
