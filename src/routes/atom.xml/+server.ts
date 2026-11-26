import { get_all_tags, get_blog_posts } from '#lib/server/entries.js'
import { Feed } from 'feed'

export const prerender = true

export async function GET({ url }) {
	const origin = url.origin
	const get_url = (path: string) => new URL(path, origin).toString()
	const posts = await get_blog_posts(true)
	const tags = await get_all_tags(posts)

	const feed = new Feed({
		id: origin,
		link: origin,
		language: 'en',
		favicon: get_url('favicon.png'),
		title: 'linkplay.space',
		description: 'my blog posts',
		author: { name: 'toni / link' },
		feedLinks: { atom: get_url('atom.xml') },
	})

	for (const tag of tags) feed.addCategory(tag)
	for (const post of posts) {
		feed.addItem({
			id: get_url(post.href),
			link: get_url(post.href),
			date: new Date(post.updated || post.published),
			published: new Date(post.published),
			title: post.title,
			category: post.tags?.map((tag) => ({ term: tag })),
			description: post.summary,
			content: post.html,
		})
	}

	return new Response(feed.atom1(), { headers: { 'content-type': 'application/atom+xml' } })
}
