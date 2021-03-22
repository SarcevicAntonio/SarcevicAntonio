<script>
  import { layout, metatags, url } from "@roxi/routify";
  import marked from "marked";

  metatags.title = "Projekte von Antonio Sarcevic";

  const posts = $layout.children
    .filter((c) => c.meta["frontmatter"])
    .sort((a, b) =>
      b.meta["frontmatter"].published.localeCompare(
        a.meta["frontmatter"].published
      )
    );
</script>

<h1>Tonis Projekte</h1>

<div>
  {#each posts as { meta, path }}
    <div class="card">
      <a class="title" href={$url(path)}>{meta.frontmatter.title}</a>
      {@html marked(meta.frontmatter.summary)}
    </div>
  {/each}
  <div class="card disabled">
    <span class="title">Weitere Projekte Folgen...</span>
  </div>
</div>

<style style="scss">
  div {
    max-width: 600px;
  }
  .card {
    margin: 8px 0;
    padding: 8px;
    border: 1px solid var(--hi);
    border-radius: 8px;
  }
  .title {
    font-size: 2em;
  }
  .disabled {
    border-color: gray;
  }
</style>
