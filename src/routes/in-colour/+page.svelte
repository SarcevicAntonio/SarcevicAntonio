<script lang="ts">
	import TriggerWarning from '$lib/TriggerWarning.svelte'
	import throttle from 'raf-throttle'
	import { spring } from 'svelte/motion'

	const turn = spring(0)
	const handleMouseMove = throttle(
		(e: MouseEvent) => ($turn = e.y / window.innerHeight - e.x / window.innerWidth)
	)
</script>

<svelte:body on:mousemove={handleMouseMove} />

<TriggerWarning />

<section>
	<div style:--deg="{$turn}turn" />
</section>

<style>
	section {
		min-height: 100vh;
	}
	div {
		z-index: -1;
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%) rotate(var(--deg));
		width: 200vmax;
		height: 200vmax;

		background-image: conic-gradient(
			from 0deg at 50% 50% in oklab,
			#cb2d3b 4.17% 4.17%,
			4.17%,
			#cc2d59 8.33% 8.33%,
			8.33%,
			#cd346e 12.5% 12.5%,
			12.5%,
			#d2347a 16.67% 16.67%,
			16.67%,
			#c62b7f 20.83% 20.83%,
			20.83%,
			#c62c7f 20.83% 20.83%,
			20.83%,
			#ae297c 25% 25%,
			25%,
			#7d287a 29.17% 29.17%,
			29.17%,
			#542974 33.33% 33.33%,
			33.33%,
			#392978 37.5% 37.5%,
			37.5%,
			#233d89 41.67% 41.67%,
			41.67%,
			#3160a7 45.83% 45.83%,
			45.83%,
			#4482c2 50% 50%,
			#489ad2 54.17% 54.17%,
			54.17%,
			#4e9f9c 58.33% 58.33%,
			58.33%,
			#4a986e 62.5% 62.5%,
			62.5%,
			#4a9b4b 66.67% 66.67%,
			66.67%,
			#74b04a 70.83% 70.83%,
			70.83%,
			#b5cb49 75% 75%,
			75%,
			#ede652 79.17% 79.17%,
			79.17%,
			#f5d74c 83.33% 83.33%,
			83.33%,
			#eaa93f 87.5% 87.5%,
			87.5%,
			#e18036 91.67% 91.67%,
			91.67%,
			#d45330 95.83% 95.83%,
			95.83%,
			#d54236 96%
		);
	}
</style>
