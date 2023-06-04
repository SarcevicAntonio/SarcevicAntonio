import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { mdsvex } from 'mdsvex'
import slug from 'rehype-slug'
import autolink from 'rehype-autolink-headings'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			layout: 'src/routes/(blog)/post.svelte',
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
		}),
		preprocess({
			postcss: true,
		}),
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
