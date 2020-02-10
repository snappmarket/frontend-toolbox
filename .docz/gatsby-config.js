const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Root',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: 'C:\\Users\\Roach\\Desktop\\frontend-toolbox\\.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Root',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Users\\Roach\\Desktop\\frontend-toolbox',
          templates:
            'C:\\Users\\Roach\\Desktop\\frontend-toolbox\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\Users\\Roach\\Desktop\\frontend-toolbox\\.docz',
          cache: 'C:\\Users\\Roach\\Desktop\\frontend-toolbox\\.docz\\.cache',
          app: 'C:\\Users\\Roach\\Desktop\\frontend-toolbox\\.docz\\app',
          appPackageJson:
            'C:\\Users\\Roach\\Desktop\\frontend-toolbox\\package.json',
          gatsbyConfig:
            'C:\\Users\\Roach\\Desktop\\frontend-toolbox\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\Users\\Roach\\Desktop\\frontend-toolbox\\gatsby-browser.js',
          gatsbyNode:
            'C:\\Users\\Roach\\Desktop\\frontend-toolbox\\gatsby-node.js',
          gatsbySSR:
            'C:\\Users\\Roach\\Desktop\\frontend-toolbox\\gatsby-ssr.js',
          importsJs:
            'C:\\Users\\Roach\\Desktop\\frontend-toolbox\\.docz\\app\\imports.js',
          rootJs:
            'C:\\Users\\Roach\\Desktop\\frontend-toolbox\\.docz\\app\\root.jsx',
          indexJs:
            'C:\\Users\\Roach\\Desktop\\frontend-toolbox\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\Users\\Roach\\Desktop\\frontend-toolbox\\.docz\\app\\index.html',
          db:
            'C:\\Users\\Roach\\Desktop\\frontend-toolbox\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
