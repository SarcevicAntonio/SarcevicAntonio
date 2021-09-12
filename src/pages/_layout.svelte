<script>
  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";
</script>

<!-- routify:options preload="proximity" -->
<nav>
  <Nav />
</nav>
<main>
  <slot />
</main>
<footer>
  <Footer />
</footer>