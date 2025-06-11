<script lang="ts">
	import { page } from '$app/state'
	import { getContext } from 'svelte'
	import type { Writable } from 'svelte/store'

	let scroll_y = $state<number>(0)
	let inner_height = $state<number>(0)
	const { clicked } = getContext('pride') as {
		clicked: Writable<boolean> & { toggle: () => void }
	}

	const imageAltByStyle = {
		toni: 'Antonio Sarcevic in a green shirt, smiling and looking upward and to the right off camera',
		link: 'Links Animal Crossing villager character in a pastel blue baseball cap and pastel blue shirt with pink horizontal stripes, smiling into the camera while greeting.',
	}
</script>

<svelte:window bind:scrollY={scroll_y} bind:innerHeight={inner_height} />

<div class="hero">
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<section class="person" onclick={clicked.toggle} class:clicked={$clicked}>
		<div class="image">
			<img
				class="profile-picture"
				width="224px"
				height="224px"
				src="./{page.data.style}-transparent.png"
				alt={imageAltByStyle[page.data.style]}
			/>
		</div>
		<div class="text">
			<h1>
				<span class="first-name">Antonio</span>
				<span class="last-name">Sarcevic</span>
			</h1>
			<p class="tagline">excited by ui&nbsp;development</p>
			<div class="bars">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	</section>

	<section class="badges">
		{#each page.data.badges as badge}
			<img src="/badges/{badge}.png" alt={badge} />
		{/each}
	</section>
</div>

<style>
	.hero {
		min-height: 88svh;
		display: grid;
		place-content: center;
		position: relative;
	}

	section.person {
		display: flex;
		align-items: center;
	}

	.profile-picture {
		border-radius: 100%;
		background-color: var(--as-back-2);
		max-width: 28rem;
	}

	section.person.clicked .profile-picture {
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
		margin-inline-start: 2em;
	}

	.first-name {
		margin-inline-start: -1.5em;
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

	section.person.clicked .bars div {
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

	@media only screen and (max-width: 500px) {
		section.person {
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
			max-width: 15rem;
		}

		h1 {
			margin-top: 2rem;
			align-items: center;
			margin-inline-start: auto;
		}

		.bars {
			margin-inline: auto;
		}
	}

	section.badges {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		gap: 0.75rem;
		margin: auto;
		margin-top: 2rem;
	}
</style>
