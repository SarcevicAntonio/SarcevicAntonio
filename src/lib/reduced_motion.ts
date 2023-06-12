import { browser } from '$app/environment'
import { readable } from 'svelte/store'

// credit to: https://geoffrich.net/posts/accessible-svelte-transitions/

const query = '(prefers-reduced-motion: reduce)'

export const prefers_reduced_motion = readable(
	!browser || window.matchMedia(query).matches,
	(set) => {
		if (!browser) return
		const update_store = ({ matches }: MediaQueryListEvent) => set(matches)
		const media_query = window.matchMedia(query)
		media_query.addEventListener('change', update_store)
		return () => {
			media_query.removeEventListener('change', update_store)
		}
	}
)
