<script lang="ts">
	type Project = {
		label: string
		icon: string
		link: string
	}

	const projects = [
		{
			label: 'maintainum',
			icon: 'https://codeberg.org/linkplay-space/maintainum/raw/branch/main/static/icon-maskable.png',
			link: 'https://codeberg.org/linkplay-space/maintainum#readme',
		},
		{
			label: 'bipan.ms',
			icon: 'https://bipan.ms/favicon.png',
			link: 'https://bipan.ms',
		},
		{
			label: 'SvelteLab',
			icon: 'https://sveltelab.dev/icon-maskable.png',
			link: 'https://github.com/sveltelab/sveltelab',
		},
	] satisfies Project[]
	const archived_projects = [
		{
			label: 'doTogether',
			icon: 'https://codeberg.org/linkplay-space/doTogether/raw/branch/master/static/icon-maskable.png',
			link: 'https://codeberg.org/linkplay-space/doTogether#readme',
		},
		{
			label: 'kcalCalc',
			icon: 'https://codeberg.org/linkplay-space/kcalCalc/raw/branch/master/static/icon-maskable.png',
			link: 'https://codeberg.org/linkplay-space/kcalCalc#readme',
		},
	] satisfies Project[]
</script>

{#snippet project_icons(projects: Project[])}
	<ul>
		{#each projects as { label, icon, link } (label)}
			<li>
				<a href={link}>
					<img src={icon} alt="" width="512px" height="100%" />
					{label}
				</a>
			</li>
		{/each}
	</ul>
{/snippet}

<h2>Projects</h2>
{@render project_icons(projects)}
<h3>Archived</h3>
{@render project_icons(archived_projects)}

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

	h3 {
		font-size: var(--step-3);
		margin-block-start: 3rem;
		margin-block-end: 2rem;
	}

	h3 + ul {
		filter: grayscale(90%) contrast(80%);
	}
	a {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	img {
		background-color: var(--as-back-2);
		max-width: var(--step-7);
		border-radius: 50%;
		box-shadow:
			0px 0.125rem 0.25rem rgba(0, 0, 0, 0.05),
			0px 0.25rem 0.5rem rgba(0, 0, 0, 0.04);
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
