<script>
  import { layout, metatags } from "@roxi/routify";
  import EntryList from "../../components/EntryList.svelte";

  metatags.title = "Der Blog von Antonio Sarcevic ";

  const posts = $layout.children
    .filter((c) => c.meta["frontmatter"])
    .sort((a, b) =>
      b.meta["frontmatter"].published.localeCompare(
        a.meta["frontmatter"].published
      )
    );
</script>

<h1>Tonis Blog</h1>

<EntryList {posts} />
