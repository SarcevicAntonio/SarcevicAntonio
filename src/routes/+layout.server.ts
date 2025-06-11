import { by_published } from '$lib/date_helpers'
import { get_all_appearances, get_blog_posts } from '$lib/server/entries'

export async function load({ locals, fetch }) {
	const lastfm_data = await fetch('/lastfm').then((r) => r.json())
	const blog_posts = await get_blog_posts()
	const apperances = await get_all_appearances()
	const badges = Object.keys(import.meta.glob(`/static/badges/**.png`)).map((b) =>
		b.split('/').at(-1)?.split('.png').at(0)
	)

	return {
		badges,
		theme: locals.theme,
		style: locals.style,
		page_name: locals.style === 'link' ? 'linkplay.space' : 'sarcevic.dev',
		content: [...blog_posts, ...apperances].sort(by_published),
		lastfm_data: lastfm_data.error ? undefined : lastfm_data,
	}
}
