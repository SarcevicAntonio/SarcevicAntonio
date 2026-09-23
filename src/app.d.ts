/// <reference types="@sveltejs/kit" />
/// <reference types="unplugin-icons/types/svelte" />
/// <reference types="@modyfi/vite-plugin-yaml/modules" />

import type { Theme } from '#lib/theme/index.js'

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			theme: Theme
			page_name: string
		}
		interface PageData {
			theme: Theme
			page_name: string
		}
		// interface Platform {}
	}
}

export {}
