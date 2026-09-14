<script lang="ts">
	import { current_theme, os_theme_preference } from '#lib/theme/index.js'
	import ThemeLink from '#lib/theme/ThemeLink.svelte'
	import { browser, dev } from '$app/env'
	import { page } from '$app/state'
	import '@fontsource/space-mono/400.css'
	import '@fontsource/space-mono/700.css'
	import '@fontsource/staatliches'
	import { onMount } from 'svelte'
	import '../app.postcss'
	import '../components.css'
	import '../globals.css'

	import Footer from './Footer.svelte'
	import Logo from './Logo.svelte'

	interface Props {
		children?: import('svelte').Snippet
	}

	let { children }: Props = $props()

	$current_theme = page.data.theme
</script>

<header>
	<div class="container">
		<nav>
			<ul>
				<li>
					<a href="/" title="homepage">
						<Logo />
					</a>
				</li>
				<li class="hide-on-mobile">
					<a href="/entries"> entries </a>
				</li>
				<!-- <li class="hide-on-mobile">
					<a href="https://www.youtube.com/@SarcevicAntonio"> youtube </a>
				</li> -->

				<span class="spacer"></span>

				{#if $current_theme}
					<ThemeLink theme="os-preference" />
				{/if}
				{#if $current_theme === 'light' || (!$current_theme && $os_theme_preference === 'light')}
					<ThemeLink theme="dark" />
				{:else if $current_theme === 'dark' || (!$current_theme && $os_theme_preference === 'dark')}
					<ThemeLink theme="light" />
				{:else}
					<ThemeLink theme="dark" />
					<ThemeLink theme="light" />
				{/if}
			</ul>
		</nav>
	</div>
</header>

<main>
	{@render children?.()}
</main>

<Footer />

<style>
	header {
		/* position: sticky; */
		z-index: 3;
		top: 0;
		background-color: var(--as-back-1);
		font-size: 1.5rem;
		max-width: var(--content-width);
		margin: auto;
	}

	nav {
		margin-inline: calc(var(--body-padding) * -1);
	}

	nav ul {
		list-style: none;
		display: flex;
		padding: 0;
		margin: 0;
	}

	nav a {
		padding: 0.5em 1.5em;
	}
	@media only screen and (max-width: 520px) {
		nav a {
			padding: 0.5em;
		}
	}

	nav :global(a) {
		display: block;
		color: var(--as-text-2);
		font-family: var(--display-font);
		text-decoration: none;

		&:hover,
		&:focus {
			background: var(--as-back-2);
			color: var(--as-text-1);
		}
	}

	.spacer {
		flex-grow: 2;
	}

	nav :global(svg) {
		vertical-align: -0.3em;
	}
</style>
