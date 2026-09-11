<script lang="ts">
	import { page } from '$app/state'
	import Dark from '~icons/material-symbols/dark-mode-outline-rounded'
	import Light from '~icons/material-symbols/light-mode-outline'
	import Reset from './ResetThemeSetting.svelte'
	import { current_theme } from '.'

	interface Props {
		theme: 'os-preference' | 'light' | 'dark'
	}

	let { theme }: Props = $props()

	let title = $derived(
		{
			'os-preference': 'Use Operating System Theme Preference',
			dark: 'Use Dark Theme',
			light: 'Use Light Theme',
		}[theme]
	)

	let Icon = $derived({ 'os-preference': Reset, dark: Dark, light: Light }[theme])
	let href = $derived('/set-theme/' + theme)

	async function enhance(e: MouseEvent) {
		e.preventDefault()
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
	<a href="{href}?redirect={page.url.pathname}" {title} onclick={enhance}
		><Icon aria-hidden="true" /></a
	>
</li>

<style>
	a {
		padding-block: 0.5em;
		padding-inline: 0.25em;
		display: block;
		color: var(--as-text-2);

		&:hover {
			background: var(--as-back-2);
			color: var(--as-text-1);
		}
	}
</style>
