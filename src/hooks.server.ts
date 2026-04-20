import { building, dev } from '$app/environment'
import { is_valid_theme, type Theme } from '$lib/theme'
import { type Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'

const handleWWW: Handle = async ({ event, resolve }) => {
	const res = resolve(event)
	if (dev || building) return res
	if (event.url.hostname.startsWith('www.')) return res
	const wwwUrl = new URL(event.url)
	wwwUrl.hostname = 'www.' + wwwUrl.hostname
	return new Response(undefined, { status: 308, headers: { location: String(wwwUrl) } })
}

const handleThemeAndStyle: Handle = async ({ event, resolve }) => {
	const cookieTheme = event.cookies.get('theme')
	event.locals.theme = is_valid_theme(cookieTheme) ? (cookieTheme as Theme) : undefined
	event.locals.style = event.request.url.includes('linkplay.') ? 'link' : 'toni'
	return await resolve(event, {
		transformPageChunk({ html }) {
			if (event.locals.theme) html = html.replace('%page.theme%', event.locals.theme)
			html = html.replace('%page.style%', event.locals.style)
			return html
		},
	})
}

export const handle = sequence(handleWWW, handleThemeAndStyle)
