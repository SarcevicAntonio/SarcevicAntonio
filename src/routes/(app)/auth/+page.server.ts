import { error } from '@sveltejs/kit'
import type { Actions } from './$types'
import { auth } from '$lib/server/auth'

export const actions = {
	default: async (event) => {
		const data = await event.request.formData()
		const username = data.get('username')?.toString()
		const email = data.get('email')?.toString()
		const password = data.get('password')?.toString()

		if (!username || !email?.includes('@') || !password) error(400)

		// auth.api.signUpEmail()
	},
} satisfies Actions
