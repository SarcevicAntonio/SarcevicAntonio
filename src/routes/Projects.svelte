<script>
	const projects = [
		{
			label: 'doTogether',
			icon: 'https://do-together.vercel.app/icon-maskable.png',
			link: 'https://github.com/SarcevicAntonio/doTogether',
		},
		{
			label: 'SvelteLab',
			icon: 'https://sveltelab.dev/icon-maskable.png',
			link: 'https://github.com/sveltelab/sveltelab',
		},
		{
			label: 'kcalCalc',
			icon: 'https://kcal-calc.vercel.app/icon-maskable.png',
			link: 'https://github.com/SarcevicAntonio/kcalCalc',
		},
	]
</script>

<h2>Projects</h2>
<ul>
	{#each projects as { label, icon, link }}
		<li>
			<a href={link}>
				<img src={icon} alt="" width="512px" height="100%" />
				{label}
			</a>
		</li>
	{/each}
</ul>

<style>
	h2 {
		font-size: var(--step-5);
		text-align: center;
		margin-block-end: 0.5em;
	}

	ul {
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 5rem;
		list-style: none;
		margin-inline: auto;
	}

	a {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	img {
		max-width: var(--step-7);
		border-radius: 50%;
		box-shadow: 0px 0.125rem 0.25rem rgba(0, 0, 0, 0.05), 0px 0.25rem 0.5rem rgba(0, 0, 0, 0.04);
		transition-property: box-shadow, border-radius, scale;
		transition-duration: 0.2s;
		transition-timing-function: ease-in-out;
	}

	a:hover img,
	a:focus img {
		border-radius: 25%;
		scale: 1.05;
		box-shadow: 0px 0.5rem 1rem rgba(0, 0, 0, 0.15);
	}

	@media (prefers-reduced-motion) {
		img {
			transition-duration: 0.4s;
		}

		a:hover img,
		a:focus img {
			border-radius: 33%;
			scale: 1;
		}
	}
</style>
