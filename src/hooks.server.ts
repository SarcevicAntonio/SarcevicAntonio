import { is_valid_theme, type Theme } from '$lib/theme'

export async function handle({ event, resolve }) {
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
