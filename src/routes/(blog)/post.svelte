<script>
	export let title
	export let published
	export let updated
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

<style>
	article {
		margin: auto;
		max-width: 50rem;
		margin-block-end: 5em;
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
</style>
