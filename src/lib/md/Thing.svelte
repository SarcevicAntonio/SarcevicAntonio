<script>
  export let thing
  const { label, desc, icon, links } = thing
</script>

<section>
  <img src={icon} alt="Icon" />
  <div>
    <h2>{label}</h2>
    <p>{desc}</p>
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
    display: flex;
    gap: 1em;
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

  div {
    margin-bottom: 0.5em;
  }

  p,
  h2 {
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
