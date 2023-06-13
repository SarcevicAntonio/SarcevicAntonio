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

<a href="{href}?redirect={$page.url.pathname}" {title} on:click|preventDefault={enhance}>
	<svelte:component this={icon} aria-hidden="true" />
</a>

<style>
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
