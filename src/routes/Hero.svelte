<script lang="ts">
	import { onMount, tick } from 'svelte'
	import { quintOut } from 'svelte/easing'
	import { draw } from 'svelte/transition'
	import PajamasScrollDown from '~icons/pajamas/scroll-down'

	let visible = false
	onMount(async () => {
		visible = true
		await tick()
	})

	let scroll_y: number
	let inner_height: number
</script>

<svelte:window bind:scrollY={scroll_y} bind:innerHeight={inner_height} />

<div class="hero">
	<section>
		<div class="image">
			<img
				width="448px"
				height="448px"
				src="./toni-transparent.png"
				alt="Antonio Sarcevic in a blue shirt, grey hoodie and green cap"
			/>
		</div>
		<div class="text-container">
			<div class="text">
				<h1>
					<span class="first-name">Antonio</span>
					<span class="last-name">Sarcevic</span>
				</h1>
				<p class="tagline">excited by&nbsp;ui development</p>
			</div>
			<svg
				aria-hidden="true"
				class="line"
				width="100%"
				height="100%"
				viewBox="0 0 548 301"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				{#if visible}
					<path
						in:draw={{ duration: 2000, easing: quintOut }}
						d="M14 287C127.5 -104 564 311 532.5 14"
						stroke="currentColor"
						stroke-width="1rem"
						stroke-linecap="round"
					/>
				{/if}
			</svg>
		</div>
	</section>
	<a
		href="#first"
		class="scroll-indicator"
		title="Scroll to see more"
		style:--opacity={(scroll_y / (inner_height / 2)) * -1 + 1}
	>
		<PajamasScrollDown aria-hidden="true" />
	</a>
</div>

<style>
	.hero {
		min-height: 100svh;
		display: grid;
		place-content: center;
		position: relative;
	}

	.scroll-indicator {
		position: absolute;
		bottom: 1rem;
		left: 50%;
		translate: -50%;
		font-size: clamp(1rem, calc(1rem + 2vw), 6rem);
		color: var(--as-text-2);
		opacity: var(--opacity);

		&:hover,
		&:focus {
			color: var(--as-text-1);
		}
	}

	section {
		display: flex;
		align-items: center;
	}

	img {
		border-radius: 100%;
		background-color: var(--as-back-2);
		max-width: 28rem;
		height: 100%;
		width: 100%;
	}

	.text {
		pointer-events: none;
		margin-inline-start: -2rem;
		position: relative;
		font-size: clamp(1rem, calc(1rem + 2vw), 6rem);
		z-index: 2;
	}

	.text-container {
		position: relative;
	}

	h1,
	.tagline {
		margin: 0;
	}

	h1 {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		font-size: clamp(2rem, calc(1rem + 8vw), 8rem);
		line-height: 1;
		font-weight: 400;
		color: var(--as-text-2);
	}

	.first-name {
		margin-inline-start: -0.5em;
	}

	.tagline {
		color: var(--as-text-1);
		margin-inline-start: 0.5em;
	}

	.line {
		position: absolute;
		inset-block-end: -25%;
		inset-inline-start: -10%;
		color: var(--as-accent);
		&:hover path {
			d: path('M21.0006 186.499C-34.9994 474.999 255 -118 525 42.4996');
		}
	}
	path {
		transition: 2s;
		transition-timing-function: ease-in-out;
	}

	@media (prefers-contrast: more) {
		.line {
			color: var(--as-back-2);
		}

		.scroll-indicator {
			color: var(--as-text-1);
			opacity: 1;
		}
	}

	@media only screen and (max-width: 400px) {
		section {
			flex-direction: column;
		}

		.first-name,
		.text,
		.tagline {
			margin-inline-start: revert;
		}

		.text {
			text-align: center;
		}

		h1 {
			align-items: center;
		}
		.line {
			inset: 0;
			inset-block-start: -50%;
		}
	}
</style>
