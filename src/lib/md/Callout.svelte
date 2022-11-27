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
    <span>
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

  .info {
    --view-bg: hsl(var(--in));
    --view-c: hsl(var(--inc));
  }

  :global([data-theme='dark']) .info {
    --view-bg: hsl(var(--inc));
    --view-c: hsl(var(--in));
  }

  .warning {
    --view-bg: hsl(var(--wa));
    --view-c: hsl(var(--wac));
  }

  :global([data-theme='dark']) .warning {
    --view-bg: hsl(var(--wac));
    --view-c: hsl(var(--wa));
  }
</style>
