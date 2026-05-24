import { building, dev } from '$app/environment'
import { is_valid_theme, type Theme } from '$lib/theme'
import { type Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'

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
	return await resolve(event, {
		transformPageChunk({ html }) {
			if (event.locals.theme) html = html.replace('%page.theme%', event.locals.theme)
			return html
		},
	})
}

export const handle = sequence(handle_www, handle_theme)
