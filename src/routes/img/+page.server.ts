import { error } from '@sveltejs/kit'

export const load = async ({ fetch, url }) => {
	const query = new URLSearchParams()
	query.set('limit', '10')
	query.set('orderBy', 'attributes.createdAt')
	const cursor = String(url.searchParams.get('cursor'))
	console.log(cursor, typeof cursor)
	if (cursor) query.set('cursor', cursor)
	let response = await fetch(`https://slink.linkplay.space/api/images?${query.toString()}`)
	let json = await response.json()
	if (!response.ok) error(response.status, `Fetch error: ${response.statusText}`)
	return {
		imgs: json.data,
		meta: json.meta,
	}
}
