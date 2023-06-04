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

<section>
	<h2>Projects</h2>
	<ul>
		{#each projects as { label, icon, link }}
			<li>
				<a href={link}>
					<img src={icon} alt="" />
					{label}
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		margin-block: 8rem;
		text-align: center;
		font-size: var(--step-1);
	}

	h2 {
		font-size: var(--step-5);
		text-align: center;
		margin-block-end: 0.25em;
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
		color: var(--as-text-2);
		text-decoration: none;
		&:hover,
		&:focus {
			color: var(--as-text-1);
			text-decoration: underline;
		}
	}

	img {
		max-width: var(--step-7);
		border-radius: 50%;
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
		transition-property: filter, border-radius;
		transition-duration: 0.2s;
		transition-timing-function: ease-in-out;
	}

	a:hover img,
	a:focus img {
		border-radius: 25%;
		filter: drop-shadow(0px 28px 33px rgba(0, 0, 0, 0.06))
			drop-shadow(0px 14.0137px 16.5161px rgba(0, 0, 0, 0.04562))
			drop-shadow(0px 8.44118px 9.94853px rgba(0, 0, 0, 0.0390953))
			drop-shadow(0px 5.40955px 6.37554px rgba(0, 0, 0, 0.0342537))
			drop-shadow(0px 3.50603px 4.13211px rgba(0, 0, 0, 0.03))
			drop-shadow(0px 2.20701px 2.60112px rgba(0, 0, 0, 0.0257463))
			drop-shadow(0px 1.26806px 1.4945px rgba(0, 0, 0, 0.0209047))
			drop-shadow(0px 0.558108px 0.65777px rgba(0, 0, 0, 0.01438));
	}
</style>
