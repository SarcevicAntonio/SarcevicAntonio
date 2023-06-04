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

	for (const path in modules) {
		// need work around just importing from (blog) folder because of (parens)...
		// https://github.com/vitejs/vite/issues/11824
		const group_name_index = path.indexOf(BLOG_GROUP_NAME)
		const is_from_blog = group_name_index >= 0
		if (!is_from_blog) {
			continue
		}

		const module = (await modules[path]()) as {
			metadata: BlogMetadata
			default: { render: () => { html: string } }
		}
		const { metadata } = module

		const href = path
			.slice(group_name_index + BLOG_GROUP_NAME.length)
			.slice(0, -1 * BLOG_FILE_NAME.length)

		if (!render) {
			blog_posts.push({ ...metadata, href })
		} else {
			const rendered_html = module.default.render().html
			const linkedom = parseHTML(rendered_html)
			const [article] = linkedom.document.getElementsByTagName('article')
			article.getElementsByTagName('aside')[0].remove()
			article.getElementsByTagName('h1')[0].remove()
			const html = article.innerHTML.replaceAll('\n', '').replaceAll('	', '')
			blog_posts.push({ ...metadata, href, html })
		}
	}

	blog_posts.sort((a, b) => new Date(b.published).valueOf() - new Date(a.published).valueOf())

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
