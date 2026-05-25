export const date_string = (string: string) =>
	new Date(string).toLocaleDateString(undefined, {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})

export const by_published = (a: { published: string }, b: { published: string }) =>
	new Date(b.published).valueOf() - new Date(a.published).valueOf()
