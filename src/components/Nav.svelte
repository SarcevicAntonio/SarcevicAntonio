<script>
  import { isActive, url } from "@roxi/routify";

  const links = [
    ["./index", "Home"],
    ["./projects", "Projects"],
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
    background-color: white;
    border-color: var(--hi);
  }
  .active {
    background-color: var(--hi);
  }
</style>
