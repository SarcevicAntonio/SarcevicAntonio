import { get_blog_posts } from '$lib/server/posts'

export async function load({ locals, fetch }) {
	const lastfm_data = await fetch('/lastfm').then((r) => r.json())
	const blog_posts = await get_blog_posts()
	return {
		theme: locals.theme,
		content: blog_posts,
		lastfm_data,
	}
}
