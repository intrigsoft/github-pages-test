import withMarkdoc from '@markdoc/next.js'

import withSearch from './src/markdoc/search.mjs'
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],
  output: "export",
  basePath: isProd ? '/github-pages-test' : '',
  assetPrefix: isProd ? '/github-pages-test/' : '',
  trailingSlash: true,
}

export default withSearch(
  withMarkdoc({ schemaPath: './src/markdoc' })(nextConfig),
)

