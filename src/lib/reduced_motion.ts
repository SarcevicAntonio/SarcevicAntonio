import { browser } from '$app/environment'
import { readable } from 'svelte/store'

// credit to: https://geoffrich.net/posts/accessible-svelte-transitions/

const reducedMotionQuery = '(prefers-reduced-motion: reduce)'

export const prefers_reduced_motion = readable(
	!browser || window.matchMedia(reducedMotionQuery).matches,
	(set) => {
		if (!browser) return
		const media_query = window.matchMedia(reducedMotionQuery)
		media_query.addEventListener('change', ({ matches }) => set(matches))
		return () => {
			media_query.removeEventListener('change', ({ matches }) => set(matches))
		}
	}
)
