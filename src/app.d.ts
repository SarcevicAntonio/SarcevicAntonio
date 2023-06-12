/// <reference types="@sveltejs/kit" />
/// <reference types="unplugin-icons/types/svelte" />

import type { Theme } from '$lib/theme'

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			theme: Theme
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {}
