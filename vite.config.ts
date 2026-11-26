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
import { defineConfig } from 'vite'

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
			preprocess: [vitePreprocess()],
			adapter: adapter(),
		}),
		Icons({ compiler: 'svelte' }),
	],
})
