// @ts-ignore Could not find a declaration file for module '@tailwindcss/typography'.
import typography from '@tailwindcss/typography'
// @ts-ignore Could not find a declaration file for module 'daisyui'.
import daisyui from 'daisyui'

export default {
  content: ['./src/**/*.{html,md,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        'light': {
          primary: '#a3e635',
          secondary: '#c084fc',
          accent: '#1FB2A6',
          neutral: '#111827',
          'base-100': '#dcfce7'
        }
      },
      {
        'dark': {
          primary: '#bef264',
          secondary: '#c084fc',
          accent: '#1FB2A6',
          neutral: '#111827',
          'base-100': '#1e0d33'
        }
      },
      // {
      //   'original-light': {
      //     primary: 'hsl(161, 50%, 42%)',
      //     secondary: 'hsl(281, 50%, 42%)',
      //     'base-100': 'hsl(161, 100%, 97%)'
      //   }
      // },
      // {
      //   'original-dark': {
      //     primary: 'hsl(161, 50%, 58%)',
      //     secondary: 'hsl(281, 50%, 58%)',
      //     'base-100': 'hsl(281, 100%, 6%)'
      //   }
      // },
      // 'light',
      // 'dark',
      // 'cupcake',
      // 'bumblebee',
      // 'emerald',
      // 'corporate',
      // 'synthwave',
      // 'retro',
      // 'cyberpunk',
      // 'valentine',
      // 'halloween',
      // 'garden',
      // 'forest',
      // 'aqua',
      // 'lofi',
      // 'pastel',
      // 'fantasy',
      // 'wireframe',
      // 'black',
      // 'luxury',
      // 'dracula',
      // 'cmyk',
      // 'autumn',
      // 'business',
      // 'acid',
      // 'lemonade',
      // 'night',
      // 'coffee',
      // 'winter'
    ],
    darkTheme: 'dark'
  }
}
