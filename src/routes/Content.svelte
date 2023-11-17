<script lang="ts">
	import { reformat_date_string } from '$lib/date_helpers'
	import type { Appearance, BlogMetadata } from '$lib/server/posts'
	import MaterialSymbolsDocs from '~icons/material-symbols/docs'
	import MaterialSymbolsLink from '~icons/material-symbols/link'
	import YouTube from '~icons/simple-icons/youtube'
	import MaterialSymbolsOpenInNewRounded from '~icons/material-symbols/open-in-new-rounded'

	export let content: (BlogMetadata | Appearance)[]
</script>

<div class="header"><slot /></div>

<ul class="scroller">
	{#each content as { title, summary, href, published, lang, type }}
		<li>
			<a {href}>
				<h3>
					{title}
					<span class="detail">
						{#if lang === 'DE'}
							<span class="screen-reader-only"> (Content In German Language) </span>
							<span aria-hidden="true"> 🇩🇪 </span>
						{/if}
						{#if type === 'appearance'}
							<span class="screen-reader-only"> External Link </span>
							<MaterialSymbolsOpenInNewRounded aria-hidden="true" />
						{/if}
					</span>
				</h3>
				{#if summary}
					<p>{summary}</p>
				{/if}
				<p class="meta">
					{reformat_date_string(published)}
					{#if type === 'blog_post'}
						<span class="screen-reader-only"> Blog Post </span>
						<MaterialSymbolsDocs aria-hidden="true" />
					{:else if type === 'appearance'}
						{#if href.includes('youtube')}
							<span class="screen-reader-only"> YouTube Link </span>
							<YouTube aria-hidden="true" />
						{:else}
							<span class="screen-reader-only"> External Link </span>
							<MaterialSymbolsLink aria-hidden="true" />
						{/if}
					{/if}
				</p>
			</a>
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
	.detail {
		font-size: 0.4em;
		vertical-align: 0.8em;
	}

	h2 {
		font-size: var(--step-5);
		margin-block: 0;
	}

	.header a {
		font-size: var(--step-0);
	}

	ul.scroller {
		margin: 0;
		margin-inline: -1rem;
		padding: 0;
		padding-block-end: 1rem;
		list-style: none;
		display: flex;
		overflow: auto;
		gap: 1rem;
	}

	li > a {
		display: flex;
		flex-direction: column;
		width: min(23rem, calc(100vw - 6rem));
		border: 0.25rem solid var(--as-text-1);
		padding: 0.75rem 1rem;
		height: calc(100% - 2rem);
		border-radius: 1rem;
		color: inherit;
		text-decoration: none;
		text-align: start;

		&:hover > h3,
		&:focus > h3 {
			text-decoration: underline;
		}
	}

	li:first-child {
		margin-inline-start: max(calc(50vw - 30rem), 1rem);
	}

	li:last-child {
		margin-inline-end: max(calc(50vw - 30rem), 1rem);
	}

	h3 {
		font-size: var(--step-2);
		margin-block: 0;
	}

	p {
		margin-block: 0.75rem;
		font-size: var(--step-0);
	}

	.meta {
		display: flex;
		justify-content: space-between;
		margin-block-start: auto;
		margin-block-end: 0;
	}

	.header a :global(svg),
	.meta :global(svg) {
		vertical-align: sub;
	}
</style>
