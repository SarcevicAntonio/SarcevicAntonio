import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { mdsvex } from 'mdsvex'
import slug from 'rehype-slug'
import autolink from 'rehype-autolink-headings'
import { importAssets } from 'svelte-preprocess-import-assets'
import toc from 'remark-toc'

const mdsvex_config = {
	layout: 'src/routes/(blog)/post.svelte',
	remarkPlugins: [[toc, {
		tight: true
	}]],
	rehypePlugins: [
		slug,
		[
			autolink,
			{
				properties: {
					class: 'autolink-header',
				},
				content: [
					{
						type: 'element',
						tagName: 'span',
						properties: {},
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
		preprocess({
			postcss: true,
		}),
		importAssets(),
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
	},
	vitePlugin: {
		inspector: true,
	},
}

export default config
