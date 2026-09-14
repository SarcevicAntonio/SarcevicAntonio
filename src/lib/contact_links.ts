import type { Component } from 'svelte'
import Codeberg from '~icons/simple-icons/codeberg'
import Mastodon from '~icons/simple-icons/mastodon'
import Bluesky from '~icons/simple-icons/bluesky'

export const contact_links: Array<{
	title: string
	icon: Component
	href: string
	rel?: string
}> = [
	{
		title: 'Mastodon',
		icon: Mastodon,
		href: 'https://biplus.social/@linkplay',
		rel: 'me',
	},
	{
		title: 'Bluesky',
		icon: Bluesky,
		href: 'https://bsky.app/profile/sarcevic.dev',
	},
	{
		title: 'Codeberg',
		icon: Codeberg,
		href: 'https://codeberg.org/linkplay-space',
	},
]
