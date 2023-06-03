import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
	plugins: [
		nodePolyfills(),
		sveltekit(),
		Icons({
			compiler: 'svelte',
		}),
	],
})
