<script>
  export let items;
</script>

<div class="fr">
  {#each items as item}
    <a href={item.href} target="_blank" rel="noreferrer" class="pill">
      {item.txt}
    </a>
  {/each}
</div>

<style>
  div {
    margin: 1em;
  }
</style>
