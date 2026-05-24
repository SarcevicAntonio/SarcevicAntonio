import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { mdsvex } from 'mdsvex'
import path from 'path'
import autolink from 'rehype-autolink-headings'
import slug from 'rehype-slug'
import toc from 'remark-toc'
import { importAssets } from 'svelte-preprocess-import-assets'
import { fileURLToPath } from 'url'

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
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],
	preprocess: [vitePreprocess(), mdsvex(mdsvex_config), importAssets()],
	kit: {
		adapter: adapter(),
	},
	vitePlugin: {
		inspector: {
			toggleKeyCombo: 'meta-x',
		},
	},
}

export default config
