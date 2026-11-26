<script lang="ts">
	import ThemeLinks from '#lib/theme/ThemeLinks.svelte'
	import '@fontsource/space-mono/400.css'
	import '@fontsource/space-mono/700.css'
	import '@fontsource/staatliches'
	import '../app.css'
	import Footer from './Footer.svelte'
	import Logo from './Logo.svelte'

	let { children } = $props()
</script>

<a href="#main" class="skip-link">Skip to content</a>

<header>
	<div class="container">
		<nav aria-label="Main">
			<a href="/" aria-label="homepage">
				<Logo />
			</a>
			<a href="/txt"> txt </a>
			<a href="/img"> img </a>

			<span class="spacer"></span>

			<ThemeLinks />
		</nav>
	</div>
</header>

<main id="main" tabindex="-1">
	{@render children?.()}
</main>

<Footer />

<style>
	.skip-link {
		position: fixed;
		inset-block-start: 0;
		inset-inline-start: 0;
		z-index: 100;
		padding: 0.5rem 1rem;
		background-color: var(--as-back-2);
		transform: translateY(-100%);

		&:focus {
			transform: none;
		}
	}

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
