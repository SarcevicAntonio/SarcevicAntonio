import adapter from '@sveltejs/adapter-netlify'
import { sveltekit } from '@sveltejs/kit/vite'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { language as bash } from '@twinkleplop/bash'
import { language as html } from '@twinkleplop/html'
import { language as javascript } from '@twinkleplop/javascript'
import { language as json } from '@twinkleplop/json'
import { language as svelte } from '@twinkleplop/svelte'
import { escapeSvelte, mdsvex, MdsvexOptions } from 'mdsvex'
import path from 'path'
import autolink from 'rehype-autolink-headings'
import slug from 'rehype-slug'
import toc from 'remark-toc'
import { importAssets } from 'svelte-preprocess-import-assets'
import Icons from 'unplugin-icons/vite'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

const languages: Record<string, (input: string) => string> = {
	bash: bash(),
	html: html(),
	svelte: svelte(),
	json: json(),
	js: javascript(),
}

const escape_html = (str: string) =>
	str.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]!)

const mdsvex_config = {
	highlight: {
		highlighter(code, lang) {
			const highlight = languages[lang!]
			const html = highlight
				? highlight(code)
				: `<pre class="twinkleplop"><code>${escape_html(code)}</code></pre>`
			return `{@html \`${escapeSvelte(html)}\` }`
		},
	},
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
