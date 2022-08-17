import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'as-light',
    text: '🌻🌕 AS Light'
  },
  {
    name: 'as-dark',
    text: '🌻🌑 AS Dark'
  },
  {
    name: 'original-light',
    text: '🚀🌕 Original Light'
  },
  {
    name: 'original-dark',
    text: '🚀🌑 Original Dark'
  },
  {
    name: 'light',
    text: '🌼🌕 daisyUI Light'
  },
  {
    name: 'dark',
    text: '🌼🌑 daisyUI Dark'
  },
  {
    name: 'cupcake',
    text: '🧁 Cupcake'
  },
  {
    name: 'bumblebee',
    text: '🐝 Bumblebee'
  },
  {
    name: 'emerald',
    text: '✳️ Emerald'
  },
  {
    name: 'corporate',
    text: '🏢 Corporate'
  },
  {
    name: 'valentine',
    text: '🌸 Valentine'
  },
  {
    name: 'synthwave',
    text: '🌃 Synthwave'
  },
  {
    name: 'retro',
    text: '🌇 Retro'
  },
  {
    name: 'cyberpunk',
    text: '🌐 Cyberpunk'
  },
  {
    name: 'halloween',
    text: '🎃 Halloween'
  },
  {
    name: 'garden',
    text: '🏡 Garden'
  },
  {
    name: 'forest',
    text: '🌲 Forest'
  },
  {
    name: 'aqua',
    text: '💦 Aqua'
  },
  {
    name: 'lofi',
    text: '🎶 Lo-Fi'
  },
  {
    name: 'pastel',
    text: '🌈 Pastel'
  },
  {
    name: 'fantasy',
    text: '🐣 Fantasy'
  },
  {
    name: 'wirefream',
    text: '📱 Wireframe'
  },
  {
    name: 'black',
    text: '🖤 Black'
  },
  {
    name: 'luxury',
    text: '💰 Luxury'
  },
  {
    name: 'dracula',
    text: '🧛 Dracula'
  },
  {
    name: 'cmyk',
    text: '🖨️ CMYK'
  },
  {
    name: 'autumn',
    text: '🍂 Autumn'
  },
  {
    name: 'business',
    text: '🗄️ Business'
  },
  {
    name: 'acid',
    text: '🌧️ Acid'
  },
  {
    name: 'lemonade',
    text: '🍋 Lemonade'
  },
  {
    name: 'night',
    text: '🌃 Night'
  },
  {
    name: 'coffee',
    text: '☕ Coffee'
  },
  {
    name: 'winter',
    text: '❄️ Winter'
  }
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  nav: [
    {
      text: 'About Me',
      link: '/about-me'
    },
    {
      text: 'Things I build',
      link: '/things-i-build'
    }
  ]
}

export const footer: FooterConfig = {
  nav: [
    {
      text: 'Feed',
      link: '/atom.xml'
    },
    {
      text: 'Sitemap',
      link: '/sitemap.xml'
    }
  ]
}

export const date: DateConfig = {
  toPublishedString: {
    locales: 'de-DE',
    options: {
      day: 'numeric',
      year: 'numeric',
      month: 'numeric'
    }
  },
  toUpdatedString: {
    locales: 'de-DE',
    options: {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    }
  }
}

export const feed: FeedConfig = {}
