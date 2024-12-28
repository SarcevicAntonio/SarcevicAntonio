<script>
	import { page } from '$app/state'
	import Entry from '$lib/Entry.svelte'
	import MaterialSymbolsArrowBackRounded from '~icons/material-symbols/arrow-back-rounded'
	import Logo from '../../Logo.svelte'

	let { data } = $props()

	let tag_filter = $derived(page.params.tags)
	let type_filter = $derived(page.url.searchParams.get('type'))
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
	{:else if data.content.filter((e) => e.type == 'blog_post').length}
		<p>
			<a href="{page.url.href}?type=blog_post">filter for blog posts</a>
		</p>
	{/if}

	<hr />

	{#if tag_filter}
		<p>showing entries with tag #{tag_filter}</p>
	{:else}
		{@const available_tags = [...data.all_tags].filter(
			(tag) => data.content.filter((e) => e.tags.includes(tag)).length,
		)}
		<p>filter by tag:</p>
		<ul class="tags">
			{#each available_tags as tag}
				<li aria-current={tag_filter === tag}>
					<a href="{page.url.href}/{tag}">
						#{tag}
					</a>
				</li>
			{/each}
		</ul>
	{/if}

	{#if type_filter || tag_filter}
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
			margin-block: 2em;
		}

		& ul > li {
			margin-block-end: 2rem;
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
