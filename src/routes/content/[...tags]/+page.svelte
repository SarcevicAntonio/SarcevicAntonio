<script>
	import { page } from '$app/stores'
	import { reformat_date_string } from '$lib/date_helpers'
	import MaterialSymbolsArrowBackRounded from '~icons/material-symbols/arrow-back-rounded'
	import MaterialSymbolsDocs from '~icons/material-symbols/docs'
	import MaterialSymbolsLink from '~icons/material-symbols/link'
	import YouTube from '~icons/simple-icons/youtube'
	import MaterialSymbolsOpenInNewRounded from '~icons/material-symbols/open-in-new-rounded'
	import Logo from '../../Logo.svelte'

	export let data

	$: filter_tag = $page.params.tags
</script>

<svelte:head>
	{#if filter_tag}
		<title>#{filter_tag} content — sarcevic.dev</title>
		<meta name="description" content="my #{filter_tag} content on the internet" />
	{:else}
		<title>content — sarcevic.dev</title>
		<meta name="description" content="my content on the internet" />
	{/if}
</svelte:head>
<h1>Entries</h1>

<section class="tags">
	{#if filter_tag}
		<p>listing posts with tag #{filter_tag}</p>
		<a href="/content" class="arrow-link">
			<MaterialSymbolsArrowBackRounded />
			remove filter
		</a>
	{:else}
		<p>filter by tag:</p>
		<ul class="tags">
			{#each [...data.all_tags] as tag}
				<li aria-current={filter_tag === tag}>
					<a href="/content/{tag}">
						#{tag}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</section>

<section class="posts">
	<ul>
		{#each data.content as { title, summary, href, published, lang, type }}
			<li>
				<a {href} class="content-box">
					<h2>
						{title}
						<span class="detail">
							{#if lang === 'DE'}
								<span class="screen-reader-only"> (Content In German Language) </span>
								<span aria-hidden="true"> 🇩🇪 </span>
							{/if}
							{#if type === 'appearance'}
								<span class="screen-reader-only"> External Link </span>
								<MaterialSymbolsOpenInNewRounded aria-hidden="true" />
							{/if}
						</span>
					</h2>
					{#if summary}
						<p>{summary}</p>
						<hr />
					{/if}
					<p class="meta">
						{reformat_date_string(published)}
						{#if type === 'blog_post'}
							<span class="screen-reader-only"> Blog Post </span>
							<MaterialSymbolsDocs aria-hidden="true" />
						{:else if type === 'appearance'}
							{#if href.includes('youtube')}
								<span class="screen-reader-only"> YouTube Link </span>
								<YouTube aria-hidden="true" />
							{:else}
								<span class="screen-reader-only"> External Link </span>
								<MaterialSymbolsLink aria-hidden="true" />
							{/if}
						{/if}
					</p>
				</a>
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

		& a > h2 {
			font-size: var(--step-3);
			margin-block: 0.25em;
			text-align: center;
			text-wrap: balance;
		}

		& a > *:first-child {
			margin-block-start: 0;
		}

		& a > *:last-child {
			margin-block-end: 0;
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
