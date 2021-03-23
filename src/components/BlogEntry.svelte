<script>
  import { url } from "@roxi/routify";
</script>

<div class="card">
  <slot />
</div>

<a href={$url(".")}>Zurück zu allen Einträgen</a>
