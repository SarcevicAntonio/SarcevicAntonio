<script>
	import { date_string } from '#lib/date_helpers.js'
	import '@fontsource/atkinson-hyperlegible/400.css'
	import '@fontsource/atkinson-hyperlegible/700.css'
	import MaterialSymbolsArrowBackRounded from '~icons/material-symbols/arrow-back-rounded'
	import Logo from '../Logo.svelte'
	import './twinkleplop.css'

	let { title, tags, published, updated, summary, children } = $props()
</script>

<svelte:head>
	<title>{title.trim()} — linkplay.space</title>
	<meta name="description" content={summary.trim()} />
</svelte:head>

<!-- Remember if you edit markup here to change it in get_blog_posts html render cleanup -->
<article>
	<h1>{title}</h1>
	{#if published || updated || tags}
		<!-- content here -->
		<aside>
			{#if published}
				<p>
					published: {date_string(published)}
				</p>
			{/if}
			{#if updated}
				<p>
					last updated: {date_string(updated)}
				</p>
			{/if}
			{#if tags}
				<ul class="tags">
					{#each tags as tag (tag)}
						<li>
							<a href="/entries/{tag}">
								#{tag}
							</a>
						</li>
					{/each}
				</ul>
			{/if}
		</aside>
	{/if}
	{@render children?.()}
</article>

<section class="links">
	<a href="/entries" class="arrow-link">
		<MaterialSymbolsArrowBackRounded aria-hidden="true" />/entries
	</a>

	<a href="/" class="arrow-link" aria-label="homepage">
		<MaterialSymbolsArrowBackRounded aria-hidden="true" /><Logo />
	</a>
</section>

<style>
	article,
	section {
		margin: auto;
		max-width: var(--content-width);
	}

	h1 {
		text-align: center;
		position: sticky;
		font-size: var(--step-5);
	}

	aside {
		text-align: end;
		font-size: var(--step--1);
		color: var(--as-text-2);
	}

	.links {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	ul.tags {
		margin: 0;
		padding: 0;
		list-style: none;
		display: inline-flex;
		flex-wrap: wrap;
		gap: 1em;
	}

	article {
		font-family: 'Atkinson Hyperlegible', sans-serif;
	}

	article :global {
		ul {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}

		li > ul {
			margin-block-start: 0.5rem;
		}

		img {
			display: block;
			max-width: 100%;
			margin: auto;
			border-radius: 0.3em;
			background: light-dark(var(--as-back-1), var(--as-text-1));
		}

		p {
			line-height: 1.7;
		}

		.toc-label {
			font-weight: 700;
		}

		.code-block-title,
		.code-block-body {
			background-color: var(--twp-background);
			border-radius: 0.3em;
			margin-inline: 0.5rem;
			padding: 1em;
		}

		.code-block-title {
			border: none;
			border-end-end-radius: 0;
			border-end-start-radius: 0;
		}
		.code-block-title + .code-block-body {
			border-start-end-radius: 0;
			border-start-start-radius: 0;
		}

		.code-block-copy {
			padding-inline: 0.75em;
			border-width: 0.125em;
		}
		.code-block:has(.code-block-title) .code-block-actions {
			inset-block-start: -2.825rem;
		}

		.autolink-header {
			font-size: 0.8em;
			padding-inline-end: 0.2em;
			margin-inline-start: -0.7em;
			vertical-align: 0.2em;
			&::before {
				content: '#';
			}
			&:hover,
			&:focus {
				color: var(--as-text-1);
			}
			@media (max-width: 1000px) {
				margin-inline-start: unset;
			}
		}
	}
</style>
