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
	<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
	<section on:click={clicked.toggle} class:clicked={$clicked}>
		<div class="image">
			<img
				width="448px"
				height="448px"
				src="./toni-transparent.png"
				alt="Antonio Sarcevic in a green shirt, smiling and looking upward and to the right off camera"
			/>
		</div>
		<div class="text">
			<h1>
				<span class="first-name">Antonio</span>
				<span class="last-name">Sarcevic</span>
			</h1>
			<p class="tagline">excited by ui&nbsp;development</p>
			<a
				href="/in-colour"
				class="bars"
				on:click|stopPropagation
				aria-label="visit in-colour easter egg"
			>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</a>
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

	@media (prefers-contrast: more) {
		.scroll-indicator {
			color: var(--as-text-1);
			opacity: 1;
		}
	}

	section {
		display: flex;
		align-items: center;
	}

	a {
		pointer-events: auto;
	}

	img {
		border-radius: 100%;
		background-color: var(--as-back-2);
		max-width: 28rem;
		height: 100%;
		width: 100%;
	}

	section.clicked img {
		background-image: var(--in-colour);
	}

	.text {
		pointer-events: none;
		margin-inline-start: 2rem;
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
		font-weight: 400;
		color: var(--as-text-2);
	}

	.first-name {
		margin-inline-start: -0.25em;
	}

	.tagline {
		color: var(--as-text-2);
		margin-inline-start: 0.5em;
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

	section.clicked .bars div {
		&:nth-child(1) {
			background-color: oklch(0.65 0.3 29.33);
		}
		&:nth-child(2) {
			background-color: oklch(0.81 0.2 70.58);
		}
		&:nth-child(3) {
			background-color: oklch(92% 0.27 100);
		}
		&:nth-child(4) {
			background-color: var(--as-accent);
		}
		&:nth-child(5) {
			background-color: oklch(0.59 0.32 308.3);
		}
	}

	.first-name,
	.last-name,
	.tagline {
		padding: 1rex 4rex;
		border-radius: 2rex;
		line-height: 0.9;
	}

	.first-name {
		border-end-end-radius: initial;
	}

	.last-name {
		border-start-start-radius: initial;
		border-end-end-radius: initial;
	}

	.tagline {
		border-start-start-radius: initial;
	}

	@media only screen and (max-width: 500px) {
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

		img {
			max-width: 250px;
			margin-bottom: 2rem;
		}

		h1 {
			align-items: center;
		}

		.bars {
			margin-inline: auto;
		}
	}
</style>
