import { compile } from 'mdsvex'
import { parseHTML } from 'linkedom'

const BLOG_GROUP_NAME = '(blog)'
const BLOG_FILE_NAME = '/+page.svx'

export type BlogMetadata = {
	title: string
	summary: string
	published: string
	updated?: string
	href: string
	tags: string[]
	html?: string
}

export async function get_blog_posts(render = false) {
	const blog_posts: BlogMetadata[] = []
	const modules = import.meta.glob(`/src/routes/**/+page.svx`)
	const markdowns = import.meta.glob(`/src/routes/**/+page.svx`, { as: 'raw' })

	for (const path in modules) {
		// need work around just importing from (blog) folder because of (parens)...
		// https://github.com/vitejs/vite/issues/11824
		const group_name_index = path.indexOf(BLOG_GROUP_NAME)
		const is_from_blog = group_name_index >= 0
		if (!is_from_blog) {
			continue
		}

		const module = await modules[path]()
		const { metadata } = module as { metadata: BlogMetadata }
		// feel like there should be a better way to do this
		// but i guess with file based routing this should be fine
		const href = path
			.slice(group_name_index + BLOG_GROUP_NAME.length)
			.slice(0, -1 * BLOG_FILE_NAME.length)

		if (render) {
			let html = module.default.render().html
			const linkedom = parseHTML(html)
			const article = linkedom.document.getElementsByTagName('article')
			html = article[0].innerHTML.replaceAll('\n', '').replaceAll('	', '')
			blog_posts.push({ ...metadata, href, html })
		} else {
			blog_posts.push({ ...metadata, href })
		}
	}

	return blog_posts
}

export async function get_all_tags(posts: BlogMetadata[]) {
	const all_tags = new Set<string>()
	posts.forEach(({ tags }) =>
		tags.forEach((tag) => {
			all_tags.add(tag)
		})
	)
	return [...all_tags]
}
