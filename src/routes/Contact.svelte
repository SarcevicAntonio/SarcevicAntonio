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
		margin-block-end: 0.25em;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		padding: 0;
		margin: auto;
		justify-content: center;
		gap: 0.5em;
		font-size: var(--step-4);
		max-width: 7em;
	}

	a {
		color: var(--as-text-2);

		&:hover,
		&:focus {
			color: var(--as-text-1);
		}
	}
</style>
