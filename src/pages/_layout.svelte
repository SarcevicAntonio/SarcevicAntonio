<script>
  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";
</script>

<!-- routify:options preload="proximity" -->
<!-- TODO: reenable when posts are there -->
<nav class="fc">
  <Nav />
</nav>
<main class="fc">
  <slot />
</main>
<footer class="fc">
  <Footer />
</footer>
