import { redirect } from '@sveltejs/kit'

export function GET({ cookies }) {
	cookies.delete('theme', { path: '/' })
	throw redirect(302, '/')
}
