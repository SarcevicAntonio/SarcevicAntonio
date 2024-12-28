import { get_all_tags } from '$lib/server/entries'

export const prerender = true

export async function load({ parent, params, url }) {
	let { content } = await parent()
	const all_tags = await get_all_tags(content)

	const tag_filter = params.tag
	if (tag_filter) {
		content = content.filter((post) => post.tags.includes(tag_filter))
	}

	if (params.content === 'posts') {
		content = content.filter((post) => post.type === 'blog_post')
	}

	return { all_tags, content }
}
