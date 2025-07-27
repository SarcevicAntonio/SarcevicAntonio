import type { RequestHandler } from './$types'

export const GET: RequestHandler = async ({ url, fetch }) => {
	const url_to_fetch = url.searchParams.get('url')
	if (!url_to_fetch) {
		return new Response(null, {
			status: 404,
		})
	}
	return await fetch(url_to_fetch)
}
