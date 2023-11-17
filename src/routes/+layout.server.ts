import { by_published } from '$lib/date_helpers'
import { get_all_appearances, get_blog_posts } from '$lib/server/posts'

export async function load({ locals, fetch }) {
	const lastfm_data = await fetch('/lastfm').then((r) => r.json())
	const blog_posts = await get_blog_posts()
	const apperances = await get_all_appearances()
	return {
		theme: locals.theme,
		posts: blog_posts.sort(by_published),
		apperances: apperances.sort(by_published),
		lastfm_data,
	}
}
