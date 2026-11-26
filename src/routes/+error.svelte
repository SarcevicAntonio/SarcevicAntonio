<script>
	import { resolve } from '$app/paths'
	import { page } from '$app/state'
	import MaterialSymbolsArrowBackRounded from '~icons/material-symbols/arrow-back-rounded'
	import Logo from './Logo.svelte'
</script>

<div class="error">
	<section>
		<h1>{page.status}</h1>

		{#if page.status === 404}
			<p>
				Looks like `{page.url.pathname}` was not found...
				<br />
			</p>
			<p>Sorry about that 🫤</p>
			<p>
				Maybe you can find what you were looking for under
				<a
					href={resolve('/[content=type_filter]/[[tag]]', { content: 'entries' })}
					class="arrow-link"
				>
					<MaterialSymbolsArrowBackRounded aria-hidden="true" />/entries</a
				>.
			</p>
		{:else}
			<p>{page.error?.message}</p>
		{/if}

		<a href="/" class="arrow-link" aria-label="homepage">
			<MaterialSymbolsArrowBackRounded aria-hidden="true" /><Logo />
		</a>
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

	p .arrow-link {
		display: inline;
	}

	.arrow-link {
		justify-content: flex-start;
	}
</style>
