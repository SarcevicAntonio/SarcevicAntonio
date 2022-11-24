import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: (import.meta.env.URARA_SITE_DOMAIN as string) ?? 'sarcevic.dev',
  title: 'Antonio Sarcevic',
  subtitle: 'my personal blog',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    name: 'Antonio Sarcevic',
    avatar: '/assets/pic.png',
    status: '🌻',
    bio: 'Loves to program User Interfaces in Svelte with TypeScript and plain CSS.    '
  },
  themeColor: '#bef264'
}
