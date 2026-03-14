import { error } from '@sveltejs/kit'
import type { RequestEvent, RequestHandler } from './$types'

export const GET: RequestHandler = async ({ url, fetch }: RequestEvent) => {
	const src_url = url.searchParams.get('src')
	if (!src_url) error(400, 'no ?src found')
	const response = await fetch(src_url)
	const broken_ical_text = await response.text()
	const ical_text = broken_ical_text.replaceAll(/^UID:(?<uid>.+)@google.com$/gm, 'UID:$<uid>')
	return new Response(ical_text, {
		headers: response.headers,
		status: response.status,
		statusText: response.statusText,
	})
}
