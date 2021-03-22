<script>
  import { isActive, url } from "@roxi/routify";

  const links = [
    ["./index", "Home"],
    ["./projects", "Projekte"],
    ["./blog", "Blog"],
  ];
</script>

<div class="fr">
  {#each links as [path, name]}
    <a class="pill" href={$url(path)} class:active={$isActive(path)}>
      {name}
    </a>
  {/each}
</div>

<style>
  .pill {
    color: var(--fg);
    background-color: var(--hi);
  }
  .active {
    background-color: var(--bg);
    border-color: var(--hi);
  }
</style>
