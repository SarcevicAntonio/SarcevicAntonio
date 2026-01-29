import ViteYaml from '@modyfi/vite-plugin-yaml'
import { sveltekit } from '@sveltejs/kit/vite'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		ViteYaml(),
		sveltekit(),
		Icons({
			compiler: 'svelte',
		}),
	],
})
