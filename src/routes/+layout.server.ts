import { by_published } from '$lib/date_helpers'
import { get_all_appearances, get_blog_posts } from '$lib/server/entries'

export async function load({ locals, url }) {
	const blog_posts = await get_blog_posts()
	const apperances = await get_all_appearances()

	const badges = Object.keys(import.meta.glob(`/static/badges/**`)).map((b) => b.split('/').at(-1))

	return {
		badges,
		theme: locals.theme,
		page_name: url.host.replace('www.', ''),
		content: [...blog_posts, ...apperances].sort(by_published),
	}
}
