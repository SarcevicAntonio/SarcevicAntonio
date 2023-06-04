export type LastFMData = {
	toptracks: {
		track: Array<{
			streamable: {
				fulltrack: string
				'#text': string
			}
			mbid: string
			name: string
			image: Array<{
				size: string
				'#text': string
			}>
			artist: {
				url: string
				name: string
				mbid: string
			}
			url: string
			duration: string
			'@attr': {
				rank: string
			}
			playcount: string
		}>
		'@attr': {
			user: string
			totalPages: string
			page: string
			perPage: string
			total: string
		}
	}
}
