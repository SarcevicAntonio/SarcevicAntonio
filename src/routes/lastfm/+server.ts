import { LASTFM_API_KEY } from '$env/static/private'
import { json } from '@sveltejs/kit'
import type { LastFMData } from './type.js'

const last_fm_api_url = `https://ws.audioscrobbler.com/2.0/?user=LinkPlay9&api_key=${LASTFM_API_KEY}&format=json`

export async function GET({ fetch }) {
	const data = await Promise.all(
		[
			last_fm_api_url + `&method=user.getrecenttracks&limit=5`,
			last_fm_api_url + `&method=user.gettopartists&period=12month&limit=5`,
			last_fm_api_url + `&method=user.gettoptracks&period=1month&limit=5`,
			last_fm_api_url + `&method=user.gettopalbums&period=3month&limit=5`,
		].map((url) => fetch(url).then((r) => r.json()))
	)
	return json(
		data.reduce((accumulated, object) => ({ ...accumulated, ...object }), {}) as LastFMData
	)
}
