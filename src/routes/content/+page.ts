import { get_all_tags } from '$lib/posts.js'

export async function load({ parent, url }) {
	let { content } = await parent()

	const all_tags = await get_all_tags(content)

	const tag_filter = url.searchParams.get('tags')
	if (tag_filter) {
		content = content.filter((post) => post.tags.includes(tag_filter))
	}

	return { all_tags, content }
}
