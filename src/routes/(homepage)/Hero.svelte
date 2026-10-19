<script lang="ts">
	import { page } from '$app/state'
	import { tick } from 'svelte'
	import avatar_dark from './avatar-dark.webp'
	import avatar_light from './avatar-light.webp'

	let toni = $state({ ref: null as null | HTMLSpanElement, right: '', top: '' })
	function position_pronouns() {
		const rect = toni.ref?.getBoundingClientRect()
		toni.right = rect?.right + 'px'
		toni.top = rect?.top + 'px'
	}
	$effect(() => {
		if (pronouns.ref) pronouns.ref.style.position = 'absolute'
		tick().then(position_pronouns)
	})

	const pronouns = $state({
		ref: null as null | HTMLSpanElement,
		displays: ['*/?', '.*'],
		current_index: 0,
		cycle: () => (pronouns.current_index = (pronouns.current_index + 1) % pronouns.displays.length),
		get current() {
			return pronouns.displays[pronouns.current_index]
		},
	})
</script>

<svelte:window onresize={position_pronouns} />

<section class="hero">
	<div class="id" style:--toni-right={toni.right} style:--toni-top={toni.top}>
		<div
			role="img"
			aria-label="cartoon drawing of toni with a big smile and a fuzzy beard"
			class="profile-picture"
			style:--dark="url('{avatar_dark}')"
			style:--light="url('{avatar_light}')"
		></div>
		<h1>HEYO, I'M <span bind:this={toni.ref}>TONI!</span></h1>
		<button
			bind:this={pronouns.ref}
			tabindex="-1"
			class="pronouns"
			title="pronouns: any or none"
			onclick={() => pronouns.cycle()}
		>
			{pronouns.current}
		</button>
	</div>

	<p class="tagline">
		queer person living in münster.<br />
		loves to craft solid web experiences.<br />
		believes in healing from all this bullshit.
	</p>
	<div class="bars">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
	<div class="badges">
		{#each page.data.badges as badge (badge)}
			{@const title = badge.split(/\.[^.]*$/).at(0)}
			<img width="88" height="31" src="/badges/{badge}" alt={title} {title} />
		{/each}
	</div>
</section>

<style>
	.hero {
		min-height: 88svh;
		display: grid;
		place-content: center;
	}

	.id {
		display: flex;
		align-items: center;
		gap: var(--step-2);

		.profile-picture {
			border-radius: 100%;
			background-color: var(--as-back-2);
			width: 100%;
			height: 100%;
			aspect-ratio: 1/1;
			max-width: 14rem;
			max-height: 14rem;
			background-image: light-dark(var(--light), var(--dark));
			background-size: cover;
		}

		h1 {
			margin: 0;
			font-size: var(--step-7);
			font-weight: 400;
			color: var(--as-text-2);
			line-height: 1;
			text-wrap: balance;
		}

		.pronouns {
			cursor: help;
			padding-inline: 0.25em;
			padding-block: 0.2em;
			align-self: flex-start;
			transform: rotate(10deg);
			left: calc(var(--toni-right) - var(--step-1));
			top: calc(var(--toni-top) - var(--step--1));
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
		margin-block-start: 2rem;
		max-width: 360px;
		& img {
			cursor: help;
			image-rendering: pixelated;
		}
	}

	@media only screen and (max-width: 600px) {
		.id {
			flex-direction: column;
			gap: 1rem;
			.profile-picture {
				max-width: 60dvw;
				max-height: 60dvw;
			}

			h1 {
				text-align: center;
			}
		}
	}
</style>
