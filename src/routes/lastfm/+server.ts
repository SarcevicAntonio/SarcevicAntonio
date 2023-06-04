import { LASTFM_API_KEY } from '$env/static/private'

import { json } from '@sveltejs/kit'

const LASTFM_MYTRACKS_LAST7DAYS_API = `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=LinkPlay9&api_key=${LASTFM_API_KEY}&format=json&period=7day&limit=10`

export async function GET({ fetch }) {
	const data = await fetch(LASTFM_MYTRACKS_LAST7DAYS_API).then((r) => r.json())
	return json(data)
}
