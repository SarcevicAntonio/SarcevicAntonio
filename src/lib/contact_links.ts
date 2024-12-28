import type { Component } from 'svelte'
import Mail from '~icons/material-symbols/mail-rounded'
import Bluesky from '~icons/simple-icons/bluesky'
import Discord from '~icons/simple-icons/discord'
import Github from '~icons/simple-icons/github'
import Linkedin from '~icons/simple-icons/linkedin'
import Mastodon from '~icons/simple-icons/mastodon'
import YouTube from '~icons/simple-icons/youtube'

export const contact_links: Array<{
	title: string
	icon: Component
	href: string
	rel?: string
}> = [
	{
		title: 'YouTube',
		icon: YouTube,
		href: 'https://www.youtube.com/@SarcevicAntonio',
	},
	{
		title: 'GitHub',
		icon: Github,
		href: 'https://github.com/SarcevicAntonio',
	},
	{
		title: 'Mastodon',
		icon: Mastodon,
		href: 'https://mastodon.online/@sarcevic',
		rel: 'me',
	},
	{
		title: 'Bluesky',
		icon: Bluesky,
		href: 'https://bsky.app/profile/sarcevic.dev',
	},
	{
		title: 'Mail',
		icon: Mail,
		href: 'mailto:sarcevicantonio@gmail.com',
	},
	{
		title: 'LinkedIn',
		icon: Linkedin,
		href: 'https://www.linkedin.com/in/sarcevic/',
	},
]
