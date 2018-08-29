const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')

module.exports = {
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
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') return

    return {
      plugins: [
        new PrerenderSpaPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: [
            '/',
            '/projects',
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
