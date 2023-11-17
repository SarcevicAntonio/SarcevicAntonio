import { get_all_tags } from '$lib/server/posts'

export const prerender = true

export async function load({ parent, params }) {
	let { content } = await parent()

	const all_tags = await get_all_tags(content)

	const tag_filter = params.tags
	if (tag_filter) {
		content = content.filter((post) => post.tags.includes(tag_filter))
	}

	return { all_tags, content }
}
