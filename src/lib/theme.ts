import { browser } from '$app/environment'
import { readable } from 'svelte/store'

// credit to: https://github.com/ghostdevv/svelte-kit-theme-switcher-demo

export const themes = ['light', 'dark', undefined] as const
export type Theme = (typeof themes)[number]

export function is_valid_theme(potential_theme: string | undefined): boolean {
	return (themes as unknown as string[]).includes(potential_theme || '')
}

const query = '(prefers-color-scheme: dark)'

export const os_theme_preference = readable<Theme>(
	browser ? (window.matchMedia(query).matches ? 'dark' : 'light') : undefined,
	(set) => {
		if (!browser) return
		const media_query = window.matchMedia(query)
		const update_store = ({ matches }: MediaQueryListEvent) => set(matches ? 'dark' : 'light')
		media_query.addEventListener('change', update_store)
		return () => {
			media_query.removeEventListener('change', update_store)
		}
	}
)
