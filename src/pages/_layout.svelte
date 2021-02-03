<header>random header content</header>
<main>
  <!-- routify:options preload="proximity" -->
  <slot />
</main>

<style type="scss">
  header {
    border: 1px solid black;
    border-radius: 8px;
    padding: 8px;
    text-align: center;
  }
  main {
    border: 1px solid black;
    border-radius: 8px;
    margin-top: 8px;
    padding: 8px;
  }
</style>
