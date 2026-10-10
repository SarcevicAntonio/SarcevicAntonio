import { defineParams } from '@sveltejs/kit/params'

export const params = defineParams({
	type_filter: (param) => {
		if (['entries', 'posts'].includes(param)) return param
	},
})
