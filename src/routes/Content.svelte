<script lang="ts">
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
	<h2>Content</h2>
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

	h2 {
		font-size: var(--step-5);
		margin-block-end: 0.25em;
	}

	ul.scroller {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li {
		max-width: 25rem;
		border: 0.5rem solid var(--as-text-1);
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

	.meta :global(svg) {
		vertical-align: sub;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
