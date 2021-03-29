<script type="ts">
  import { metatags } from "@roxi/routify";
  import Infos from "../components/Infos.svelte";

  metatags.title = "The Website of Antonio Sarcevic ";
  metatags.description =
    "My little space on the web where I might write stuff n things.";
</script>

<h2>👋 Hello, I am</h2>
<h1>Antonio Sarcevic.</h1>

<Infos />

<style type="scss">
  h1 {
    margin-top: 0;
    color: var(--hi);
  }
</style>
