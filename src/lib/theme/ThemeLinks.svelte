<script lang="ts">
	import Reset from '#lib/theme/ResetThemeSetting.svelte'
	import { browser } from '$app/env'
	import { page } from '$app/state'
	import { MediaQuery } from 'svelte/reactivity'
	import Dark from '~icons/material-symbols/dark-mode-outline-rounded'
	import Light from '~icons/material-symbols/light-mode-outline'

	let preferred_theme = $derived(page.data.theme)
	const is_dark = new MediaQuery('prefers-color-scheme: dark')
</script>

{#snippet theme_link(theme: 'os-preference' | 'light' | 'dark')}
	{let Icon = { 'os-preference': Reset, dark: Dark, light: Light }[theme]}
	{let href = '/set-theme/' + theme}

	<a
		class="theme-link"
		{href}
		title={{
			'os-preference': 'Use Operating System Theme Preference',
			dark: 'Use Dark Theme',
			light: 'Use Light Theme',
		}[theme]}
		onclick={async (e) => {
			e.preventDefault()
			await fetch(href)
			if (theme === 'os-preference') {
				preferred_theme = undefined
				delete document.documentElement.dataset.theme
			} else {
				preferred_theme = theme
				document.documentElement.dataset.theme = theme
			}
		}}
	>
		<Icon aria-hidden="true" />
	</a>
{/snippet}

{#if preferred_theme}
	{@render theme_link('os-preference')}
{/if}

{#if !browser}
	{@render theme_link('dark')}
	{@render theme_link('light')}
{:else if preferred_theme === 'light' || (!preferred_theme && is_dark.current === false)}
	{@render theme_link('dark')}
{:else if preferred_theme === 'dark' || (!preferred_theme && is_dark.current === true)}
	{@render theme_link('light')}
{/if}

<style>
	a.theme-link {
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
