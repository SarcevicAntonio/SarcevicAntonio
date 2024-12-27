<script lang="ts">
	import Entry from '$lib/Entry.svelte'
	import type { Appearance, BlogMetadata } from '$lib/server/entries'
	import MaterialSymbolsArrowForwardRounded from '~icons/material-symbols/arrow-forward-rounded'

	export let content: (BlogMetadata | Appearance)[]
</script>

<div class="header">
	<h2>Entries</h2>
	<a href="/entries" class="arrow-link end">
		/entries<MaterialSymbolsArrowForwardRounded />
	</a>
</div>

<ul class="scroller">
	{#each content as entry}
		<li>
			<Entry {entry} h_level={3}></Entry>
		</li>
	{/each}
</ul>

<style>
	.header {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: baseline;
		max-width: var(--content-width);
		margin: auto;
		margin-block-end: 0.25em;
	}

	h2 {
		font-size: var(--step-5);
		margin-block: 0;
	}

	.header a {
		font-size: var(--step-0);
	}

	ul.scroller {
		scroll-snap-type: x mandatory;
		margin: 0;
		margin-inline: -1rem;
		padding: 0;
		padding-block-start: 2rem;
		padding-block-end: 3rem;
		list-style: none;
		display: flex;
		overflow: auto;
		gap: 2rem;
	}

	li {
		scroll-snap-align: center;
	}

	li :global(> a) {
		width: clamp(20ch, calc(100vw - 6.5rem), 40ch);
		height: calc(100% - 4rem);
	}

	li:first-child {
		margin-inline-start: max(calc(50vw - 30rem), 1rem);
	}

	li:last-child {
		margin-inline-end: max(calc(50vw - 30rem), 1rem);
	}

	.header a :global(svg) {
		vertical-align: sub;
	}
</style>
