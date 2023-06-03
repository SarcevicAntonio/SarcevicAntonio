import { get_all_tags, get_blog_posts, type BlogMetadata } from '$lib/posts'

export async function GET() {
	const content = await get_blog_posts(true)
	const tags = await get_all_tags(content)

	return new Response(/*XML*/ get_feed(content, tags), {
		headers: {
			'content-type': 'application/atom+xml; charset=utf-8',
		},
	})
}
// based of https://github.com/importantimport/urara
function get_feed(content: BlogMetadata[], all_tags: string[]): BodyInit | null | undefined {
	return /*XML*/ `
<feed xmlns="http://www.w3.org/2005/Atom">
	<id>https://sarcevic.dev/</id>
	<title><![CDATA[ Antonio Sarcevic ]]></title>
	<subtitle> <![CDATA[ my personal blog ]]> </subtitle>
	<icon>https://sarcevic.dev/favicon.png</icon>
	<link href="https://sarcevic.dev" />
	<link href="https://sarcevic.dev/atom.xml" rel="self" type="application/atom+xml" />
	<updated>${new Date().toJSON()}</updated>
	<author>
		<name> <![CDATA[ Antonio Sarcevic ]]> </name>
	</author>
${all_tags
	.map(
		(tag) => /*XML*/ `
	<category term="${tag}" scheme="https://sarcevic.dev/?tags=${encodeURI(tag)}"/>`
	)
	.join('')}
${content.map(
	(post) => /*XML*/ `\n  <entry>
	<title type="html"><![CDATA[${post.title}]]></title>
	<link href="https://sarcevic.dev/${post.href}" />
	<id>https://sarcevic.dev/${post.href}</id>
	<published>${new Date(post.published).toJSON()}</published>
	<updated>${new Date(post.updated ?? post.published).toJSON()}</updated>${
		post.summary ? `\n    <summary type="html"><![CDATA[${post.summary}]]></summary>` : ''
	}
	<content type="html">
	  <![CDATA[${post.html}]]>
	</content>${post.tags
		?.map(
			(tag) =>
				`\n    <category term="${tag}" scheme="http://sarcevic.dev/?tags=${encodeURI(tag)}" />`
		)
		.join('')}
 </entry>`
)}
</feed> `
}