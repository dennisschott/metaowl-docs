const { createPostcssConfig } = require('metaowl/postcss')
const tailwindcss = require('@tailwindcss/postcss')
const autoprefixer = require('autoprefixer')

const config = createPostcssConfig()
config.plugins = [
  tailwindcss(),
  autoprefixer(),
  ...(config.plugins || [])
]

module.exports = config
