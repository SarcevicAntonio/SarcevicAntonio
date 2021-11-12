<script>
  import { onMount } from "svelte";

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const toggleClass = prefersDark ? "light" : "dark";
  let overridden = localStorage.getItem("prefers-color-scheme-overridden");

  $: dark = prefersDark
    ? overridden
      ? false
      : true
    : overridden
    ? true
    : false;

  $: if (overridden) {
    localStorage.setItem("prefers-color-scheme-overridden", "true");
  } else {
    localStorage.setItem("prefers-color-scheme-overridden", "");
  }

  function set() {
    window.document.body.classList.toggle(toggleClass);
    overridden = window.document.body.classList.length;
  }

  function toggle() {
    set();
    overridden = window.document.body.classList.length;
  }

  onMount(() => {
    if (overridden) {
      set();
    }
  });
</script>

<button class="pill" on:click={toggle}> {dark ? "☀️" : "🌙"} </button>

<style>
  button {
    padding: 0.5em;
  }
</style>
