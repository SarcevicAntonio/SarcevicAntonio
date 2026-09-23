import adapter from '@sveltejs/adapter-netlify'
import { sveltekit } from '@sveltejs/kit/vite'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { mdsvex, MdsvexOptions } from 'mdsvex'
import path from 'path'
import autolink from 'rehype-autolink-headings'
import slug from 'rehype-slug'
import toc from 'remark-toc'
import { importAssets } from 'svelte-preprocess-import-assets'
import Icons from 'unplugin-icons/vite'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

const mdsvex_config = {
	layout: fileURLToPath(path.join(import.meta.url, '../src/routes/(blog)/post.svelte')),
	remarkPlugins: [[toc, { tight: true }]],
	rehypePlugins: [
		slug,
		[
			autolink,
			{
				properties: { class: 'autolink-header' },
				content: [
					{
						type: 'element',
						tagName: 'span',
						properties: { title: 'link to this header' },
						children: [{ type: 'text', value: '#' }],
					},
				],
			},
		],
	],
} satisfies MdsvexOptions

export default defineConfig({
	plugins: [
		sveltekit({
			extensions: ['.svelte', '.svx'],
			preprocess: [vitePreprocess(), mdsvex(mdsvex_config), importAssets()],
			adapter: adapter(),
		}),
		Icons({ compiler: 'svelte' }),
	],
})
