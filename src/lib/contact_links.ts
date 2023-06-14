import Mail from '~icons/material-symbols/mail-rounded'
import Discord from '~icons/simple-icons/discord'
import Github from '~icons/simple-icons/github'
import Linkedin from '~icons/simple-icons/linkedin'
import Mastodon from '~icons/simple-icons/mastodon'
import Twitter from '~icons/simple-icons/twitter'
import Bluesky from './Bluesky.svelte'
export const contact_links = [
	{
		title: 'Mail',
		icon: Mail,
		href: 'mailto:sarcevicantonio@gmail.com',
	},
	{
		title: 'Discord',
		icon: Discord,
		href: 'https://discord.com/users/87248833502781440',
	},
	{
		title: 'Mastodon',
		icon: Mastodon,
		href: 'https://mastodon.online/@sarcevic',
	},
	{ title: 'Bluesky', icon: Bluesky, href: 'https://bsky.app/profile/sarcevic.dev' },
	{
		title: 'Twitter',
		icon: Twitter,
		href: 'https://twitter.com/SarcevicAntonio',
	},
	{
		title: 'GitHub',
		icon: Github,
		href: 'https://github.com/SarcevicAntonio',
	},
	{
		title: 'LinkedIn',
		icon: Linkedin,
		href: 'https://www.linkedin.com/in/sarcevic/',
	},
]
