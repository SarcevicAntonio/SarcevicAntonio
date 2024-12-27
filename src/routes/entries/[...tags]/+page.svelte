<script>
	import { page } from '$app/state'
	import Entry from '$lib/Entry.svelte'
	import MaterialSymbolsArrowBackRounded from '~icons/material-symbols/arrow-back-rounded'
	import Logo from '../../Logo.svelte'

	let { data } = $props()

	let filter_tag = $derived(page.params.tags)
</script>

<svelte:head>
	{#if filter_tag}
		<title>#{filter_tag} entries — sarcevic.dev</title>
		<meta name="description" content="my #{filter_tag} entries on the internet" />
	{:else}
		<title>entries — sarcevic.dev</title>
		<meta name="description" content="my entries on the internet" />
	{/if}
</svelte:head>
<h1>Entries</h1>

<section class="tags">
	{#if filter_tag}
		<p>listing posts with tag #{filter_tag}</p>
		<a href="/entries" class="arrow-link">
			<MaterialSymbolsArrowBackRounded />
			remove filter
		</a>
	{:else}
		<p>filter by tag:</p>
		<ul class="tags">
			{#each [...data.all_tags] as tag}
				<li aria-current={filter_tag === tag}>
					<a href="/entries/{tag}">
						#{tag}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</section>

<section class="posts">
	<ul>
		{#each data.content as entry}
			<li>
				<Entry {entry} h_level={2}></Entry>
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

	.detail {
		font-size: 0.4em;
		vertical-align: 0.8em;
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


		.meta {
			text-align: end;
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
