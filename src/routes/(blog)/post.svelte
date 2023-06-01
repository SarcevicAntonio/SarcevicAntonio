<script>
	import { page } from '$app/stores'
	import MaterialSymbolsArrowBackRounded from '~icons/material-symbols/arrow-back-rounded'

	export let title
	export let tags
	export let published
	export let updated
</script>

<article>
	<h1>{title}</h1>
	<aside>
		<p>
			published: {new Date(published).toLocaleDateString(undefined, {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
			})}
		</p>
		{#if updated}
			<p>
				last updated: {new Date(updated).toLocaleDateString(undefined, {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				})}
			</p>
		{/if}
		<ul class="tags">
			{#each tags as tag}
				<li>
					<a href="/content?tag={tag}">
						#{tag}
					</a>
				</li>
			{/each}
		</ul>
	</aside>
	<slot />
</article>

<a href="/" class="index-link">
	<MaterialSymbolsArrowBackRounded aria-hidden="true" />
	Go to index
</a>

<style>
	article {
		margin: auto;
		max-width: 50rem;
	}

	h1 {
		text-align: center;
		font-size: var(--step-5);
	}

	aside {
		text-align: end;
		font-size: var(--step--1);
		color: var(--as-text-2);
	}

	article :global(img) {
		max-width: 100%;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	.index-link {
		display: block;
		text-align: center;
		margin-block: 5rem;
	}

	a:hover,
	a:focus {
		text-decoration: underline;
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

	ul.tags {
		margin: 0;
		padding: 0;
		list-style: none;
		display: inline-flex;
		gap: 1em;
	}
</style>
