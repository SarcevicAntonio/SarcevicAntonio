<script>
	import MdiYinYang from '~icons/mdi/yin-yang'
	import MdiHeadLightbulbOutline from '~icons/mdi/head-lightbulb-outline'
	import MaterialSymbolsAndroidChat from '~icons/material-symbols/android-chat'
	import MdiHandHeartOutline from '~icons/mdi/hand-heart-outline'
	import MdiFlower from '~icons/mdi/flower'
</script>

<section id="first">
	<h2>Core Values</h2>
	<MdiYinYang />
	<MdiHeadLightbulbOutline />
	<MaterialSymbolsAndroidChat />
	<MdiHandHeartOutline />
	<MdiFlower />
	<p>Balance, Open Mindedness, Communication, Honesty & Joy</p>
</section>

<style>
	section {
		scroll-margin-block-start: 2rem;
		margin-block: 8rem;
		text-align: center;
		font-size: var(--step-1);
	}

	h2 {
		font-size: var(--step-5);
		text-align: center;
		margin-block-end: 0.25em;
	}

	section :global(svg) {
		font-size: var(--step-4);
	}
</style>
