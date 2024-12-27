import type { Appearance, BlogMetadata } from './server/entries'

export const reformat_date_string = (string: string) =>
	new Date(string).toLocaleDateString(undefined, {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})

export const by_published = (a: BlogMetadata | Appearance, b: BlogMetadata | Appearance) =>
	new Date(b.published).valueOf() - new Date(a.published).valueOf()
