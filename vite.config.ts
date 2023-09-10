import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import ViteYaml from '@modyfi/vite-plugin-yaml'

export default defineConfig({
	plugins: [
		nodePolyfills(),
		ViteYaml(),
		sveltekit(),
		Icons({
			compiler: 'svelte',
		}),
	],
})
