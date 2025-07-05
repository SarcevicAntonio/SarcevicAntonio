<script lang="ts">
	import { page } from '$app/state'

	let scroll_y = $state<number>(0)
	let inner_height = $state<number>(0)
	let pride = $derived(page.data.style === 'link')

	const imageAltByStyle = {
		toni: 'Antonio Sarcevic in a green shirt, smiling and looking upward and to the right off camera',
		link: 'Links Animal Crossing villager character in a pastel blue baseball cap and pastel blue shirt with pink horizontal stripes, smiling into the camera while greeting.',
	}
</script>

<svelte:window bind:scrollY={scroll_y} bind:innerHeight={inner_height} />

<div class="hero">
	<section class:pride>
		<div class="id">
			<img
				class="profile-picture"
				width="224px"
				height="224px"
				src="./{page.data.style}-transparent.png"
				alt={imageAltByStyle[page.data.style]}
			/>
			<h1>
				<span class="first-name">Antonio</span>
				<span class="last-name">Sarcevic</span>
			</h1>
		</div>

		<p class="tagline">Loves to craft solid web experiences.</p>
		<div class="bars">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</section>

	<!-- <section class="badges">
		{#each page.data.badges as badge}
			<img width="88" height="31" src="/badges/{badge}.png" alt={badge} title={badge} />
		{/each}
	</section> -->
</div>

<style>
	.hero {
		min-height: 88svh;
		display: grid;
		place-content: center;
		position: relative;
	}

	.id {
		display: flex;
		align-items: center;

		.profile-picture {
			border-radius: 100%;
			background-color: var(--as-back-2);
			max-width: 28rem;
		}

		h1 {
			margin: 0;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			font-size: clamp(2rem, calc(1rem + 12vw), 8rem);
			font-weight: 400;
			color: var(--as-text-2);
			margin-inline-start: 1em;
			line-height: 1;
		}
		.first-name {
			margin-inline-start: -0.75em;
		}
	}

	.tagline {
		text-align: center;
		color: var(--as-text-3);
		font-size: var(--step-2);
		margin-block-start: 1rem;
		text-wrap: balance;
	}

	.bars {
		display: flex;
		width: min-content;
		position: relative;
		overflow: hidden;
		margin-block-start: 1.5rem;
		margin-inline: auto;
		width: clamp(2rem, 80vw, 25rem);
		& div {
			height: 1rem;
			width: 100%;

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
	}

	.badges {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		gap: 0.75rem;
		margin: auto;
		margin-top: 2rem;
		max-width: 360px;
		& img {
			cursor: help;
			image-rendering: pixelated;
		}
	}

	.pride {
		.profile-picture {
			background-image: var(--in-colour);
		}

		.bars div {
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
	}

	@media only screen and (max-width: 600px) {
		.id {
			flex-direction: column;
			.profile-picture {
				max-width: 80dvw;
				max-height: 80dvw;
			}

			h1 {
				margin-top: 1rem;
			}
		}
	}
</style>
