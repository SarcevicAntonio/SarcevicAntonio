// credit to: https://github.com/ghostdevv/svelte-kit-theme-switcher-demo
const themes = ['light', 'dark', undefined] as const

export type Theme = (typeof themes)[number]

export function is_valid_theme(potential_theme: string | undefined): boolean {
	return (themes as unknown as string[]).includes(potential_theme || '')
}
