<script lang="ts">
	import MaterialSymbolsArrowForwardRounded from '~icons/material-symbols/arrow-forward-rounded'
	import MaterialSymbolsDocs from '~icons/material-symbols/docs'
	type BlogMetadata = {
		title: string
		summary: string
		published: string
		href: string
		tags: string[]
	}

	export let content: BlogMetadata[]
</script>

<section>
	<div class="header">
		<h2>Content</h2>
		<a href="/content">
			View All
			<MaterialSymbolsArrowForwardRounded />
		</a>
	</div>

	<ul class="scroller">
		{#each content as { title, summary, href, published }}
			<li>
				<a {href}>
					<h3>{title}</h3>
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

<style>
	section {
		margin-block: 8rem;
		padding-inline: 1rem;
		font-size: var(--step-1);
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-block-end: 0.25em;
	}

	h2 {
		font-size: var(--step-5);
	}

	.header a {
		font-size: var(--step-0);
	}

	.header a :global(svg) {
		position: relative;
		inset-inline-start: 0rem;
		transition: inset-inline-start 0.2s ease-in-out;
	}

	.header a:hover :global(svg),
	.header a:focus :global(svg) {
		inset-inline-start: 0.5rem;
	}

	ul.scroller {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li {
		max-width: 25rem;
		border: 0.25rem solid var(--as-text-1);
		padding: 1rem;
		border-radius: 2rem;
	}

	h3 {
		font-size: var(--step-3);
		margin-block: 0;
	}

	p {
		margin-block: 0;
		font-size: var(--step--1);
	}

	.meta {
		font-size: var(--step-0);
	}

	.header a :global(svg),
	.meta :global(svg) {
		vertical-align: sub;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	a:hover,
	a:focus {
		text-decoration: underline;
	}
</style>
