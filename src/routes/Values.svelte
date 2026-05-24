<script>
	import gratitude from '~icons/mdi/flower'
	import honesty from '~icons/mdi/hand-heart-outline'
	import balance from '~icons/mdi/yin-yang'

	const values = { gratitude, balance, honesty }
</script>

<section>
	<h2>Core Values</h2>

	<div class="flex">
		{#each Object.entries(values) as [value, Icon] (value)}
			<div>
				<Icon aria-hidden="true" font-size=" var(--step-4);" />
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				<p>{@html value}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	h2 {
		font-size: var(--step-5);
		text-align: center;
		margin-block-end: 0.5em;
	}

	.flex {
		display: flex;
		flex-wrap: wrap;
		gap: 5rem;
		max-width: 32rem;
		margin: auto;
		align-items: center;
		justify-content: space-around;
		:global(svg) {
			font-size: var(--step-5);
		}
	}

	p {
		text-align: center;
		text-wrap: balance;
	}
</style>
