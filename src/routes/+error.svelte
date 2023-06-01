<script>
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
				<a href="/">Go to index instead</a>
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
		min-height: 100dvh;
	}

	section {
		max-width: 25rem;
	}
</style>
