import { redirect } from '@sveltejs/kit'

export function GET({ cookies, url }) {
	cookies.delete('theme', { path: '/' })
	const redirect_path = url.searchParams.get('redirect')
	if (redirect_path) throw redirect(302, redirect_path)
	throw redirect(302, '/')
}
