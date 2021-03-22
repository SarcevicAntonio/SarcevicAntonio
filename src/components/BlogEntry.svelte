<script>
  import { url } from "@roxi/routify";
</script>

<a href={$url("../blog")}>go back</a>

<div>
  <slot />
</div>

<a href={$url("../blog")}>go back</a>

<style lang="scss">
  div {
    max-width: 800px;
    margin: 8px;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid var(--hi);
  }
</style>
