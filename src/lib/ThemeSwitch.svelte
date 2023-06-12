<script context="module" lang="ts">
	export const themes = ['light', 'dark', undefined] as const
	type Theme = (typeof themes)[number]
</script>

<script lang="ts">
	import { page } from '$app/stores'
	import cookies from 'js-cookie'

	function get_os_theme(): Theme {
		const { matches } = window.matchMedia('(prefers-color-scheme: dark)')
		return matches ? 'dark' : 'light'
	}

	function change_theme(event: { currentTarget: HTMLSelectElement }) {
		const theme = event.currentTarget.value

		if (theme) {
			cookies.set('theme', theme, { path: '/' })
			document.documentElement.dataset.theme = theme
		} else {
			cookies.remove('theme', { path: '/' })
			document.documentElement.dataset.theme = get_os_theme()
		}
	}
</script>

<select on:input={change_theme}>
	<option selected={$page.data.theme == undefined} value={undefined}>Auto</option>
	<option selected={$page.data.theme == 'light'} value="light">Light</option>
	<option selected={$page.data.theme == 'dark'} value="dark">Dark</option>
</select>
