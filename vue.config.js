const path = require('path')
const ScriptExtWebpackPlugin = require('script-ext-html-webpack-plugin')
const PrerenderSpaPlugin = require('prerender-spa-plugin')

module.exports = {
  parallel: true,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/styles/globals.scss";`,
      },
    },
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV !== 'production') return

    config
      .plugin('script-ext')
      .use(ScriptExtWebpackPlugin, [
        {
          sync: 'app.js',
          defaultAttribute: 'defer',
        },
      ])
      .after('html')
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') return

    return {
      plugins: [
        new PrerenderSpaPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: [
            '/',
            '/projects',
            '/projects/cg-port-con',
            '/projects/cogni',
            '/projects/kadenze',
            '/projects/photography',
            '/projects/tireget',
            '/projects/mtiid',
            '/projects/calarts-dae17',
            '/projects/kadenze-blog',
            '/projects/digital-reflections',
            '/projects/censored',
            '/projects/calarts-dae16',
            '/projects/aries-music',
          ],
          renderer: new PrerenderSpaPlugin.PuppeteerRenderer(),
        }),
      ],
    }
  },
}
