<script>
	import { page } from '$app/stores'
</script>

<h1>{$page.status}</h1>

{#if $page.status === 404}
	<p>
		Looks like {$page.url.href} was not fount...
	</p>
	<a href="/">Go back home!</a>
{:else}
	<p>{$page.error?.message}</p>
{/if}

<style>
</style>
