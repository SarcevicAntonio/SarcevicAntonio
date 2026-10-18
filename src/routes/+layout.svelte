<script lang="ts">
	import { os_theme_preference, preferred_theme } from '#lib/theme/index.js'
	import ThemeLink from '#lib/theme/ThemeLink.svelte'
	import { page } from '$app/state'
	import '@fontsource/space-mono/400.css'
	import '@fontsource/space-mono/700.css'
	import '@fontsource/staatliches'
	import '../app.css'

	import Footer from './Footer.svelte'
	import Logo from './Logo.svelte'

	interface Props {
		children?: import('svelte').Snippet
	}

	let { children }: Props = $props()

	$preferred_theme = page.data.theme
</script>

<header>
	<div class="container">
		<nav>
			<a href="/" title="homepage">
				<Logo />
			</a>
			<a href="/img"> img </a>

			<span class="spacer"></span>

			{#if $preferred_theme}
				<ThemeLink theme="os-preference" />
			{/if}
			{#if $preferred_theme === 'light' || (!$preferred_theme && $os_theme_preference === 'light')}
				<ThemeLink theme="dark" />
			{:else if $preferred_theme === 'dark' || (!$preferred_theme && $os_theme_preference === 'dark')}
				<ThemeLink theme="light" />
			{:else}
				<ThemeLink theme="dark" />
				<ThemeLink theme="light" />
			{/if}
		</nav>
	</div>
</header>

<main>
	{@render children?.()}
</main>

<Footer />

<style>
	header {
		font-size: 1.5rem;
		max-width: var(--content-width);
		margin: auto;
	}

	nav {
		margin-inline: calc(var(--body-padding) * -1);
		display: flex;
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
