<script>
	import { contact_links } from '$lib/contact_links'
</script>

<h2 id="connect">Connect</h2>
<ul>
	{#each contact_links as { icon, ...rest }}
		<li>
			<!--svelte-ignore a11y-missing-attribute-->
			<a {...rest}>
				<svelte:component this={icon} aria-hidden="true" />
			</a>
		</li>
	{/each}
</ul>

<style>
	h2 {
		font-size: var(--step-5);
		text-align: center;
		margin-block-end: 0.5em;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		padding: 0;
		margin: auto;
		justify-content: center;
		font-size: var(--step-4);
		gap: 1em;
		row-gap: 0.5em;
		max-width: 6em;
	}

	a {
		color: var(--as-text-2);

		&:hover,
		&:focus {
			color: var(--as-text-1);
		}
	}
</style>
