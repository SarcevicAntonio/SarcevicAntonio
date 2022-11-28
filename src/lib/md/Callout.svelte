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

<section class="p-4 rounded-lg border {type}">
  <div class="flex gap-2 items-center mb-2">
    <div class={viewIcon} />
    <span class="font-bold">
      {viewTitle}
    </span>
  </div>
  <slot />
</section>

<style>
  section {
    background-color: var(--background-color, var(--view-bg));
    color: var(--color, var(--view-c));
    border-color: var(--color, var(--view-c));
  }

  :global(.prose) section :global(:where(strong):not(:where([class~='not-prose'] *))) {
    color: inherit;
  }

  section > :global(:nth-child(2)) {
    margin-top: 0;
  }

  section > :global(:last-child) {
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
