<script lang="ts">
	import { page } from '$app/stores'
	import Dark from '~icons/material-symbols/dark-mode-outline-rounded'
	import Light from '~icons/material-symbols/light-mode-outline'
	import Reset from '~icons/material-symbols/settings-backup-restore-rounded'
	import { current_theme } from '.'

	export let theme: 'os-preference' | 'light' | 'dark'

	$: title = {
		'os-preference': 'Use Operating System Theme Preference',
		dark: 'Use Dark Theme',
		light: 'Use Light Theme',
	}[theme]

	$: icon = {
		'os-preference': Reset,
		dark: Dark,
		light: Light,
	}[theme]

	$: href = '/set-theme/' + theme

	async function enhance() {
		await fetch(href)
		if (theme === 'os-preference') {
			$current_theme = undefined
			delete document.documentElement.dataset.theme
		} else {
			$current_theme = theme
			document.documentElement.dataset.theme = theme
		}
	}
</script>

<li>
	<a href="{href}?redirect={$page.url.pathname}" {title} on:click|preventDefault={enhance}>
		<svelte:component this={icon} aria-hidden="true" />
	</a>
</li>

<style>
	a {
		padding: 0.5em 1.5em;
		display: block;
		color: var(--as-text-2);
		font-family: var(--display-font);

		&:hover {
			background: var(--as-back-2);
			color: var(--as-text-1);
		}
	}
</style>
