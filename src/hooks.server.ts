import { is_valid_theme, type Theme } from '#lib/theme/index.js'
import { building, dev } from '$app/env'
import { sequence, type Handle } from '@sveltejs/kit/hooks'

const redirect: Handle = async ({ event, resolve }) => {
	const res = resolve(event)
	if (dev || building) return res
	if (!event.url.hostname.endsWith('sarcevic.dev')) return res
	const redirect_url = new URL(event.url)
	redirect_url.hostname = 'www.linkplay.space'
	return new Response(undefined, { status: 308, headers: { location: String(redirect_url) } })
}

const setup_theme: Handle = async ({ event, resolve }) => {
	const cookie_theme = event.cookies.get('theme')
	event.locals.theme = is_valid_theme(cookie_theme) ? (cookie_theme as Theme) : undefined
	return await resolve(event, {
		transformPageChunk({ html }) {
			if (event.locals.theme) html = html.replace('%page.theme%', event.locals.theme)
			return html
		},
	})
}

export const handle = sequence(redirect, setup_theme)
