<script lang="ts">
	import { reformat_date_string } from '$lib/date_helpers'
	import type { Appearance, BlogMetadata } from '$lib/server/posts'
	import MaterialSymbolsArrowForwardRounded from '~icons/material-symbols/arrow-forward-rounded'
	import MaterialSymbolsDocs from '~icons/material-symbols/docs'
	import MaterialSymbolsLink from '~icons/material-symbols/link'
	import YouTube from '~icons/simple-icons/youtube'

	export let content: (BlogMetadata | Appearance)[]
</script>

<div class="header">
	<h2>Content and Appearances</h2>
	<a href="/content" class="arrow-link end">
		/content<MaterialSymbolsArrowForwardRounded />
	</a>
</div>

<ul class="scroller">
	{#each content as { title, summary, href, published, lang, type }}
		<li>
			<a {href}>
				<h3>
					{title}
					{#if lang === 'DE'} 🇩🇪 {/if}
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
		max-width: 75rem;
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
		margin-inline-start: max(calc(50vw - 38rem), 1rem);
	}

	li:last-child {
		margin-inline-end: max(calc(50vw - 38rem), 1rem);
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
		margin-block-start: auto;
		margin-block-end: 0;
		text-align: end;
	}

	.header a :global(svg),
	.meta :global(svg) {
		vertical-align: sub;
	}
</style>
