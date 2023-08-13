<script context="module">
	import { contact_links } from '$lib/contact_links'
	import dependencies from '$lib/dependency-report.json'
	import MaterialSymbolsAccountTreeRounded from '~icons/material-symbols/account-tree-rounded'
	import MaterialSymbolsRssFeedRounded from '~icons/material-symbols/rss-feed-rounded'
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
			<li class="break"><hr /></li>
			{#each contact_links as { href, title, icon }}
				<li>
					<a {href} {title}>
						<svelte:component this={icon} aria-hidden="true" />
					</a>
				</li>
			{/each}
		</ul>
		<h2 class="notice">
			Crafted with 💖 by Antonio Sarcevic in Münster and Porto during spring and summer 2023.
		</h2>
		<p><a href="/">sarcevic.dev</a> is powered by the following dependencies:</p>
		<ul class="credits">
			{#each dependencies as dependency}
				{@const link = dependency.link
					.replace('git://', 'https://')
					.replace('git+', '')
					.replace('.git', '')
					.replace('ssh://', 'https://')}

				<li>
					<a href={link}>
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
		border-block-end: 1rem solid var(--as-accent);
	}

	.content {
		margin: auto;
		max-width: 50rem;
	}

	h2 {
		font-family: 'Space Mono', sans-serif;
		font-size: var(--step-0);
		margin-block-start: 0.5rem;
		font-weight: 400;
	}

	.notice {
		margin-block-end: 5rem;
	}

	a {
		color: inherit;

		text-decoration: none;
		&:focus,
		&:hover {
			text-decoration: underline;
		}
	}

	ul.links {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		margin-block-start: 5rem;
		margin-block-end: 0;
		padding: 0;
		gap: 1rem;
		font-size: var(--step-1);

		& a {
			color: var(--as-back-2);
			& :global(svg) {
				vertical-align: sub;
			}
		}

		& a:hover,
		a:focus {
			color: var(--as-back-1);
		}

		& hr {
			margin: 0.5em;
			margin-block: 0.25em;
		}
	}

	ul.credits {
		padding-inline-start: 1.5rem;
		overflow: auto;
		margin-block-end: 5rem;
	}

	.break {
		display: contents;
	}
</style>
