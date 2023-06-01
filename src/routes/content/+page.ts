export async function load({ parent, url }) {
	let { content } = await parent()

	const all_tags = new Set<string>()
	content.forEach(({ tags }) =>
		tags.forEach((tag) => {
			all_tags.add(tag)
		})
	)

	const filter_tag = url.searchParams.get('tag')

	if (filter_tag) {
		content = content.filter((post) => post.tags.includes(filter_tag))
	}

	return { all_tags, content }
}
