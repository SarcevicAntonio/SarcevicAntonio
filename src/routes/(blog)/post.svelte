<script>
	export let title
	export let published
	export let updated
	import MaterialSymbolsArrowBackRounded from '~icons/material-symbols/arrow-back-rounded'
</script>

<article>
	<h1>{title}</h1>
	<div class="dates">
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
	</div>
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

	.dates {
		text-align: end;
		font-size: var(--step--1);
		color: var(--as-text-2);
	}

	article :global(img) {
		max-width: 100%;
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

	.index-link:hover :global(svg) {
		inset-inline-start: -0.5rem;
	}
</style>
