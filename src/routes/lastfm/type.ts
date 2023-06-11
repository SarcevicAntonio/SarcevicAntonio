// generate with https://transform.tools/json-to-typescript

export interface LastFMData {
	toptracks: Toptracks
	topalbums: Topalbums
	recenttracks: Recenttracks
	topartists: Topartists
}

export interface Toptracks {
	track: Track[]
	'@attr': Attr2
}

export interface Track {
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

export interface Streamable {
	fulltrack: string
	'#text': string
}

export interface Image {
	size: string
	'#text': string
}

export interface Artist {
	url: string
	name: string
	mbid: string
}

export interface Attr {
	rank: string
}

export interface Attr2 {
	perPage: string
	totalPages: string
	page: string
	total: string
	user: string
}

export interface Topalbums {
	album: Album[]
	'@attr': Attr4
}

export interface Album {
	artist: Artist2
	image: Image2[]
	mbid: string
	url: string
	playcount: string
	'@attr': Attr3
	name: string
}

export interface Artist2 {
	url: string
	name: string
	mbid: string
}

export interface Image2 {
	size: string
	'#text': string
}

export interface Attr3 {
	rank: string
}

export interface Attr4 {
	user: string
	totalPages: string
	page: string
	perPage: string
	total: string
}

export interface Recenttracks {
	track: Track2[]
	'@attr': Attr6
}

export interface Track2 {
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

export interface Artist3 {
	mbid: string
	'#text': string
}

export interface Image3 {
	size: string
	'#text': string
}

export interface Album2 {
	mbid: string
	'#text': string
}

export interface Attr5 {
	nowplaying: string
}

export interface Date {
	uts: string
	'#text': string
}

export interface Attr6 {
	user: string
	totalPages: string
	page: string
	perPage: string
	total: string
}

export interface Topartists {
	artist: Artist4[]
	'@attr': Attr8
}

export interface Artist4 {
	streamable: string
	image: Image4[]
	mbid: string
	url: string
	playcount: string
	'@attr': Attr7
	name: string
}

export interface Image4 {
	size: string
	'#text': string
}

export interface Attr7 {
	rank: string
}

export interface Attr8 {
	user: string
	totalPages: string
	page: string
	perPage: string
	total: string
}
