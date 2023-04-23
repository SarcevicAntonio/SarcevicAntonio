<script>
  const links = [
    { href: '/assets/AntonioSarcevic_CV.pdf', label: 'Curriculum Vitae', icon_class: 'i-mdi-download' },
    { href: 'mailto:sarcevicantonio@gmail.com', label: 'sarcevicantonio@gmail.com', icon_class: 'i-mdi-email' },
    { href: 'https://github.com/SarcevicAntonio/', label: 'GitHub', icon_class: 'i-mdi-github' },
    { href: 'https://www.linkedin.com/in/sarcevic/', label: 'LinkedIn', icon_class: 'i-mdi-linkedin' },
    { href: 'https://mastodon.online/@sarcevic', label: 'Mastodon', icon_class: 'i-mdi-mastodon' },
    { href: 'https://twitter.com/SarcevicAntonio', label: 'Twitter', icon_class: 'i-mdi-twitter' }
  ]
</script>

<ul>
  {#each links as { href, label, icon_class }}
    <li>
      <a
        {href}
        rel="nofollow noopener noreferer"
        target="_blank"
        class="btn btn-ghost btn-xs bg-base-300 font-mono rounded-full m-0">
        <span class="{icon_class} !w-4 !h-4 mr-1" />
        {label}
      </a>
    </li>
  {/each}
</ul>

<style>
  ul {
    display: flex;
    gap: 0.5em;
    flex-wrap: wrap;
  }

  li {
    display: flex;
  }
</style>
