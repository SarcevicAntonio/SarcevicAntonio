import { by_published } from '$lib/date_helpers.js'
import { get_all_appearances, get_all_tags, get_blog_posts } from '$lib/server/posts'

export const prerender = true

export async function load({ params }) {
	const blog_posts = await get_blog_posts()
	const apperances = await get_all_appearances()
	let content = [...blog_posts, ...apperances].sort(by_published)

	const all_tags = await get_all_tags(content)

	const tag_filter = params.tags
	if (tag_filter) {
		content = content.filter((post) => post.tags.includes(tag_filter))
	}

	return { all_tags, content }
}
