import { get_blog_posts } from '$lib/posts'

export async function load({ fetch, data }) {
	const lastfm_data = await fetch('/lastfm').then((r) => r.json())
	const blog_posts = await get_blog_posts()
	return {
		...data,
		content: blog_posts,
		lastfm_data,
	}
}
