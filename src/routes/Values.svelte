<script>
	import MdiYinYang from '~icons/mdi/yin-yang'
	import MdiHeadLightbulbOutline from '~icons/mdi/head-lightbulb-outline'
	import MaterialSymbolsAndroidChat from '~icons/material-symbols/android-chat'
	import MdiHandHeartOutline from '~icons/mdi/hand-heart-outline'
	import MdiFlower from '~icons/mdi/flower'
	const values = [
		{ label: 'Balance', icon: MdiYinYang },
		{ label: 'Open Mindedness', icon: MdiHeadLightbulbOutline },
		{ label: 'Communication', icon: MaterialSymbolsAndroidChat },
		{ label: 'Honesty', icon: MdiHandHeartOutline },
		{ label: 'Joy', icon: MdiFlower },
	]
</script>

<section>
	<h2>Values</h2>
	<ul>
		{#each values as { label, icon }}
			<li>
				<svelte:component this={icon} />
				{label}
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		margin-block: 4rem;
	}
	h2 {
		font-family: 'Staatliches';
		font-size: var(--step-5);
		text-align: center;
	}

	ul {
		list-style: none;
		font-family: 'Space Mono', sans-serif;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 3em;
		font-size: var(--step-1);
		justify-content: center;
	}

	li {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: min-content;
		text-align: center;
		gap: 0.5em;
	}

	li :global(svg) {
		font-size: 1.5em;
	}
</style>
