import { parseHTML } from 'linkedom'
import { z } from 'zod'

const BLOG_GROUP_NAME = '(blog)'
const BLOG_FILE_NAME = '/+page.svx'

const BlogMetadata = z.object({
	title: z.string(),
	summary: z.string(),
	published: z.string(),
	updated: z.string().optional(),
	href: z.string(),
	tags: z.array(z.string()),
	html: z.string().optional(),
})

export type BlogMetadata = z.infer<typeof BlogMetadata>

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

		const { metadata, default: mdsvx_module } = (await modules[path]()) as {
			metadata: BlogMetadata
			default: { render: () => { html: string } }
		}

		const href = path
			.slice(group_name_index + BLOG_GROUP_NAME.length)
			.slice(0, -1 * BLOG_FILE_NAME.length)

		if (!render) {
			blog_posts.push({ ...metadata, href })
		} else {
			const rendered_html = mdsvx_module.render().html
			const linkedom = parseHTML(rendered_html)
			const [article] = linkedom.document.getElementsByTagName('article')
			article.getElementsByTagName('aside')[0].remove()
			article.getElementsByTagName('h1')[0].remove()
			const html = article.innerHTML.replaceAll('\n', '').replaceAll('	', '')
			blog_posts.push({ ...metadata, href, html })
		}
	}

	blog_posts.sort((a, b) => new Date(b.published).valueOf() - new Date(a.published).valueOf())

	for (const post of blog_posts) {
		try {
			BlogMetadata.parse(post)
		} catch (e) {
			console.error(
				`ERROR: Blog Metadata Parse Error!\nLooks like the metadata for post "${post.title}" is malformed.`
			)
			throw e
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
