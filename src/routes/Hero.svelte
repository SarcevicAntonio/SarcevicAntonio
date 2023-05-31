<script>
	import PajamasScrollDown from '~icons/pajamas/scroll-down'
</script>

<div class="hero">
	<section>
		<div class="image">
			<img src="/toni-transparent.png" alt="me in a blue shirt, grey hoodie and green cap" />
		</div>
		<div class="text">
			<h1>
				<span class="first-name">Antonio</span>
				<span class="last-name">Sarcevic</span>
			</h1>
			<p class="tagline">excited by&nbsp;ui development</p>
			<svg
				class="line"
				width="100%"
				height="auto"
				viewBox="0 0 548 301"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M14 287C127.5 -104 564 311 532.5 14"
					stroke="var(--as-accent)"
					stroke-width="1rem"
					stroke-linecap="round"
				/>
			</svg>
		</div>
	</section>
	<div class="scroll-indicator">
		<PajamasScrollDown />
	</div>
</div>

<style>
	.hero {
		min-height: 100dvh;
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
	}

	section {
		display: flex;
		align-items: center;
	}

	.image {
		z-index: -2;
	}

	img {
		border-radius: 100%;
		background-color: var(--as-back-2);
		max-width: 28rem;
		height: auto;
		width: 100%;
	}

	.text {
		margin-inline-start: -2rem;
		position: relative;
		font-size: clamp(1rem, calc(1rem + 2vw), 6rem);
	}

	h1,
	.tagline {
		margin: 0;
	}

	h1 {
		font-family: 'Staatliches';
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		font-size: clamp(2rem, calc(1rem + 8vw), 8rem);
		line-height: 1;
		font-weight: 400;
	}

	.first-name {
		margin-inline-start: -0.5em;
	}

	.tagline {
		margin-inline-start: 0.5em;
		font-family: 'Space Mono', sans-serif;
	}

	.line {
		position: absolute;
		inset-block-end: -25%;
		inset-inline-start: -25%;
		z-index: -1;
	}

	@media only screen and (max-width: 250px) {
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
