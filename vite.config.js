import { metaowlConfig } from 'metaowl/vite'

export default async () => {
  return metaowlConfig({
    componentsDir: 'src/components',
    pagesDir: 'src/pages',
    layoutsDir: 'src/layouts'
  })
}
