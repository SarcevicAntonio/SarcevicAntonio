<script>
	import { current_theme } from '$lib/theme'
	import Giscus from '@giscus/svelte'
	import 'prism-themes/themes/prism-a11y-dark.css'
	import MaterialSymbolsArrowBackRounded from '~icons/material-symbols/arrow-back-rounded'

	export let title
	export let tags
	export let published
	export let updated
	export let summary
</script>

<svelte:head>
	<title>{title.trim()} — sarcevic.dev</title>
	<meta name="description" content={summary.trim()} />
</svelte:head>

<section class="links">
	<a href="/" class="arrow-link">
		<MaterialSymbolsArrowBackRounded aria-hidden="true" />/
	</a>
	<a href="/content" class="arrow-link">
		<MaterialSymbolsArrowBackRounded aria-hidden="true" />/content
	</a>
</section>

<!-- Remember if you edit markup here to change it in get_blog_posts html render cleanup -->
<article>
	<h1>{title}</h1>
	<aside>
		<p>
			published: {new Date(published).toLocaleDateString(undefined, {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
			})}
		</p>
		{#if updated}
			<p>
				last updated: {new Date(updated).toLocaleDateString(undefined, {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				})}
			</p>
		{/if}
		<ul class="tags">
			{#each tags as tag}
				<li>
					<a href="/content?tags={tag}">
						#{tag}
					</a>
				</li>
			{/each}
		</ul>
	</aside>
	<slot />
</article>

<section>
	<Giscus
		theme={$current_theme === 'dark'
			? 'dark'
			: $current_theme === 'light'
			? 'light'
			: 'preferred_color_scheme'}
		repo="SarcevicAntonio/SarcevicAntonio"
		repoId="MDEwOlJlcG9zaXRvcnkxODkzMDAxNjM="
		category="Comments"
		categoryId="DIC_kwDOC0h9w84CSwfL"
		reactionsEnabled="1"
		inputPosition="top"
	/>
</section>

<section class="links">
	<a href="/content" class="arrow-link">
		<MaterialSymbolsArrowBackRounded aria-hidden="true" />/content
	</a>

	<a href="/" class="arrow-link">
		<MaterialSymbolsArrowBackRounded aria-hidden="true" />/
	</a>
</section>

<style>
	article,
	section {
		margin: auto;
		max-width: 50rem;
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

	a {
		color: inherit;
		text-decoration: none;
		&:hover,
		&:focus {
			text-decoration: underline;
		}
	}

	.links {
		margin-block: 2rem;
		& > * {
			display: block;
			text-align: center;
			margin-block: 1rem;
		}
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
		& :global(img) {
			max-width: calc(100% + 2rem);
			margin-inline: -1rem;
		}
		& :global(p) {
			line-height: 1.7;
		}

		& :global(pre) {
			background-color: black;
		}
	}
</style>
