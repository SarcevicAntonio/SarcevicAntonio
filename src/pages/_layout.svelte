<script>
  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";
</script>

<div class="fc">
  <!-- routify:options preload="proximity" -->
  <!-- TODO: reenable when posts are there -->
  <Nav />
  <slot />
  <Footer />
</div>

<style type="scss">
</style>
