export const date_string = (string: string) =>
	new Date(string).toLocaleDateString(undefined, {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})

export const by_most_up_to_date = (
	a: { updated?: string; published: string },
	b: { updated?: string; published: string }
) => new Date(b.updated || b.published).valueOf() - new Date(a.updated || a.published).valueOf()
