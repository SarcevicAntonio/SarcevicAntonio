<script context="module">
	import dependencies from '$lib/dependency-report.json'
	import MaterialSymbolsRssFeedRounded from '~icons/material-symbols/rss-feed-rounded'
	import MaterialSymbolsAccountTreeRounded from '~icons/material-symbols/account-tree-rounded'
</script>

<footer>
	<div class="content">
		<ul class="links">
			<li>
				<a href="/atom.xml" title="RSS / Atom Feed">
					<MaterialSymbolsRssFeedRounded aria-hidden="true" />
				</a>
			</li>
			<li>
				<a href="/sitemap.xml" title="Sitemap">
					<MaterialSymbolsAccountTreeRounded aria-hidden="true" />
				</a>
			</li>
		</ul>
		<h2 class="notice">Crafted with 💖 by Antonio Sarcevic in Münster during 2023.</h2>
		<p>sarcevic.dev is powered by the following dependencies</p>
		<ul class="credits">
			{#each dependencies as dependency}
				{@const link = dependency.link
					.replace('git://', 'https://')
					.replace('git+', '')
					.replace('.git', '')
					.replace('ssh://', 'https://')}

				<li>
					<a target="_blank" rel="noreferrer" href={link}>
						{dependency.name}
						@{dependency.installedVersion} ({dependency.licenseType})
					</a>
				</li>
			{/each}
		</ul>
	</div>
</footer>

<style>
	footer {
		color: var(--as-back-1);
		background-color: var(--as-text-1);
		padding: 1rem;
		font-size: var(--step--1);
		margin-block-start: 5rem;
		margin-inline: -1rem;
	}

	.content {
		margin: auto;
		max-width: 50rem;
	}

	ul.links {
		list-style: none;
		display: flex;
		margin-block-start: 1rem;
		margin-block-end: 0;
		padding: 0;
		gap: 1rem;
		font-size: var(--step-1);

		& a {
			color: var(--as-back-2);
		}

		& a:hover,
		a:focus {
			color: var(--as-back-1);
		}
	}

	h2 {
		font-family: 'Space Mono', sans-serif;
		font-size: var(--step-0);
		margin-block-start: 0.5rem;
		font-weight: 400;
	}

	a {
		color: inherit;
	}

	ul.credits {
		padding-inline-start: 1.5rem;
		overflow: auto;
	}

	a {
		text-decoration: none;
	}

	a:focus,
	a:hover {
		text-decoration: underline;
	}
</style>
