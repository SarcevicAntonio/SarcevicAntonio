/// <reference types="@sveltejs/kit" />
/// <reference types="unplugin-icons/types/svelte" />
/// <reference types="@modyfi/vite-plugin-yaml/modules" />

import type { Theme } from '$lib/theme'
import type { Session, User } from 'better-auth'

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			theme: Theme
			session: Session | undefined
			user: User | undefined
		}
		interface PageData {
			theme: Theme
			page_name: string
		}
		// interface Platform {}
	}
}

export {}
