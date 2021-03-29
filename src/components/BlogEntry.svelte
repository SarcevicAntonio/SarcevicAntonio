<script>
  import { url } from "@roxi/routify";
</script>

<div class="card">
  <slot />
</div>

<a href={$url(".")}> &#129044; Back</a>
