import { is_valid_theme } from '#lib/theme/index.js'
import { redirect } from '@sveltejs/kit'

export function GET({ params, cookies, request }) {
	if (is_valid_theme(params.theme)) {
		cookies.set('theme', params.theme, { path: '/' })
	} else if (params.theme === 'os-preference') {
		cookies.delete('theme', { path: '/' })
	}
	const referer = request.headers.get('referer') ?? ''
	const location = URL.canParse(referer) ? new URL(referer).pathname : '/'
	throw redirect(302, location)
}
