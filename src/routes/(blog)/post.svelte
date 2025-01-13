<script>
	import { afterNavigate } from '$app/navigation'
	import { reformat_date_string } from '$lib/date_helpers'
	import { current_theme } from '$lib/theme'
	import Giscus from '@giscus/svelte'
	import { Notifications, notification } from 'as-comps'
	import 'prism-themes/themes/prism-a11y-dark.css'
	import MaterialSymbolsArrowBackRounded from '~icons/material-symbols/arrow-back-rounded'

	export let title
	export let tags
	export let published
	export let updated
	export let summary

	afterNavigate(function add_copy_button_to_codeblocks() {
		for (const node of document.querySelectorAll('pre > code')) {
			const button = document.createElement('button')
			button.innerHTML =
				'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 22q-.825 0-1.413-.588T3 20V7q0-.425.288-.713T4 6q.425 0 .713.288T5 7v13h10q.425 0 .713.288T16 21q0 .425-.288.713T15 22H5Zm4-4q-.825 0-1.413-.588T7 16V4q0-.825.588-1.413T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.588 1.413T18 18H9Zm0-2h9V4H9v12Zm0 0V4v12Z"/></svg>'
			button.className = 'copy-button'
			button.onclick = () => {
				navigator.clipboard.writeText(node.textContent ?? '')
				notification('copied content')
			}

			const wrapper = document.createElement('div')
			wrapper.className = 'copy-button-wrapper'
			wrapper.append(button)
			node.parentNode?.prepend(wrapper)
		}
	})
</script>

<svelte:head>
	<title>{title.trim()} — sarcevic.dev</title>
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
					published: {reformat_date_string(published)}
				</p>
			{/if}
			{#if updated}
				<p>
					last updated: {reformat_date_string(updated)}
				</p>
			{/if}
			{#if tags}
				<ul class="tags">
					{#each tags as tag}
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
	<slot />
</article>

<section>
	<Giscus
		id="comments"
		term="SarcevicAntonio"
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
	<a href="/entries" class="arrow-link">
		<MaterialSymbolsArrowBackRounded aria-hidden="true" />/entries
	</a>

	<a href="/" class="arrow-link">
		<MaterialSymbolsArrowBackRounded aria-hidden="true" />/
	</a>
</section>

<Notifications position="bottom" />

<style>
	@import '@fontsource/roboto/400.css';
	@import '@fontsource/roboto/700.css';

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
		font-family: 'Roboto', sans-serif;

		& :global(ul) {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}

		& :global(li > ul) {
			margin-block-start: 0.5rem;
		}

		& :global(img) {
			display: block;
			max-width: 100%;
			margin: auto;
			margin-inline: 0.5rem;
			border-radius: 0.3em;
		}

		& :global(p) {
			line-height: 1.7;
		}

		& :global(pre) {
			background-color: black;
			position: relative;
			overflow-y: visible;
			margin-inline: 0.5rem;
			& :global(.copy-button-wrapper) {
				position: sticky;
				top: 0;
				left: 100%;
				height: 0;
				width: 0;
				overflow: visible;
				& :global(.copy-button) {
					background: none;
					border: none;
					opacity: 0.6;
					position: absolute;
					top: 0;
					right: 0;
					&:hover {
						opacity: 1;
					}
				}
			}
		}
	}
</style>
