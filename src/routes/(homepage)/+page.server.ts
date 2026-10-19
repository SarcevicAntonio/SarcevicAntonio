import { by_most_up_to_date } from '#lib/date_helpers.js'
import { get_all_appearances, get_blog_posts } from '#lib/server/entries.js'

export const prerender = true
export async function load() {
	const blog_posts = (await get_blog_posts()).slice(0, 5)
	const apperances = get_all_appearances().slice(0, 5)
	return {
		content: [...blog_posts, ...apperances].sort(by_most_up_to_date),
		badges: Object.keys(import.meta.glob(`/static/badges/**`)).map((b) => b.split('/').at(-1)),
	}
}
