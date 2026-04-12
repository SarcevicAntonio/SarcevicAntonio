import { getRequestEvent } from '$app/server'
import { BETTER_AUTH_SECRET, BETTER_AUTH_URL } from '$env/static/private'
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { sveltekitCookies } from 'better-auth/svelte-kit'
import { db } from './db'
import * as schema from './db/schema/auth'

export const auth = betterAuth({
	secret: BETTER_AUTH_SECRET,
	baseURL: BETTER_AUTH_URL,
	database: drizzleAdapter(db, { provider: 'sqlite', schema }),
	plugins: [sveltekitCookies(getRequestEvent)],
	emailAndPassword: { enabled: true },
})
