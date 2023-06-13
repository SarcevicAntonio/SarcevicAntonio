import { is_valid_theme } from '$lib/theme'
import { redirect } from '@sveltejs/kit'

export function GET({ params, cookies, url }) {
	if (is_valid_theme(params.theme)) {
		cookies.set('theme', params.theme, { path: '/' })
	} else if (params.theme === 'os-preference') {
		cookies.delete('theme', { path: '/' })
	}
	const redirect_path = url.searchParams.get('redirect')
	if (redirect_path) throw redirect(302, redirect_path)
	return new Response()
}
