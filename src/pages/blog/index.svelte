<script>
  import { layout,metatags,url } from "@roxi/routify";
  import marked from "marked";

  metatags.title = "Der Blog von Antonio Sarcevic ";

  const posts = $layout.children
    .filter((c) => c.meta["frontmatter"])
    .sort((a, b) =>
      b.meta["frontmatter"].published.localeCompare(
        a.meta["frontmatter"].published
      )
    );
</script>

<h1>Antonios Blog</h1>

<div class="posts">
  {#each posts as { meta, path }}
    <div class="card">
      <a class="title" href={$url(path)}>{meta.frontmatter.title}</a>
      {@html marked(meta.frontmatter.summary)}
    </div>
  {/each}
</div>

<a href={$url("../")}>go back</a>

<style style="scss">
  .posts {
    margin: 8px 0;
    padding: 8px;
    border: 1px solid var(--hi);
    border-radius: 8px;
  }
</style>
