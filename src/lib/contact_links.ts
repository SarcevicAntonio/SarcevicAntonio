import type { Component } from 'svelte'
import Mail from '~icons/material-symbols/mail-rounded'
import Bluesky from '~icons/simple-icons/bluesky'
import Github from '~icons/simple-icons/github'
import Linkedin from '~icons/simple-icons/linkedin'
import Mastodon from '~icons/simple-icons/mastodon'
import YouTube from '~icons/simple-icons/youtube'

export const contact_links: Array<{
	title: string
	Icon: Component
	href: string
	rel?: string
}> = [
	{
		title: 'YouTube',
		Icon: YouTube,
		href: 'https://www.youtube.com/@SarcevicAntonio',
	},
	{
		title: 'GitHub',
		Icon: Github,
		href: 'https://github.com/SarcevicAntonio',
	},
	{
		title: 'Mastodon',
		Icon: Mastodon,
		href: 'https://mastodon.online/@sarcevic',
		rel: 'me',
	},
	{
		title: 'Bluesky',
		Icon: Bluesky,
		href: 'https://bsky.app/profile/sarcevic.dev',
	},
	{
		title: 'Mail',
		Icon: Mail,
		href: 'mailto:sarcevicantonio@gmail.com',
	},
	{
		title: 'LinkedIn',
		Icon: Linkedin,
		href: 'https://www.linkedin.com/in/sarcevic/',
	},
]
