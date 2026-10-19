import { is_valid_theme, type Theme } from '#lib/theme/index.js'
import { sequence, type Handle } from '@sveltejs/kit/hooks'

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

export const handle = sequence(setup_theme)
