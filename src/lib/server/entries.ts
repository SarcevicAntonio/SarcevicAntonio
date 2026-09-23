import { appearances } from '#lib/appearances.js'
import { by_most_up_to_date } from '#lib/date_helpers.js'
import { parseHTML } from 'linkedom'
import type { Component } from 'svelte'
import { render as svelteRender } from 'svelte/server'
import * as v from 'valibot'

const BLOG_GROUP_NAME = '(blog)'
const BLOG_FILE_NAME = '/+page.svx'

const BlogMetadata = v.object({
	type: v.optional(v.string(), 'blog_post'),
	title: v.string(),
	summary: v.string(),
	published: v.string(),
	updated: v.optional(v.string()),
	href: v.string(),
	tags: v.optional(v.array(v.string())),
	html: v.optional(v.string()),
	lang: v.optional(v.string(), 'EN'),
})

export type BlogMetadata = v.InferOutput<typeof BlogMetadata>

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

	blog_posts.sort(by_most_up_to_date)

	for (const post of blog_posts) {
		try {
			v.parse(BlogMetadata, post)
		} catch (e) {
			console.error(
				`ERROR: Blog Metadata Parse Error!\nLooks like the metadata for post "${post.title}" is malformed.`
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
		tags?.forEach((tag) => {
			all_tags[tag] = all_tags[tag] + 1 || 1
		})
	)

	return Object.entries(all_tags)
		.sort(([_tag_a, a], [_tag_b, b]) => b - a)
		.map(([tag]) => tag)
}

const domain_pattern = /^(?:https?:\/\/)?(?:[^@/\n]+@)?(?:www\.)?([^:/\n]+)/

const Appearance = v.object({
	type: v.optional(v.string(), 'appearance'),
	title: v.string(),
	href: v.string(),
	lang: v.optional(v.string(), 'EN'),
	published: v.string(),
	updated: v.optional(v.string()),
	summary: v.optional(v.string()),
	tags: v.array(v.string()),
	domain: v.optional(v.string()),
})

export type AppearanceSource = v.InferInput<typeof Appearance>
export type Appearance = v.InferOutput<typeof Appearance>

export function get_all_appearances(): Appearance[] {
	for (const appearance of appearances as Appearance[]) {
		appearance.domain = (domain_pattern.exec(appearance.href) || [])[1]
	}

	appearances.sort(by_most_up_to_date)

	for (const post of appearances as Appearance[]) {
		try {
			v.parse(Appearance, post)
		} catch (e) {
			console.error(
				`ERROR: Appearance Parse Error!\nLooks like the metadata for appearance "${post.href}" is malformed.`
			)
			throw e
		}
	}

	appearances.map((a) => {
		a.type = 'appearance'
		return a
	})

	return appearances as Appearance[]
}
