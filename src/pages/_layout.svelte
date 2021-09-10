<script>
  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";
</script>

<!-- routify:options preload="proximity" -->
<nav class="fc">
  <Nav />
</nav>
<main class="fc">
  <slot />
</main>
<footer class="fc">
  <Footer />
</footer>
