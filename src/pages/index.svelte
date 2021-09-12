<script type="ts">
  import { metatags } from "@roxi/routify";
  import Infos from "../components/Infos.svelte";

  metatags.title = "The Website of Antonio Sarcevic ";
  metatags.description =
    "My little space on the web where I might write stuff n things.";
</script>

<h1><span class="hello">👋 Hello, I am</span><br /> Antonio Sarcevic.</h1>

<Infos />

<style type="scss">
  h1 {
    margin-top: 0;
    color: var(--hi);
    font-size: 4rem;
  }
  .hello {
    color: var(--fg);
    font-size: 0.6em;
  }
</style>
