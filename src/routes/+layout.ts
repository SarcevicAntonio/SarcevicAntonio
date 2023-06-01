const BLOG_GROUP = '(blog)'
const BLOG_POST_SUFFIX = '/+page.svx'

export type BlogMetadata = {
	title: string
	summary: string
	published: string
	href: string
	tags: string[]
}

export async function load() {
	// need work around because of (parens)
	// https://github.com/vitejs/vite/issues/11824
	const modules = await import.meta.glob(`/src/routes/**/+page.svx`)

	const blog_posts: BlogMetadata[] = []
	for (const path in modules) {
		const blog_parens_index = path.indexOf(BLOG_GROUP)
		const found = blog_parens_index >= 0
		if (!found) {
			continue
		}
		const { metadata } = (await modules[path]()) as { metadata: BlogMetadata }
		const href = path
			.slice(blog_parens_index + BLOG_GROUP.length)
			.slice(0, -1 * BLOG_POST_SUFFIX.length)
		blog_posts.push({ ...metadata, href })
	}

	return {
		content: [...blog_posts],
	}
}
