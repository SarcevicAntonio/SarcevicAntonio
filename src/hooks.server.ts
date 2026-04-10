import { building } from '$app/environment'
import { auth } from '$lib/server/auth'
import { is_valid_theme, type Theme } from '$lib/theme'
import type { Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'
import { svelteKitHandler } from 'better-auth/svelte-kit'

const handleAuth: Handle = async ({ event, resolve }) => {
	const session = await auth.api.getSession({ headers: event.request.headers })
	if (session) {
		event.locals.session = session.session
		event.locals.user = session.user
	}
	return svelteKitHandler({ event, resolve, auth, building })
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

export const handle = sequence(handleAuth, handleThemeAndStyle)
