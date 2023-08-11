import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
	plugins: [
		nodePolyfills({
			exclude: ['process'],
		}),
		sveltekit(),
		Icons({
			compiler: 'svelte',
		}),
	],
})
