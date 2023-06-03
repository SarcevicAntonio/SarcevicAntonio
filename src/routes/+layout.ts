import { get_blog_posts } from '$lib/posts'

export async function load() {
	const blog_posts = await get_blog_posts()
	return {
		content: blog_posts,
	}
}
