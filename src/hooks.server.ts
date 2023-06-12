import { themes } from '$lib/ThemeSwitch.svelte'

export function is_valid_theme(potential_theme: string | undefined): boolean {
	return (themes as unknown as string[]).includes(potential_theme || '')
}

export async function handle({ event, resolve }) {
	const cookieTheme = event.cookies.get('theme')

	event.locals.theme = is_valid_theme(cookieTheme) ? cookieTheme : undefined

	return await resolve(event, {
		transformPageChunk({ html }) {
			if (event.locals.theme) {
				html = html.replace('%sveltekit.theme%', event.locals.theme)
			}

			return html
		},
	})
}
