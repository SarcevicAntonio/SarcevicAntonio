import { is_valid_theme, type Theme } from '#lib/theme/index.js'
import { building, dev } from '$app/env'
import { sequence, type Handle } from '@sveltejs/kit/hooks'

const handle_www: Handle = async ({ event, resolve }) => {
	const res = resolve(event)

	if (dev || building) return res
	if (event.url.hostname.startsWith('www.')) return res

	const www_url = new URL(event.url)

	www_url.hostname = 'www.' + www_url.hostname

	return new Response(undefined, { status: 308, headers: { location: String(www_url) } })
}

const handle_theme: Handle = async ({ event, resolve }) => {
	const cookie_theme = event.cookies.get('theme')
	event.locals.theme = is_valid_theme(cookie_theme) ? (cookie_theme as Theme) : undefined
	event.locals.page_name = event.url.host.replace('www.', '')
	return await resolve(event, {
		transformPageChunk({ html }) {
			if (event.locals.theme) html = html.replace('%page.theme%', event.locals.theme)
			html = html.replace('%page.name%', event.locals.page_name)
			return html
		},
	})
}

export const handle = sequence(handle_www, handle_theme)
