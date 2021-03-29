<script>
  import { url } from "@roxi/routify";
  import marked from "marked";

  export let posts;
</script>

<div class="posts">
  {#each posts as { meta, path }}
    <div class="card">
      <h3>
        <a class="title" href={$url(path)}>{meta.frontmatter.title}</a>
      </h3>
      {@html marked(meta.frontmatter.summary)}
    </div>
  {/each}
</div>

<style>
  h3 {
    margin-top: 1rem;
  }
</style>
