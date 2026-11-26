import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'
import { anchors } from '@mdsvex/plugin-anchors'
import { code_blocks } from '@mdsvex/plugin-code-blocks'
import { toc } from '@mdsvex/plugin-toc'
import adapter from '@sveltejs/adapter-netlify'
import { sveltekit } from '@sveltejs/kit/vite'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { mdsvex } from 'mdsvex'
import path from 'path'
import Icons from 'unplugin-icons/vite'
import { fileURLToPath } from 'url'

export default defineConfig({
	plugins: [
		mdsvex({
			extensions: ['.svx'],
			templates: {
				default: fileURLToPath(path.join(import.meta.url, '../src/routes/(blog)/post.svelte')),
			},
			heading_ids: true,
			smart_punctuation: true,
			plugins: [
				toc(),
				anchors({ position: 'prepend', attrs: { class: 'autolink-header' } }),
				code_blocks(),
			],
		}),
		sveltekit({
			paths: { origin: 'https://www.linkplay.space' },
			preprocess: [vitePreprocess()],
			adapter: adapter(),
		}),
		Icons({ compiler: 'svelte' }),
	],
	test: {
		expect: { requireAssertions: true },
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'client',
					browser: {
						enabled: true,
						provider: playwright(),
						instances: [{ browser: 'chromium', headless: true }],
					},
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
				},
			},

			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}'],
				},
			},
		],
	},
})
