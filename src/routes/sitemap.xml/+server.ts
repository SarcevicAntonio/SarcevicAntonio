import { get_blog_posts, type BlogMetadata } from '$lib/server/entries'
import type { RequestHandler } from './$types'

export const prerender = true

export const GET: RequestHandler = async ({ url }) => {
	const content = await get_blog_posts(true)

	return new Response(get_sitemap(content, url.hostname), {
		headers: {
			'content-type': 'application/xml; charset=utf-8',
		},
	})
}

// credit to: https://github.com/importantimport/urara
function get_sitemap(content: BlogMetadata[], domain: string): string {
	return /*XML*/ `<?xml version='1.0' encoding='utf-8'?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${domain}</loc>
    </url>
    ${content
			.map(
				(post) => `
        <url>
            <loc>${domain + post.href}</loc>
            <lastmod>${new Date(post.updated ?? post.published).toISOString()}</lastmod>
            <priority>0.5</priority>
        </url>`
			)
			.join('')}
</urlset>`
}
