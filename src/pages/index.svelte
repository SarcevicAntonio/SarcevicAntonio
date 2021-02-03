<script type="ts">
  import Infos from "../components/Infos.svelte";
  import Links from "../components/Links.svelte";
  import { metatags } from "@roxi/routify";
  metatags.title = "Die Vebsite von Antonio Sarcevic ";
  metatags.description = "Description coming soon...";
</script>

<h2>👋 Hallo, ich bin</h2>
<h1>Antonio Sarcevic.</h1>

<Infos />
<Links />

<!-- <div>
  <label>
    visit a page:
    <input type="text" bind:value />
    <a href={$url('/id/'+value)}>
      <button>go there</button>
    </a>
  </label>
</div> -->
<style type="scss">
  h1 {
    margin-top: 0;
    color: var(--hi);
  }
</style>
