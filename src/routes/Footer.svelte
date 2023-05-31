<script context="module">
	import dependencies from '$lib/dependency-report.json'
</script>

<footer>
	<div class="content">
		<p class="notice">Crafted with 💖 by Antonio Sarcevic in Münster during 2023.</p>
		<p>This Site is powered by the following dependencies:</p>
		<ul>
			{#each dependencies as dependency}
				{@const link = dependency.link
					.replace('git://', 'https://')
					.replace('git+', '')
					.replace('.git', '')}
				<li>
					<a target="_blank" rel="noreferrer" href={link}>{dependency.name}</a>
					@{dependency.installedVersion} ({dependency.licenseType})
				</li>
			{/each}
		</ul>
	</div>
</footer>

<style>
	footer {
		font-size: var(--step-0);
		color: var(--as-back-1);
		background-color: var(--as-text-1);
		font-family: 'Space Mono', sans-serif;
		padding-block: 1rem;
		padding-inline: 2rem;
	}
	.content {
		margin: auto;
		max-width: 100rem;
	}

	.notice {
		font-size: var(--step-1);
	}

	a {
		color: inherit;
	}

	ul {
		padding-inline-start: 1.5rem;
	}
</style>
