<script lang="ts">
	import DarkMode from '~icons/material-symbols/dark-mode-outline-rounded'
	import LightMode from '~icons/material-symbols/light-mode-outline'
	import Reset from '~icons/material-symbols/settings-backup-restore-rounded'
	import { page } from '$app/stores'
	import { os_theme_preference } from './theme'
</script>

<section>
	{#if $page.data.theme}
		<a href="/set-theme/os-preference" title="Use Operating System Theme Preference">
			<Reset aria-hidden="true" />
		</a>
	{/if}

	{$page.data.theme}
	{$os_theme_preference}
	{#if $page.data.theme === 'light' || ($page.data.theme === undefined && $os_theme_preference === 'light')}
		<a href="/set-theme/dark" title="Use Dark Theme">
			<DarkMode aria-hidden="true" />
		</a>
	{:else}
		<a href="/set-theme/light" title="Use Light Theme">
			<LightMode aria-hidden="true" />
		</a>
	{/if}
</section>

<style>
	section {
		position: fixed;
		inset-block-start: 0;
		inset-inline-end: 0;
		font-size: var(--step-1);
		z-index: 99;
		display: flex;
		padding: 0.2rem;
	}

	a {
		padding: 0.2rem;
		color: var(--as-text-2);

		&:hover,
		&:focus {
			color: var(--as-text-1);
		}
	}
</style>
