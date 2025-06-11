<script>
	import { page } from '$app/state'
	import { reformat_date_string } from '$lib/date_helpers'
	import MaterialSymbolsDocs from '~icons/material-symbols/docs'
	import MaterialSymbolsLink from '~icons/material-symbols/link'
	import MaterialSymbolsOpenInNewRounded from '~icons/material-symbols/open-in-new-rounded'
	import YouTube from '~icons/simple-icons/youtube'

	let { entry, h_level = 2, show_tags = false } = $props()
</script>

<a href={entry.href} class={['content-box', entry.type === 'blog_post' && 'blog-post']}>
	<p class="meta">
		{#if entry.type === 'blog_post'}
			<span class="screen-reader-only"> Blog Post </span>
			<MaterialSymbolsDocs aria-hidden="true" />
			<span>{page.data.page_name}</span>
		{:else if entry.type === 'appearance'}
			{#if entry.href.includes('youtube')}
				<span class="screen-reader-only"> YouTube Link </span>
				<YouTube aria-hidden="true" />
			{:else}
				<span class="screen-reader-only"> External Link </span>
				<MaterialSymbolsLink aria-hidden="true" alignment-baseline="auto" />
			{/if}
			<span>
				{new URL(entry.href).hostname
					.split('.')
					.splice(-2, 2)
					.join('.')}<MaterialSymbolsOpenInNewRounded font-size="0.5em" aria-hidden="true" />
			</span>
		{/if}
		<span class="date">{reformat_date_string(entry.published)}</span>
	</p>
	<hr />
	<svelte:element this={`h${h_level}`} class="heading">
		{entry.title}
		<span class="detail">
			{#if entry.lang === 'DE'}
				<span class="screen-reader-only"> (Content In German Language) </span>
				<span aria-hidden="true"> 🇩🇪 </span>
			{/if}
		</span>
	</svelte:element>
	{#if entry.summary}
		<p>{entry.summary}</p>
	{/if}
	{#if show_tags}
		<hr />
		<ul class="tags">
			{#each entry.tags as tag}
				<li>
					#{tag}
				</li>
			{/each}
		</ul>
	{/if}
</a>

<style>
	.tags {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		list-style: none;
		padding: 0;
		gap: 2rem;
		row-gap: 0.5rem;
		font-size: var(--step--1);
		color: var(--as-text-2);
	}
	.blog-post .tags {
		color: var(--as-back-2);
	}

	.content-box {
		display: flex;
		flex-direction: column;
		border: 0.25rem solid var(--as-text-3);
		padding: 1.5rem 2rem;
		border-radius: 1rem;
		color: inherit;
		text-decoration: none !important;
		text-align: start;

		&.blog-post {
			border-color: var(--as-text-1);
			background-color: var(--as-text-1);
			color: var(--as-back-1);
		}

		&:hover,
		&:focus {
			> .heading {
				text-decoration: underline;
			}

			& hr {
				border-color: var(--as-text-3);
			}
			&.blog-post hr {
				border-color: var(--as-back-1);
			}
		}
	}
	p {
		margin-block: 0.75rem;
		font-size: var(--step-0);
		color: var(--as-text-2);
		text-decoration: none;
	}

	.content-box.blog-post p {
		color: var(--as-back-2);
	}

	hr {
		width: 100%;
	}
	.blog-post hr {
		border-color: var(--as-text-3);
	}

	.meta {
		display: flex;
		gap: 1rem;
		align-items: center;
		margin-block: 0;
		.date {
			margin-inline-start: auto;
		}
	}

	.heading {
		font-size: var(--step-2);
		margin-block: 0;
	}
	a :global(svg) {
		vertical-align: super;
	}
</style>
