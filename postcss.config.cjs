const tailwindcss = require('@tailwindcss/postcss')
const autoprefixer = require('autoprefixer')

// Tailwind v4 handles purging internally via content scanning.
// postcss-purgecss from metaowl's createPostcssConfig() is incompatible with
// Tailwind v4 because its default extractor splits on ":" and removes all
// responsive variants (sm:, md:, lg:, etc.) from the build output.
module.exports = {
  plugins: [
    tailwindcss(),
    autoprefixer(),
  ]
}
