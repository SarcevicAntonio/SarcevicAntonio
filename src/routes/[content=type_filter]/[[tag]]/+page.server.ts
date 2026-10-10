import { by_most_up_to_date } from '#lib/date_helpers.js'
import { get_all_appearances, get_all_tags, get_blog_posts } from '#lib/server/entries.js'

export const prerender = true

export async function load({ params }) {
	const blog_posts = await get_blog_posts()
	let content = [...blog_posts, ...(params.content !== 'posts' ? get_all_appearances() : [])].sort(
		by_most_up_to_date
	)

	const tag_filter = params.tag
	if (tag_filter) {
		content = content.filter((post) => post.tags?.includes(tag_filter))
	}

	return { all_tags: await get_all_tags(content), content }
}
