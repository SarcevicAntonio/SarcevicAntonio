import domain from '$lib/domain'
import { get_all_tags, get_blog_posts, type BlogMetadata } from '$lib/server/entries'

export const prerender = true

export async function GET() {
	const content = await get_blog_posts(true)
	const tags = await get_all_tags(content)

	return new Response(/*XML*/ get_feed(content, tags), {
		headers: {
			'content-type': 'application/xml',
		},
	})
}
// credit to: https://github.com/importantimport/urara
function get_feed(content: BlogMetadata[], all_tags: string[]): BodyInit | null | undefined {
	return /*XML*/ `
<feed xmlns="http://www.w3.org/2005/Atom">
    <id>${domain}/</id>
    <title><![CDATA[ Antonio Sarcevic ]]></title>
    <subtitle> <![CDATA[ my personal blog ]]> </subtitle>
    <icon>${domain}/favicon.png</icon>
    <link href="${domain}" />
    <link href="${domain}/atom.xml" rel="self" type="application/atom+xml" />
    <updated>${new Date().toJSON()}</updated>
    <author>
        <name> <![CDATA[ Antonio Sarcevic ]]> </name>
    </author>
${all_tags
	.map((tag) => /*XML*/ `    <category term="${tag}" scheme="${domain}/content/${encodeURI(tag)}"/>`)
	.join('\n')}
${content.map(
	(post) => /*XML*/ `    <entry>
        <title type="html"><![CDATA[${post.title}]]></title>
        <link href="${domain}/${post.href}" />
        <id>${domain}/${post.href}</id>
        <published>${new Date(post.published).toJSON()}</published>
        <updated>${new Date(post.updated ?? post.published).toJSON()}</updated>
        ${post.summary ? /*XML*/ `<summary type="html"><![CDATA[${post.summary}]]></summary>` : ''}
        <content type="html">
            <![CDATA[${post.html}]]>
        </content>
    ${post.tags
			?.map(
				(tag) => /*XML*/ `<category term="${tag}" scheme="${domain}/content/${encodeURI(tag)}" />`
			)
			.join('')}
    </entry>`
)}
</feed> `
}
