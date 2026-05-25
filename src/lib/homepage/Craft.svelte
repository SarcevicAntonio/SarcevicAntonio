<script>
	import MaterialSymbolsFavoriteRounded from '~icons/material-symbols/favorite-rounded'
	import SimpleIconsCss3 from '~icons/simple-icons/css3'
	import SimpleIconsHtml5 from '~icons/simple-icons/html5'
	import SimpleIconsSvelte from '~icons/simple-icons/svelte'
	import SimpleIconsTypescript from '~icons/simple-icons/typescript'
</script>

<h2>Craft</h2>
<div>
	<MaterialSymbolsFavoriteRounded aria-hidden="true" />
	<br />
	<SimpleIconsHtml5 aria-hidden="true" />
	<SimpleIconsCss3 aria-hidden="true" />
	<SimpleIconsTypescript aria-hidden="true" />
	<SimpleIconsSvelte aria-hidden="true" />
</div>
<p>love to craft user experiences with semantic HTML, modern CSS, TypeScript and SvelteKit.</p>
<p>worked as a web developer since 2019.</p>
<p>earned a bachelor of science degree in media and communications informatics.</p>
<p>always excellence over hustle.</p>

<style>
	h2 {
		font-size: var(--step-5);
		text-align: center;
		margin-block-end: 0.25em;
	}

	div :global(svg) {
		font-size: var(--step-4);
	}

	p {
		margin-inline: auto;
		max-width: var(--content-width);
		text-wrap: balance;
	}
</style>
