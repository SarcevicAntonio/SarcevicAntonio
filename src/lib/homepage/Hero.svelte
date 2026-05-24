<script lang="ts">
	import { page } from '$app/state'
	import avatar from './avatar-transparent.png'
</script>

<section class="hero">
	<div class="id">
		<img
			class="profile-picture"
			width="224px"
			height="224px"
			src={avatar}
			alt="Antonio Sarcevic in a green shirt, smiling and looking upward and to the right off camera"
		/>
		<h1>heyo, i'm toni!</h1>
	</div>

	<p class="tagline">
		queer person living in münster.<br />loves to craft solid web experiences.
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
			margin-inline-start: 0.25em;
			line-height: 1;
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

	.profile-picture {
		background-image: var(--in-colour);
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
