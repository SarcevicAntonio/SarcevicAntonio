<script lang="ts">
	import { prefers_reduced_motion } from '$lib/reduced_motion'
	import { getContext, onMount } from 'svelte'
	import { draw, fade } from 'svelte/transition'
	import PajamasScrollDown from '~icons/pajamas/scroll-down'

	let visible = false
	onMount(async () => {
		visible = true
	})

	let scroll_y: number
	let inner_height: number
	const { clicked } = getContext('pride')
	$: transition = $prefers_reduced_motion ? fade : draw
</script>

<svelte:window bind:scrollY={scroll_y} bind:innerHeight={inner_height} />

<div class="hero">
	<section on:click={clicked.toggle} on:keypress class:clicked={$clicked}>
		<div class="image">
			<img
				width="448px"
				height="448px"
				src="./toni-transparent.png"
				alt="Antonio Sarcevic in a blue shirt, grey hoodie and green cap"
			/>
		</div>
		<div class="text">
			<h1>
				<span class="first-name">Antonio</span>
				<span class="last-name">Sarcevic</span>
			</h1>
			<p class="tagline">excited by&nbsp;ui development</p>
			<div class="bars">
				<div />
				<div />
				<div />
				<div />
				<div />
			</div>
		</div>
	</section>
	<a
		id="scroller"
		href="#scroller"
		class="scroll-indicator"
		title="Scroll to see more"
		style:--opacity={(scroll_y / (inner_height / 2)) * -1 + 1}
	>
		<PajamasScrollDown aria-hidden="true" />
	</a>
</div>

<style>
	.hero {
		min-height: 88svh;
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
		margin-inline-start: -0.25em;
	}

	.tagline {
		color: var(--as-text-1);
		margin-inline-start: 0.5em;
	}

	@media (prefers-contrast: more) {
		.scroll-indicator {
			color: var(--as-text-1);
			opacity: 1;
		}
	}

	.bars {
		display: flex;
		width: min-content;
		margin-inline-start: 0.5em;
		margin-block-start: 0.25em;
	}

	.bars div {
		height: 0.45em;
		width: 1.75em;

		&:nth-child(1) {
			background-color: var(--as-accent);
		}
		&:nth-child(2) {
			background-color: var(--as-back-2);
		}
		&:nth-child(3) {
			background-color: var(--as-text-1);
		}

		&:nth-child(4) {
			background-color: var(--as-text-2);
		}
		&:nth-child(5) {
			background-color: var(--as-text-3);
		}
	}

	/* section.clicked img {
		background-image: var(--pride-gradient);
	} */

	section.clicked .text .bars div {
		&:nth-child(1),
		&:nth-child(2) {
			background-color: #d60270;
		}
		&:nth-child(3) {
			background-color: #734f96;
		}

		&:nth-child(4),
		&:nth-child(5) {
			background-color: #0038a8;
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
		.bars {
			margin-inline: auto;
		}
	}
</style>
