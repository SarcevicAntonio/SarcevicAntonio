import { error } from '@sveltejs/kit'

export const load = async ({ fetch, url }) => {
	const query = new URLSearchParams()
	query.set('limit', '10')
	query.set('orderBy', 'attributes.createdAt')
	const cursor = String(url.searchParams.get('cursor'))
	if (cursor) query.set('cursor', cursor)
	let response = await fetch(`https://slink.linkplay.space/api/images?${query.toString()}`, {
		signal: AbortSignal.timeout(2500),
	}).catch(() => new Response(null, { status: 503, statusText: '/img is unavailable right now' }))
	if (!response.ok) error(response.status, `Fetch error: ${response.statusText}`)
	let json = await response.json()
	return {
		imgs: json.data,
		meta: json.meta,
	}
}
