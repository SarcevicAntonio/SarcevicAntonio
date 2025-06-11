/// <reference types="@sveltejs/kit" />
/// <reference types="unplugin-icons/types/svelte" />
/// <reference types="@modyfi/vite-plugin-yaml/modules" />

import type { Theme } from '$lib/theme'

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			theme: Theme
			style: 'toni' | 'link'
		}
		interface PageData {
			theme: Theme
			style: 'toni' | 'link'
			page_name: string
		}
		// interface Platform {}
	}
}

export {}
