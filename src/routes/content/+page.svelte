<script>
	import { page } from '$app/stores'
	import MaterialSymbolsArrowBackRounded from '~icons/material-symbols/arrow-back-rounded'
	import MaterialSymbolsDocs from '~icons/material-symbols/docs'

	export let data

	$: filter_tag = $page.url.searchParams.get('tag')
</script>

<h1>Content</h1>

<section class="tags">
	{#if filter_tag}
		<a href="/content">Show all content</a>
		<p>Listing content with #{filter_tag}</p>
	{:else}
		<ul>
			{#each [...data.all_tags] as tag}
				<li aria-current={filter_tag === tag}>
					<a href="/content?tag={tag}">
						#{tag}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</section>

<section class="posts">
	<ul>
		{#each data.content as { title, summary, href, published }}
			<li>
				<a {href}>
					<h2>{title}</h2>
					<p>{summary}</p>
					<p class="meta">
						<MaterialSymbolsDocs />
						{new Date(published).toLocaleDateString(undefined, {
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}
					</p>
				</a>
			</li>
		{/each}
	</ul>
</section>

<a href="/" class="index-link">
	<MaterialSymbolsArrowBackRounded aria-hidden="true" />
	Go to index
</a>

<style>
	h1 {
		text-align: center;
		font-size: var(--step-5);
	}

	ul {
		padding: 0;
		list-style: none;
	}

	.tags {
		text-align: center;
	}

	.tags > ul {
		display: flex;
		gap: 1rem;
		justify-content: center;
	}

	.tags > ul > li[aria-current='true'] {
		text-decoration: underline;
	}

	.posts > ul {
		max-width: 50rem;
		margin-inline: auto;
	}

	.posts > ul > li {
		border: 0.2rem solid var(--as-text-1);
		padding: 1rem;
		border-radius: 2rem;
		margin-block-end: 2rem;
	}

	h2 {
		font-size: var(--step-3);
		margin-block: 0.5em;
	}

	a > *:first-child {
		margin-block-start: 0;
	}

	a > *:last-child {
		margin-block-end: 0;
	}

	.meta :global(svg) {
		vertical-align: sub;
	}

	a {
		color: inherit;
	}

	.index-link,
	.posts a {
		text-decoration: none;
	}

	.index-link:hover,
	.index-link:focus {
		text-decoration: underline;
	}

	.posts a:hover > h2,
	.posts a:focus > h2 {
		text-decoration: underline;
	}

	.index-link {
		display: block;
		text-align: center;
		margin-block: 5rem;
	}

	.index-link :global(svg) {
		vertical-align: sub;
		position: relative;
		inset-inline-start: 0rem;
		transition: inset-inline-start 0.2s ease-in-out;
	}

	.index-link:hover :global(svg),
	.index-link:focus :global(svg) {
		inset-inline-start: -0.5rem;
	}
</style>
