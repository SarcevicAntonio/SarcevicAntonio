import { is_valid_theme, type Theme } from '$lib/theme'

export async function handle({ event, resolve }) {
	const cookieTheme = event.cookies.get('theme')
	event.locals.theme = is_valid_theme(cookieTheme) ? (cookieTheme as Theme) : undefined
	return await resolve(event, {
		transformPageChunk({ html }) {
			if (event.locals.theme) {
				html = html.replace('%sveltekit.theme%', event.locals.theme)
			}
			return html
		},
	})
}
