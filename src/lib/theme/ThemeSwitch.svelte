<script lang="ts">
	import { page } from '$app/stores'
	import ThemeLink from './ThemeLink.svelte'
	import { current_theme, os_theme_preference } from '.'

	$current_theme = $page.data.theme
</script>

<section>
	{#if $current_theme}
		<ThemeLink theme="os-preference" />
	{/if}
	{#if $current_theme === 'light' || ($current_theme === undefined && $os_theme_preference === 'light')}
		<ThemeLink theme="dark" />
	{:else}
		<ThemeLink theme="light" />
		{#if $os_theme_preference === undefined}
			<ThemeLink theme="dark" />
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
</style>
