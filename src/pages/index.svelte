<script type="ts">
  import { metatags } from "@roxi/routify";
  import Infos from "../components/Infos.svelte";

  metatags.title = "Die Vebsite von Antonio Sarcevic ";
  metatags.description = "Description coming soon...";
</script>

<h2>👋 Hallo, ich bin</h2>
<h1>Antonio Sarcevic.</h1>

<Infos />

<style type="scss">
  h1 {
    margin-top: 0;
    color: var(--hi);
  }
</style>
