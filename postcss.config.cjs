const autoprefixer = require('autoprefixer')
const postcssPresetEnv = require('postcss-preset-env')

const config = {
	plugins: [autoprefixer, postcssPresetEnv()],
}

module.exports = config
