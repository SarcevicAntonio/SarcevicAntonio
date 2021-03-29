<script>
  import { url } from "@roxi/routify";
  import marked from "marked";

  export let posts;
</script>

<div class="posts">
  {#each posts as { meta, path }}
    <div class="card">
      <h2>
        <a class="title" href={$url(path)}>{meta.frontmatter.title}</a>
      </h2>
      {@html marked(meta.frontmatter.summary)}
    </div>
  {/each}
</div>

<style>
  h2 {
    margin-top: 1rem;
    font-size: 2em;
  }
</style>
