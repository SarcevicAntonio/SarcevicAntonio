<div class="container">
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
		</div>
	</section>
</div>

<style>
	.container {
		min-height: 100dvh;
		display: grid;
		place-content: center;
	}

	section {
		display: flex;
		align-items: center;
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
	}

	.first-name {
		margin-inline-start: -0.5em;
	}

	.tagline {
		margin-inline-start: 0.5em;
		font-family: 'Space Mono', sans-serif;
		font-size: clamp(1rem, calc(1rem + 2vw), 6rem);
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
	}
</style>
