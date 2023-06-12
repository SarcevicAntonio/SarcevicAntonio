<script>
	import MaterialSymbolsFavoriteRounded from '~icons/material-symbols/favorite-rounded'
	import SimpleIconsSvelte from '~icons/simple-icons/svelte'
	import SimpleIconsHtml5 from '~icons/simple-icons/html5'
	import SimpleIconsTypescript from '~icons/simple-icons/typescript'
	import SimpleIconsCss3 from '~icons/simple-icons/css3'
	import SimpleIconsFigma from '~icons/simple-icons/figma'
	import SimpleIconsAngular from '~icons/simple-icons/angular'
	import SimpleIconsFirebase from '~icons/simple-icons/firebase'
	import SimpleIconsDocker from '~icons/simple-icons/docker'
	import SimpleIconsGithub from '~icons/simple-icons/github'
	import SimpleIconsGitlab from '~icons/simple-icons/gitlab'
	import SimpleIconsCypress from '~icons/simple-icons/cypress'
	import SimpleIconsPlaywright from '~icons/simple-icons/playwright'
	import SimpleIconsWebcomponentsdotorg from '~icons/simple-icons/webcomponentsdotorg'
	import SimpleIconsRuby from '~icons/simple-icons/ruby'
	import SimpleIconsVuedotjs from '~icons/simple-icons/vuedotjs'
	import SimpleIconsNodedotjs from '~icons/simple-icons/nodedotjs'
	import SimpleIconsPython from '~icons/simple-icons/python'
	import SimpleIconsJava from '~icons/simple-icons/java'
	import SimpleIconsCsharp from '~icons/simple-icons/csharp'
	import MaterialSymbolsDocs from '~icons/material-symbols/docs'
	import { differenceInYears } from 'date-fns'
</script>

<h2>Craft</h2>
<div>
	<MaterialSymbolsFavoriteRounded aria-hidden="true" />
	<br />
	<SimpleIconsHtml5 aria-hidden="true" />
	<SimpleIconsCss3 aria-hidden="true" />
	<SimpleIconsTypescript aria-hidden="true" />
	<SimpleIconsSvelte aria-hidden="true" />
	<SimpleIconsFigma aria-hidden="true" />
</div>
<p>
	Love to craft User Experiences with semantic HTML, modern CSS, TypeScript, SvelteKit and Figma.
</p>
<br />
<div>
	<SimpleIconsAngular aria-hidden="true" />
	<SimpleIconsFirebase aria-hidden="true" />
	<SimpleIconsDocker aria-hidden="true" />
	<SimpleIconsGithub aria-hidden="true" />
	<SimpleIconsGitlab aria-hidden="true" />
	<SimpleIconsCypress aria-hidden="true" />
	<SimpleIconsPlaywright aria-hidden="true" />
	<br />
	<div class="sub">
		<SimpleIconsWebcomponentsdotorg aria-hidden="true" />
		<SimpleIconsRuby aria-hidden="true" />
		<SimpleIconsVuedotjs aria-hidden="true" />
		<SimpleIconsNodedotjs aria-hidden="true" />
		<SimpleIconsPython aria-hidden="true" />
		<SimpleIconsJava aria-hidden="true" />
		<SimpleIconsCsharp aria-hidden="true" />
	</div>
</div>
<p>
	Have experience with Angular, Firebase, Docker, GitHub Actions, GitlabCI, Cypress, Playwright, Web
	Components, Ruby on Rails, Vue, NodeJS, Python, Java and C#.
</p>
<br />
<div class="count">+{differenceInYears(new Date(), new Date(2019, 2, 1))} years</div>
<p>
	Worked as a web developer since 2019.
	<br />
	Earned a Bachelor of Science degree in Media and Communications Informatics.
</p>

<!-- <a href="/assets/AntonioSarcevic_CV.pdf">
	<MaterialSymbolsDocs />
	Full Resume
</a> -->

<style>
	h2 {
		font-size: var(--step-5);
		text-align: center;
		margin-block-end: 0.25em;
	}

	div :global(svg) {
		font-size: var(--step-4);
	}

	.sub :global(svg) {
		margin-block-start: 0.5em;
		font-size: var(--step-3);
		color: var(--as-text-2);
	}

	.count {
		font-size: var(--step-3);
		font-weight: 700;
	}

	/* a {
		font-size: var(--step-0);
		color: var(--as-text-1);
		text-decoration: none;
		background-color: var(--as-back-1);
		&:hover,
		&:focus {
			text-decoration: underline;
		}

		& :global(svg) {
			vertical-align: sub;
			font-size: 1.2em;
		}
	} */

	p {
		margin: auto;
		max-width: 50rem;
	}
</style>
