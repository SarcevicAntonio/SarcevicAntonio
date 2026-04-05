<script lang="ts">
	import type { Component, Snippet } from 'svelte'
	import type { SvelteHTMLElements } from 'svelte/elements'
	import Info from '~icons/material-symbols/info-outline-rounded'
	import Warning from '~icons/material-symbols/warning-outline-rounded'

	let icons = {
		info: Info,
		warning: Warning,
	}

	const capitalize = (string: string) => {
		return string ? string.charAt(0).toUpperCase() + string.slice(1) : ''
	}

	let {
		type = 'info',
		icon: Icon = icons[type],
		title = capitalize(type),
		children,
	}: {
		type?: 'info' | 'warning'
		icon?: Component<SvelteHTMLElements['svg']>
		title?: string
		children?: Snippet
	} = $props()
</script>

<section class={type}>
	<p class="title">
		<Icon />
		{title}
	</p>
	{@render children?.()}
</section>

<style>
	section {
		border: 0.1em solid var(--as-text-3);
		margin-inline: 0.5rem;

		& :global(svg) {
			vertical-align: sub;
		}
		padding: 1rem;
		padding-block-end: 0rem;
		border-radius: 0.3em;
		overflow: hidden;
	}

	.title {
		margin-block-start: -1rem;
		margin-inline: -1rem;
		padding: 0.5rem 1rem;
		background-color: var(--as-text-3);
		color: var(--as-back-1);
	}

	.warning {
		border-color: var(--as-text-1);

		.title {
			font-size: var(--step-1);
			background-color: var(--as-text-1);
			font-weight: 800;
		}
	}
</style>
