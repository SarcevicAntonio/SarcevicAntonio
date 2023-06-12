<script lang="ts">
	import DarkMode from '~icons/material-symbols/dark-mode-outline-rounded'
	import LightMode from '~icons/material-symbols/light-mode-outline'
	import Reset from '~icons/material-symbols/settings-backup-restore-rounded'
	import { page } from '$app/stores'
	import { os_theme_preference } from './theme'

	$: redirect = `?redirect=` + $page.url.pathname
</script>

<section>
	{#if $page.data.theme}
		<a href="/set-theme/os-preference{redirect}" title="Use Operating System Theme Preference">
			<Reset aria-hidden="true" />
		</a>
	{/if}
	{#if $page.data.theme === 'light' || ($page.data.theme === undefined && $os_theme_preference === 'light')}
		<a href="/set-theme/dark{redirect}" title="Use Dark Theme">
			<DarkMode aria-hidden="true" />
		</a>
	{:else}
		<a href="/set-theme/light{redirect}" title="Use Light Theme">
			<LightMode aria-hidden="true" />
		</a>
		{#if $os_theme_preference === undefined}
			<a href="/set-theme/dark{redirect}" title="Use Dark Theme">
				<DarkMode aria-hidden="true" />
			</a>
		{/if}
	{/if}
</section>

<style>
	section {
		position: fixed;
		inset-block-start: 0;
		inset-inline-end: 0;
		border-end-start-radius: 1em;
		font-size: var(--step-1);
		z-index: 99;
		display: flex;
		padding-block-end: 0.2rem;
		padding-inline-start: 0.2rem;
		background-color: var(--as-back-1);
	}

	a {
		padding-inline: 0.15rem;
		color: var(--as-text-2);

		&:hover,
		&:focus {
			color: var(--as-text-1);
		}

		& :global(svg) {
			vertical-align: sub;
		}
	}
</style>
