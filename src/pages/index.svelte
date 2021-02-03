<script type="ts">
  import { metatags, url } from "@roxi/routify";
  metatags.title = "Hello Worldtify";
  metatags.description = "Description coming soon...";

  const msg: string = "World";
  let value: string = "a-random-page";
</script>

<h2>Hello {msg}!</h2>
<div>
  <label>
    visit a page:
    <input type="text" bind:value />
    <a href={$url('/id/'+value)}>
      <button>go there</button>
    </a>
  </label>
</div>

<style type="scss">
  label {
    font-size: 16px;
    input {
      font-size: 16px;
    }
    button {
      font-size: 16px;
    }
  }
</style>
