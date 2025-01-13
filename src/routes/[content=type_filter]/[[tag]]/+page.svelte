<script>
	import { page } from '$app/state'
	import Entry from '$lib/Entry.svelte'
	import MaterialSymbolsArrowBackRounded from '~icons/material-symbols/arrow-back-rounded'
	import Logo from '../../Logo.svelte'

	let { data } = $props()

	let tag_filter = $derived(page.params.tag)
	let type_filter = $derived(page.params.content === 'posts')
	let blog_posts_count = $derived(data.content.filter((e) => e.type == 'blog_post').length)
</script>

<svelte:head>
	{#if tag_filter}
		<title>#{tag_filter} entries — sarcevic.dev</title>
		<meta name="description" content="my #{tag_filter} entries on the internet" />
	{:else}
		<title>entries — sarcevic.dev</title>
		<meta name="description" content="my entries on the internet" />
	{/if}
</svelte:head>

<h1>Entries</h1>

<section class="tags">
	{#if type_filter}
		<p>showing only blog posts</p>
		<hr />
	{:else if blog_posts_count && blog_posts_count !== data.content.length}
		<p>
			<a href="/posts/{page.params.tag}">filter for blog posts</a>
		</p>
		<hr />
	{/if}

	{#if tag_filter}
		<p>showing entries with tag #{tag_filter}</p>
	{:else}
		{@const available_tags = [...data.all_tags].filter(
			(tag) => data.content.filter((e) => e.tags.includes(tag)).length
		)}
		<p>filter by tag:</p>
		<ul class="tags">
			{#each available_tags as tag}
				<li aria-current={tag_filter === tag}>
					<a href="{page.params.content}/{tag}">
						#{tag}
					</a>
				</li>
			{/each}
		</ul>
	{/if}

	{#if type_filter || tag_filter}
		<hr />
		<a href="/entries" class="arrow-link">
			<MaterialSymbolsArrowBackRounded />
			remove filters
		</a>
	{/if}
</section>

<section class="posts">
	<ul>
		{#each data.content as entry}
			<li>
				<Entry {entry} h_level={2} show_tags></Entry>
			</li>
		{/each}
	</ul>
</section>

<a href="/" class="arrow-link">
	<MaterialSymbolsArrowBackRounded aria-hidden="true" /><Logo />
</a>

<style>
	h1 {
		text-align: center;
		font-size: var(--step-5);
	}

	.tags {
		margin: auto;
		max-width: var(--content-width);
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

	.posts {
		& ul {
			max-width: var(--content-width);
			margin-inline: auto;
			margin-block: 5em;
		}

		& ul > li {
			margin-block-end: 5rem;
		}

		& :global(a > h2) {
			font-size: var(--step-3);
			margin-block: 0.25em;
			text-align: center;
			text-wrap: balance;
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
</style>
