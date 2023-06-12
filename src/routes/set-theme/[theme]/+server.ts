import { is_valid_theme } from '$lib/theme.js'
import { redirect } from '@sveltejs/kit'

export function GET({ params, cookies }) {
	if (is_valid_theme(params.theme)) cookies.set('theme', params.theme, { path: '/' })
	throw redirect(302, '/')
}
