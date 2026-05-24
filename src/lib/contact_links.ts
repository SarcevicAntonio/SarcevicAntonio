import type { Component } from 'svelte'
import Codeberg from '~icons/simple-icons/codeberg'
import Mastodon from '~icons/simple-icons/mastodon'

export const contact_links: Array<{
	title: string
	Icon: Component
	href: string
	rel?: string
}> = [
	{
		title: 'Mastodon',
		Icon: Mastodon,
		href: 'https://biplus.social/@linkplay',
		rel: 'me',
	},
	{
		title: 'Codeberg',
		Icon: Codeberg,
		href: 'https://codeberg.org/linkplay-space',
	},
]
