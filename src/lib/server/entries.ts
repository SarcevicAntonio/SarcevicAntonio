import appearances from '$lib/appearances.yaml'
import { by_published } from '$lib/date_helpers'
import { parseHTML } from 'linkedom'
import type { Component } from 'svelte'
import { render as svelteRender } from 'svelte/server'
import { z } from 'zod'

const BLOG_GROUP_NAME = '(blog)'
const BLOG_FILE_NAME = '/+page.svx'

const BlogMetadata = z.object({
	type: z.string().default('blog_post'),
	title: z.string(),
	summary: z.string(),
	published: z.string(),
	updated: z.string().optional(),
	href: z.string(),
	tags: z.array(z.string()),
	html: z.string().optional(),
	lang: z.string().default('EN'),
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
			default: Component
		}

		const href = path
			.slice(group_name_index + BLOG_GROUP_NAME.length)
			.slice(0, -1 * BLOG_FILE_NAME.length)

		if (!render) {
			blog_posts.push({ ...metadata, href })
		} else {
			const rendered_html = svelteRender(mdsvx_module).body
			const linkedom = parseHTML(rendered_html)
			const [article] = linkedom.document.getElementsByTagName('article')
			article.getElementsByTagName('aside')[0].remove()
			article.getElementsByTagName('h1')[0].remove()
			const html = article.innerHTML.replaceAll('\n', '').replaceAll('	', '')
			blog_posts.push({ ...metadata, href, html })
		}
	}

	blog_posts.sort(by_published)

	for (const post of blog_posts) {
		try {
			BlogMetadata.parse(post)
		} catch (e) {
			console.error(
				`ERROR: Blog Metadata Parse Error!\nLooks like the metadata for post "${post.title}" is malformed.`,
			)
			throw e
		}
	}

	blog_posts.map((b) => (b.type = 'blog_post'))
	return blog_posts
}

export async function get_all_tags(posts: (BlogMetadata | Appearance)[]) {
	const all_tags: Record<string, number> = {}
	posts.forEach(({ tags }) =>
		tags.forEach((tag) => {
			all_tags[tag] = all_tags[tag] + 1 || 1
		}),
	)

	return Object.entries(all_tags)
		.sort(([tagA, a], [tagB, b]) => b - a)
		.map(([tag]) => tag)
}

const domain_pattern = /^(?:https?:\/\/)?(?:[^@/\n]+@)?(?:www\.)?([^:/\n]+)/

const Appearance = z.object({
	type: z.string().default('appearance'),
	title: z.string(),
	href: z.string(),
	lang: z.string().default('EN'),
	published: z.string(),
	summary: z.string().optional(),
	tags: z.array(z.string()),
	domain: z.string().optional(),
})

export type Appearance = z.infer<typeof Appearance>
export function get_all_appearances(): Appearance[] {
	for (const appearance of appearances as Appearance[]) {
		appearance.domain = (domain_pattern.exec(appearance.href) || [])[1]
	}

	appearances.sort(by_published)

	for (const post of appearances as Appearance[]) {
		try {
			Appearance.parse(post)
		} catch (e) {
			console.error(
				`ERROR: Appearance Parse Error!\nLooks like the metadata for appearance "${post.href}" is malformed.`,
			)
			throw e
		}
	}

	appearances.map((a: Appearance) => (a.type = 'appearance'))

	return appearances as Appearance[]
}
