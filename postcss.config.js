import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import postcssPresetEnv from 'postcss-preset-env'
import tailwindcss from 'tailwindcss'
import tailwindConfig from './tailwind.config.js'

export default {
  plugins: [
    postcssPresetEnv({ stage: 0 }),
    tailwindcss(tailwindConfig),
    autoprefixer,
    ...(process.env.NODE_ENV === 'production'
      ? [
          cssnano({
            preset: ['default', { discardComments: { removeAll: true } }]
          })
        ]
      : [])
  ]
}
