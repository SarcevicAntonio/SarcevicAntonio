<script lang="ts">
	import type { ComponentType } from 'svelte'
	import Info from '~icons/material-symbols/info-outline-rounded'
	import Warning from '~icons/material-symbols/warning-outline-rounded'

	let icons = {
		info: Info,
		warning: Warning,
	}

	const capitalize = (string: string) => {
		return string ? string.charAt(0).toUpperCase() + string.slice(1) : ''
	}

	export let type: 'info' | 'warning' = 'info'
	export let icon: ComponentType = icons[type]
	export let title = capitalize(type)
</script>

<section class={type}>
	<p class="title">
		<svelte:component this={icon} />
		{title}
	</p>
	<div class="content">
		<slot />
	</div>
</section>

<style>
	section {
		border: 0.1em solid var(--as-text-1);

		& :global(svg) {
			vertical-align: sub;
		}
		padding: 1rem;
		padding-block-end: 0.75rem;
		border-radius: 1rem;
		overflow: hidden;
	}

	.title {
		margin-block-start: -1rem;
		margin-inline: -1rem;
		margin-block-end: 0.5rem;
		padding: 0.5rem 1rem;
		background-color: var(--as-text-1);
		color: var(--as-back-1);
	}

	.warning .title {
		font-size: var(--step-1);
		font-weight: 800;
	}
</style>
