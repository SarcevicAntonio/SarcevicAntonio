<script lang="ts">
	import { browser, dev } from '$app/environment'
	import { page } from '$app/stores'
	import { current_theme, os_theme_preference } from '$lib/theme'
	import ThemeLink from '$lib/theme/ThemeLink.svelte'
	import { onMount, setContext } from 'svelte'
	import { writable, type Writable } from 'svelte/store'
	import '../app.postcss'
	import Footer from './Footer.svelte'
	import Logo from './Logo.svelte'

	$current_theme = $page.data.theme

	onMount(() => {
		if (!dev && browser && 'serviceWorker' in navigator) {
			// register self destroying service worker
			navigator.serviceWorker.register('/sw.js')
		}
	})
	let scroll_y: number
	$: is_index = $page.url.pathname === '/'

	const clicked = writable(false) as Writable<boolean> & { toggle: () => void }
	clicked.toggle = () => ($clicked = !$clicked)

	setContext('pride', {
		clicked,
	})
</script>

<header>
	<div class="container">
		<nav>
			<ul>
				<li>
					<a
						href="/"
						on:click={() => {
							if (scroll_y === 0 && is_index) clicked.toggle()
						}}
					>
						<Logo />
					</a>
				</li>
				<li>
					<a href="/content"> stuff </a>
				</li>
				<li class="hide-on-mobile">
					<a href="https://www.youtube.com/@SarcevicAntonio"> youtube </a>
				</li>

				<span class="spacer" />

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

<svelte:window bind:scrollY={scroll_y} />

<main>
	<slot />
</main>

<Footer />

<style>
	header {
		position: sticky;
		z-index: 3;
		top: 0;
		background-color: var(--as-back-1);
		margin-inline: -1rem;
		font-size: 1.5rem;
	}

	nav {
		max-width: var(--content-width);
		margin: auto;
	}

	nav ul {
		list-style: none;
		display: flex;
		padding: 0;
		margin: 0;
	}

	nav li:first-child a {
		margin-inline-start: -0.5em;
	}

	nav li:last-child a {
		margin-inline-end: -0.5em;
	}

	nav a {
		padding: 0.5em 1.5em;
		display: block;
		color: var(--as-text-2);
		font-family: var(--display-font);
		text-decoration: none;

		&:hover {
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

	@media only screen and (max-width: 520px) {
		.hide-on-mobile {
			display: none;
		}
	}
</style>
