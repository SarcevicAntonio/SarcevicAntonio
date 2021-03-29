<script>
  import { layout, metatags } from "@roxi/routify";
  import EntryList from "../../components/EntryList.svelte";

  metatags.title = "Toni's Projects";

  const posts = $layout.children
    .filter((c) => c.meta["frontmatter"])
    .sort((a, b) =>
      b.meta["frontmatter"].published.localeCompare(
        a.meta["frontmatter"].published
      )
    );
</script>

<h1>Toni's Projects</h1>

<EntryList {posts} />
