<script lang="ts">
  import { site } from '$lib/config/site'
  import { header } from '$lib/config/general'
  import { page } from '$app/stores'
  $: path = $page.url.pathname
</script>

<div
  class="h-card flex flex-col gap-4 sticky card card-body p-4 items-right xl:border-2 xl:py-8 border-base-content/10 xl:ml-auto xl:mr-8 xl:max-w-xs">
  <a href={site.protocol + site.domain} class="hidden u-url u-uid">{site.author.name}</a>
  <figure class="relative mx-auto group">
    <img
      class="u-photo rounded-full shadow-xl hover:shadow-2xl transition-shadow z-10 w-24 h-24 md:w-32 md:h-32"
      src={site.author.avatar}
      alt={site.author.name} />
    {#if site.author.status}
      <div
        class="absolute z-20 rounded-full w-8 h-8 md:w-10 md:h-10 bottom-0 right-0 bg-base-100 shadow-xl text-lg md:text-xl text-center py-0.5 md:py-1.5">
        {site.author.status}
      </div>
    {/if}
  </figure>
  <div class="text-center flex flex-col gap-2">
    <h2 class="text-2xl font-bold mt-0 mb-2 p-name">{site.author.name}</h2>
    <p class="p-note">{@html site.author.bio}</p>
    {#if site.author.metadata}
      <div class="flex gap-1 flex-wrap justify-center">
        {#each site.author.metadata as { text, icon, link, rel }}
          {#if link}
            <a
              href={link}
              rel={rel ?? 'me noopener external'}
              class:btn-square={!text}
              class="btn btn-sm btn-ghost normal-case gap-2 u-url"
              target="_blank">
              {#if icon}
                <span class="{icon} !w-5 !h-5">{icon}</span>
              {/if}
              {#if text}
                {text}
              {/if}
            </a>
          {:else}
            <button class:btn-square={!text} class="btn btn-sm btn-ghost normal-case gap-2" {rel}>
              {#if icon}
                <span class="{icon} !w-5 !h-5">{icon}</span>
              {/if}
              {#if text}
                {text}
              {/if}
            </button>
          {/if}
        {/each}
      </div>
    {/if}
    <!-- NAV -->
    <ul>
      {#each header.nav as { text, link, children, icon }}
        {#if link && !children}
          <li>
            <a
              data-sveltekit-prefetch
              class="btn btn-ghost btn-xs bg-base-300 font-mono rounded-full mt-4"
              class:font-bold={link === path}
              href={link}>
              <span class="{icon} !w-4 !h-4 mr-1" />
              {text}
            </a>
          </li>
        {:else if children}
          <li>
            <span class:font-bold={children.some(({ link }) => link === path)} class="!rounded-btn gap-1">
              {text}
              <span class="i-heroicons-solid-chevron-down -mr-1" />
            </span>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul tabindex="0" class="menu rounded-box bg-base-100 text-base-content shadow-lg p-2">
              {#each children as { text, link }}
                <li>
                  <a data-sveltekit-prefetch class:font-bold={link === path} href={link}>{text}</a>
                </li>
              {/each}
            </ul>
          </li>
        {/if}
      {/each}
    </ul>

    <!-- SOCIALS -->
    <ul>
      <li>
        <a
          href="https://github.com/SarcevicAntonio/"
          rel="nofollow noopener noreferer"
          target="_blank"
          class="btn btn-ghost btn-xs bg-base-300 font-mono rounded-full mt-4">
          <span class="i-mdi-github !w-4 !h-4 mr-1" />
          GitHub
        </a>
      </li>
      <li>
        <a
          href="https://mastodon.online/@sarcevic"
          rel="me nofollow noopener noreferer"
          target="_blank"
          class="btn btn-ghost btn-xs bg-base-300 font-mono rounded-full mt-4">
          <span class="i-mdi-mastodon !w-4 !h-4 mr-1" />
          Mastodon
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/SarcevicAntonio"
          rel="nofollow noopener noreferer"
          target="_blank"
          class="btn btn-ghost btn-xs bg-base-300 font-mono rounded-full mt-4">
          <span class="i-mdi-twitter !w-4 !h-4 mr-1" />
          Twitter
        </a>
      </li>
    </ul>
  </div>
</div>

<style>
  ul {
    display: flex;
    margin: auto;
    gap: 1em;
  }

  li {
    display: flex;
  }
</style>
