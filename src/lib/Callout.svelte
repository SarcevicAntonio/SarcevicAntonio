<script lang="ts">
	export let type: 'info' | 'warning' = 'info'
	export let icon = ''
	export let title = ''
 
	let defaultIcons = {
	  info: 'i-material-symbols-info-outline-rounded',
	  warning: 'i-material-symbols-warning-outline-rounded'
	}
 
	const capitalize = (string: string) => {
	  return string ? string.charAt(0).toUpperCase() + string.slice(1) : ''
	}
 
	$: viewTitle = title || capitalize(type)
	$: viewIcon = icon || defaultIcons[type]
 </script>
 
 <section class={type}>
	<div class="flex gap-2 items-center title">
	  <div class={viewIcon} />
	  <span class="font-bold">
		 {viewTitle}
	  </span>
	</div>
	<div class="content">
	  <slot />
	</div>
 </section>
 
 <style>
	section {
	  border: 1px solid var(--color, var(--view-c));
	  border-radius: 0.5rem;
	}
 
	.title {
	  background-color: var(--background-color, var(--view-bg));
	  color: var(--color, var(--view-c));
 
	  padding: 1em;
	  padding-bottom: 1.75em;
	  border-top-left-radius: 0.5rem;
	  border-top-right-radius: 0.5rem;
	}
 
	:global(.prose) section :global(:where(strong):not(:where([class~='not-prose'] *))) {
	  color: inherit;
	}
 
	.content {
	  border: 1px solid var(--color, var(--view-c));
 
	  background-color: hsl(var(--b1) / var(--tw-bg-opacity));
	  padding: 1em;
	  padding-top: 0.75em;
	  margin: -1px;
	  margin-top: -1em;
	  border-radius: 0.5rem;
	}
 
	.content > :global(:nth-child(1)) {
	  margin-top: 0;
	}
 
	.content > :global(:last-child) {
	  margin-bottom: 0;
	}
 
	.info {
	  --view-bg: hsl(var(--inc));
	  --view-c: hsl(var(--in));
	}
 
	:global([data-theme='light']) .info {
	  --view-bg: hsl(var(--in));
	  --view-c: hsl(var(--inc));
	}
 
	.warning {
	  --view-bg: hsl(var(--wac));
	  --view-c: hsl(var(--wa));
	}
 
	:global([data-theme='light']) .warning {
	  --view-bg: hsl(var(--wa));
	  --view-c: hsl(var(--wac));
	}
 </style>
 