<script>
  export let thing
  const { label, desc, icon, links } = thing
</script>

<section class="flex flex-col md:flex-row">
  <div class="flex gap-4">
    <img src={icon} alt="Icon" />
    <div class="flex-col">
      <h3>{label}</h3>
      <p>{desc}</p>
    </div>
  </div>
  <ul>
    {#each links as [label, href, icon]}
      <li>
        <a {href} class="btn btn-ghost btn-xs font-mono rounded-full">
          {#if icon}
            <span class="{icon} !w-4 !h-4 mr-1" />
          {/if}
          {label}
        </a>
      </li>
    {/each}
  </ul>
</section>

<style lang="postcss">
  section {
    margin: 0;
    padding: 1em;
    border-radius: 0.5em;
    align-items: center;
    @apply transition-shadow;
  }

  section:hover {
    @apply shadow-xl;
  }

  img {
    flex-basis: 4rem;
    margin: 0;
  }

  p,
  h3 {
    margin: 0;
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul {
    margin-left: auto;
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
</style>
