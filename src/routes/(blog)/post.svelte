<script>
	import MaterialSymbolsArrowBackRounded from '~icons/material-symbols/arrow-back-rounded'
	import Giscus from '@giscus/svelte'

	export let title
	export let tags
	export let published
	export let updated
</script>

<svelte:head>
	<title>
		{title} — sarcevic.dev
	</title>
</svelte:head>

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
					<a href="/content?tag={tag}">
						#{tag}
					</a>
				</li>
			{/each}
		</ul>
	</aside>
	<slot />
</article>

<section class="links">
	<a href="/content" class="arrow-link">
		<MaterialSymbolsArrowBackRounded aria-hidden="true" />/content
	</a>

	<a href="/" class="arrow-link">
		<MaterialSymbolsArrowBackRounded aria-hidden="true" />/
	</a>
</section>

<section>
	<Giscus
		repo="SarcevicAntonio/SarcevicAntonio"
		repoId="MDEwOlJlcG9zaXRvcnkxODkzMDAxNjM="
		category="Comments"
		categoryId="DIC_kwDOC0h9w84CSwfL"
		reactionsEnabled="1"
		inputPosition="top"
	/>
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

	article :global(img) {
		max-width: calc(100% + 2rem);
		margin-inline: -1rem;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	.links {
		margin-block: 2rem;
		& > * {
			display: block;
			text-align: center;
			margin-block: 1rem;
		}
	}

	a:hover,
	a:focus {
		text-decoration: underline;
	}

	ul.tags {
		margin: 0;
		padding: 0;
		list-style: none;
		display: inline-flex;
		gap: 1em;
	}
</style>
