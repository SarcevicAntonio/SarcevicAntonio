import { browser } from '$app/environment'
import { readable } from 'svelte/store'

export const themes = ['light', 'dark', undefined] as const
export type Theme = (typeof themes)[number]

export function is_valid_theme(potential_theme: string | undefined): boolean {
	return (themes as unknown as string[]).includes(potential_theme || '')
}

const query = '(prefers-color-scheme: dark)'

export const os_theme_preference = readable(
	browser ? window.matchMedia(query).matches : 'light',
	(set) => {
		if (!browser) return
		const media_query = window.matchMedia(query)
		media_query.addEventListener('change', ({ matches }) => set(matches ? 'dark' : 'light'))
		return () => {
			media_query.removeEventListener('change', ({ matches }) => set(matches ? 'dark' : 'light'))
		}
	}
)
