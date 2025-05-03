<script>
	import MdiYinYang from '~icons/mdi/yin-yang'
	import MdiHeadLightbulbOutline from '~icons/mdi/head-lightbulb-outline'
	import MaterialSymbolsAndroidChat from '~icons/material-symbols/android-chat'
	import MdiHandHeartOutline from '~icons/mdi/hand-heart-outline'
	import MdiFlower from '~icons/mdi/flower'

	const values = {
		Balance: MdiYinYang,
		Honesty: MdiHandHeartOutline,
		Joy: MdiFlower,
		'Open<br>Mindedness': MdiHeadLightbulbOutline,
		'Clear<br>Communication': MaterialSymbolsAndroidChat,
	}
</script>

<h2>Core Values</h2>

<div class="flex">
	{#each Object.entries(values) as [value, Icon]}
		<div>
			<Icon aria-hidden="true" font-size=" var(--step-4);" />
			<p>{@html value}</p>
		</div>
	{/each}
</div>

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
