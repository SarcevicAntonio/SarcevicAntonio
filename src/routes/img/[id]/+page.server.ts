import { error } from '@sveltejs/kit'

export const load = async ({ fetch, url, params }) => {
	// TODO: do detail page, however currently the query 401s
	error(404)
	const query = new URLSearchParams()
	let response = await fetch(
		`https://slink.linkplay.space/api/image/${params.id}/detail?${query.toString()}`
	)
	let json = await response.json()
	if (!response.ok) error(response.status, `Fetch error: ${response.statusText}`)
	return {
		imgs: json.data,
		meta: json.meta,
	}
}
