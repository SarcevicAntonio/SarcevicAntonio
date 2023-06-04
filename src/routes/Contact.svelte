<script>
	import Twitter from '~icons/simple-icons/twitter'
	import Mastodon from '~icons/simple-icons/mastodon'
	import Github from '~icons/simple-icons/github'
	import Linkedin from '~icons/simple-icons/linkedin'
	import Mail from '~icons/material-symbols/mail-rounded'

	const links = [
		{
			title: 'GitHub',
			icon: Github,
			href: 'https://github.com/SarcevicAntonio',
		},
		{
			title: 'Mastodon',
			icon: Mastodon,
			href: 'https://mastodon.online/@sarcevic',
		},
		{
			title: 'Mail',
			icon: Mail,
			href: 'mailto:sarcevicantonio@gmail.com',
		},
		{
			title: 'Twitter',
			icon: Twitter,
			href: 'https://twitter.com/SarcevicAntonio',
		},
		{
			title: 'LinkedIn',
			icon: Linkedin,
			href: 'https://www.linkedin.com/in/sarcevic/',
		},
	]
</script>

<section>
	<h2>Connect</h2>
	<ul>
		{#each links as { href, title, icon }}
			<li>
				<a {href} {title}>
					<svelte:component this={icon} aria-hidden="true" />
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		margin-block: 8rem;
		text-align: center;
		font-size: var(--step-1);
	}

	h2 {
		font-size: var(--step-5);
		text-align: center;
		margin-block-end: 0.25em;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		padding: 0;
		margin: 0;
		justify-content: center;
		gap: 0.5em;
		font-size: var(--step-4);
	}

	a {
		color: var(--as-text-2);

		&:hover,
		&:focus {
			color: var(--as-text-1);
		}
	}
</style>
