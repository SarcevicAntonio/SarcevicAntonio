import { describe, expect, test } from 'vitest'
import { GET } from './+server'

describe('atom', () => {
	test('snapshot', async () => {
		expect(
			await (await GET({ url: new URL('https://www.linkplay.space/atom.xml') })).text()
		).toMatchSnapshot()
	})
})
