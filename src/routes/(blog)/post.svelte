<script>
	import { afterNavigate } from '$app/navigation'
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

	afterNavigate(() => {
		for (const node of document.querySelectorAll('pre > code')) {
			const button = document.createElement('button')
			button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5 22q-.825 0-1.413-.588T3 20V7q0-.425.288-.713T4 6q.425 0 .713.288T5 7v13h10q.425 0 .713.288T16 21q0 .425-.288.713T15 22H5Zm4-4q-.825 0-1.413-.588T7 16V4q0-.825.588-1.413T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.588 1.413T18 18H9Zm0-2h9V4H9v12Zm0 0V4v12Z"/></svg>'
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

<Notifications position="top" />

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
			position: relative;
			overflow-y: visible;
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
					opacity: 0.8;
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
