<script type="ts">
import { url } from "@roxi/routify";
import App from "../../../App.svelte";


  export let param: string;
</script>

<h2>Welcome to /{param}</h2>

<a href={$url("/")}>
  <button>go to /</button>
</a>
or
<a href={$url("./not-found")}>
  <button>go to ./not-found</button>
</a>

<style>
  h2 {
    margin-top: 0;
  }
  button {
    margin: 0;
  }
</style>