<script>
	import { page } from '$app/state'
	import MaterialSymbolsArrowForwardRounded from '~icons/material-symbols/arrow-forward-rounded'
	import MaterialSymbolsArrowBackRounded from '~icons/material-symbols/arrow-back-rounded'

	const { data } = $props()
</script>

<svelte:head>
	<title>images — linkplay.space</title>
	<meta name="description" content="cool images" />
</svelte:head>

<section>
	<h1>IMAGES</h1>
	{#if page.url.searchParams.get('cursor')}
		<a href="/img" class="arrow-link">
			<MaterialSymbolsArrowBackRounded aria-hidden="true" />start
		</a>
	{/if}
	{#each data.imgs as img (img.id)}
		<figure>
			<!-- TODO: figure out how to make this accessible -->
			<!-- TODO: detail page <a href="/img/{img.id}"> -->
			<img src="https://slink.linkplay.space{img.url}" />
			<!-- </a> -->
			{#if img.attributes.description}
				<figcaption>{img.attributes.description}</figcaption>
			{/if}
		</figure>
	{/each}
	{#if data.meta.nextCursor}
		<a href="?cursor={data.meta.nextCursor}" class="arrow-link end">
			next<MaterialSymbolsArrowForwardRounded />
		</a>
	{/if}
</section>

<style>
	h1 {
		text-align: center;
		font-size: var(--step-5);
	}

	section {
		max-width: var(--content-width);
		margin: auto;
		margin-block-end: 10em;
	}

	figure {
		display: grid;
		place-content: center;
		margin: 0;
		margin-block-start: 10em;
	}

	figcaption {
		margin-block-start: 1.25em;
	}

	a {
		margin-block-start: 10em;
	}

	img {
		max-height: 60svh;
		max-width: 100%;
	}
</style>
