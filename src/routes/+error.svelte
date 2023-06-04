<script>
	import MaterialSymbolsArrowBackRounded from '~icons/material-symbols/arrow-back-rounded'
	import { page } from '$app/stores'
</script>

<div class="error">
	<section>
		<h1>{$page.status}</h1>

		{#if $page.status === 404}
			<p>
				Looks like `{$page.url.pathname}` was not found...
				<br />
				Sorry about that 🫤
			</p>
			<p>
				Maybe you can find what you were looking for under
				<a href="/content" class="arrow-link">
					<MaterialSymbolsArrowBackRounded aria-hidden="true" />/content</a
				>.
			</p>
			<p>
				<a href="/" class="arrow-link">
					<MaterialSymbolsArrowBackRounded aria-hidden="true" />Or go to the main page /</a
				>.
			</p>
		{:else}
			<p>{$page.error?.message}</p>
		{/if}
	</section>
</div>

<style>
	.error {
		display: grid;
		place-content: center;
		position: relative;
		min-height: 100svh;
	}

	section {
		max-width: 25rem;
	}
</style>
