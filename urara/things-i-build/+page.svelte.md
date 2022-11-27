---
title: Things I build
toc: false
flags:
	- unlisted
---

<!-- ```html -->
<script>
	import MD from "$lib/md";
  const things = [
    {
      label: 'doTogether',
      icon: 'https://do-together.vercel.app/favicon.svg',
      desc: 'Simple realtime-multiplayer todo list for recurring tasks',
      links: [
        ['Live Version', 'https://do-together.vercel.app/', 'i-material-symbols-open-in-browser'],
        ['Source Code', 'https://github.com/SarcevicAntonio/doTogether', 'i-mdi-github']
      ]
    },
    {
      label: 'kcalCalc',
      icon: 'https://kcal-calc.vercel.app/favicon.svg',
      desc: 'Free calorie counting app made to fit my needs',
      links: [
        ['Live Version', 'https://kcal-calc.vercel.app/', 'i-material-symbols-open-in-browser'],
        ['Source Code', 'https://github.com/SarcevicAntonio/kcalCalc', 'i-mdi-github']
      ]
    }
  ]
</script>
<!-- ``` -->

<ul>
{#each things as thing}
  <li>
    <MD.Thing {thing}/>
  </li>
{/each}
</ul>

<style>
  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
</style>
