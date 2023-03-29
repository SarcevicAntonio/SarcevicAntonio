// sveltekit config type
import type { Config } from '@sveltejs/kit'
// svelte adapter
import adapter from '@sveltejs/adapter-vercel'
// svelte preprocessor
import { mdsvex } from 'mdsvex'
import preprocess from 'svelte-preprocess'
import mdsvexConfig from './mdsvex.config.js'

const defineConfig = (config: Config) => config

export default defineConfig({
  extensions: ['.svelte', ...(mdsvexConfig.extensions as string[])],
  preprocess: [mdsvex(mdsvexConfig), preprocess()],
  kit: {
    adapter: adapter({
      runtime: 'edge'
    }),
    // Object.keys(process.env).some(key => ['VERCEL', 'CF_PAGES', 'NETLIFY'].includes(key))
    //   ? adapterAuto()
    //   : process.env.ADAPTER === 'node'
    //   ? adapterNode({ out: 'build' })
    //   : adapterStatic({
    //       pages: 'build',
    //       assets: 'build',
    //       fallback: undefined
    //     }),
    trailingSlash:
      !Object.keys(process.env).some(key => ['VERCEL', 'CF_PAGES', 'NETLIFY'].includes(key)) && process.env.ADAPTER !== 'node'
        ? 'always'
        : undefined,
    prerender: {
      handleMissingId: 'warn'
    },
    csp: { mode: 'auto' },
    files: {
      serviceWorker: 'src/sw'
    },
    serviceWorker: {
      register: false
    }
  },
  vitePlugin: {
    experimental: {
      inspector: {
        holdMode: true
      }
    }
  }
})
