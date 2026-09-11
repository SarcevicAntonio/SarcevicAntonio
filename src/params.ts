import { defineParams } from '@sveltejs/kit/params'

function matchType_filter(value) {
	return ['entries', 'posts'].includes(value)
}

export const params = defineParams({
	type_filter: (param) => (matchType_filter(param) ? param : undefined),
})
