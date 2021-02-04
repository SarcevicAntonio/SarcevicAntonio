<script>
  import { url } from "@roxi/routify";

</script>

<!-- <a href={$url("./blog")}> zum Blog </a> -->
<div class="fr">
  <a href="https://twitter.com/SarcevicAntonio"> Twitter </a>
  <a href="https://www.linkedin.com/in/antonio-sarcevic-3b464a183/">
    LinkedIn
  </a>
  <a href="https://github.com/SarcevicAntonio/"> GitHub </a>
  <a href="mailto:sarcevicantonio@gmail.com"> E-Mail </a>
</div>
<a href={$url("./impressum")} class="light-green-text"> Impressum </a>

<style type="scss">
  a {
    margin: 8px;
  }
  div {
    margin: 16px 0;
    a {
      color: var(--bg);
      background-color: var(--accent);
      padding: 8px 16px;
      border-radius: 9999px;
      text-decoration: none;
    }
  }
</style>
