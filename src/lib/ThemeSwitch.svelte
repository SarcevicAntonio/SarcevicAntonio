<script lang="ts">
	import { page } from '$app/stores'
	import { os_theme_preference } from './theme'
</script>

{#if $page.data.theme === 'light' || ($page.data.theme === undefined && $os_theme_preference === 'light')}
	<a href="/theme/dark"> Go Dark! </a>
{:else}
	<a href="/theme/light"> Go Light! </a>
{/if}
{#if $page.data.theme}
	<a href="/theme/undefined"> Use OS Theme! </a>
{/if}
