/* eslint-disable @typescript-eslint/naming-convention */
// generate with https://transform.tools/json-to-typescript

export interface LastFMData {
	toptracks: Toptracks
	topalbums: Topalbums
	recenttracks: Recenttracks
	topartists: Topartists
}

interface Toptracks {
	track: Track[]
	'@attr': Attr2
}

interface Track {
	streamable: Streamable
	mbid: string
	name: string
	image: Image[]
	artist: Artist
	url: string
	duration: string
	'@attr': Attr
	playcount: string
}

interface Streamable {
	fulltrack: string
	'#text': string
}

interface Image {
	size: string
	'#text': string
}

interface Artist {
	url: string
	name: string
	mbid: string
}

interface Attr {
	rank: string
}

interface Attr2 {
	perPage: string
	totalPages: string
	page: string
	total: string
	user: string
}

interface Topalbums {
	album: Album[]
	'@attr': Attr4
}

interface Album {
	artist: Artist2
	image: Image2[]
	mbid: string
	url: string
	playcount: string
	'@attr': Attr3
	name: string
}

interface Artist2 {
	url: string
	name: string
	mbid: string
}

interface Image2 {
	size: string
	'#text': string
}

interface Attr3 {
	rank: string
}

interface Attr4 {
	user: string
	totalPages: string
	page: string
	perPage: string
	total: string
}

interface Recenttracks {
	track: Track2[]
	'@attr': Attr6
}

interface Track2 {
	artist: Artist3
	streamable: string
	image: Image3[]
	mbid: string
	album: Album2
	name: string
	'@attr'?: Attr5
	url: string
	date?: Date
}

interface Artist3 {
	mbid: string
	'#text': string
}

interface Image3 {
	size: string
	'#text': string
}

interface Album2 {
	mbid: string
	'#text': string
}

interface Attr5 {
	nowplaying: string
}

interface Date {
	uts: string
	'#text': string
}

interface Attr6 {
	user: string
	totalPages: string
	page: string
	perPage: string
	total: string
}

interface Topartists {
	artist: Artist4[]
	'@attr': Attr8
}

interface Artist4 {
	streamable: string
	image: Image4[]
	mbid: string
	url: string
	playcount: string
	'@attr': Attr7
	name: string
}

interface Image4 {
	size: string
	'#text': string
}

interface Attr7 {
	rank: string
}

interface Attr8 {
	user: string
	totalPages: string
	page: string
	perPage: string
	total: string
}
