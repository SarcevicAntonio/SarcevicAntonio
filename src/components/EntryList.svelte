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
      {#if meta.frontmatter.tags}
        <ul>
          {#each meta.frontmatter.tags as tag}
          <!-- Todo: Link to Filter Tags -->
            <li>#{tag}</li>
          {/each}
        </ul>
      {/if}
    </div>
  {/each}
</div>

<style>
  h2 {
    margin-top: 1rem;
    font-size: 2em;
  }
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  li {
    margin-right: 1em;
    border: 1px solid var(--hi);
    padding: 0.5em;
    border-radius: 0.5em;
    background-color: var(--bgg);
  }
</style>
