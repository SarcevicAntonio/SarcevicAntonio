<script>
  import { metatags, url } from "@roxi/routify";

  export let title;
  export let summary;
  metatags.title = `'${title}' on Toni's Blog`;
  metatags.description = summary;
</script>

<article class="card">
  <slot />
</article>

<a href={$url(".")}> &#129044; Back</a>
