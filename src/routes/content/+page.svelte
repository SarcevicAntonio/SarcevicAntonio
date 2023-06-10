<script>
	import { page } from '$app/stores'
	import MaterialSymbolsArrowBackRounded from '~icons/material-symbols/arrow-back-rounded'
	import MaterialSymbolsDocs from '~icons/material-symbols/docs'

	export let data

	$: filter_tag = $page.url.searchParams.get('tags')
</script>

<svelte:head>
	{#if filter_tag}
		<title>#{filter_tag} content — sarcevic.dev</title>
	{:else}
		<title>content — sarcevic.dev</title>
	{/if}
</svelte:head>

<a href="/" class="arrow-link top-padding">
	<MaterialSymbolsArrowBackRounded aria-hidden="true" />/
</a>

<h1>Content</h1>

<section class="tags">
	{#if filter_tag}
		<p>posts with tag #{filter_tag}</p>
		<a href="/content" class="arrow-link">
			<MaterialSymbolsArrowBackRounded />
			remove filter
		</a>
	{:else}
		<p>filter by tag:</p>
		<ul>
			{#each [...data.all_tags] as tag}
				<li aria-current={filter_tag === tag}>
					<a href="/content?tags={tag}">
						#{tag}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</section>

<section class="posts">
	<ul>
		{#each data.content as { title, summary, href, published }}
			<li>
				<a {href}>
					<h2>{title}</h2>
					<p>{summary}</p>
					<p class="meta">
						<MaterialSymbolsDocs />
						{new Date(published).toLocaleDateString(undefined, {
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}
					</p>
				</a>
			</li>
		{/each}
	</ul>
</section>

<a href="/" class="arrow-link">
	<MaterialSymbolsArrowBackRounded aria-hidden="true" />/
</a>

<style>
	h1 {
		text-align: center;
		font-size: var(--step-5);
	}

	ul {
		padding: 0;
		list-style: none;
	}

	.tags {
		text-align: center;
		& ul {
			display: flex;
			flex-wrap: wrap;
			gap: 1rem;
			justify-content: center;
		}
		& ul > li[aria-current='true'] {
			text-decoration: underline;
		}
	}

	section a {
		text-decoration: none;
		&:hover,
		&:focus {
			text-decoration: underline;
		}
	}

	.posts {
		& ul {
			max-width: 50rem;
			margin-inline: auto;
		}

		& ul > li > a {
			display: block;
			border: 0.2rem solid var(--as-text-1);
			padding: 1rem;
			border-radius: 1rem;
			margin-block-end: 2rem;
		}
		& a > h2 {
			font-size: var(--step-3);
			margin-block: 0.5em;
		}

		& a > *:first-child {
			margin-block-start: 0;
		}

		& a > *:last-child {
			margin-block-end: 0;
		}

		& a:hover,
		& a:focus {
			text-decoration: none;
			& > h2 {
				text-decoration: underline;
			}
		}
	}

	a {
		color: inherit;
		& :global(svg) {
			vertical-align: sub;
		}
	}

	.arrow-link {
		display: block;
		text-align: center;
	}

	.top-padding {
		margin-block: 2rem;
	}
</style>
