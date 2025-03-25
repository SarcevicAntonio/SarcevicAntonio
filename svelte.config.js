import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { mdsvex } from 'mdsvex'
import autolink from 'rehype-autolink-headings'
import slug from 'rehype-slug'
import toc from 'remark-toc'
import { sveltePreprocess } from 'svelte-preprocess'
import { importAssets } from 'svelte-preprocess-import-assets'

const mdsvex_config = {
	layout: 'src/routes/(blog)/post.svelte',
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
	preprocess: [
		vitePreprocess(),
		mdsvex(mdsvex_config),
		sveltePreprocess({ postcss: true }),
		importAssets(),
	],

	kit: {
		adapter: adapter({ runtime: 'edge' }),
	},
	vitePlugin: {
		inspector: true,
	},
}

export default config
