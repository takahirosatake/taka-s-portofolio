const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/'
  : '',
  outputDir: 'docs',
  css:{ 
    loaderOptions:{
        scss:{additionalData: '@import "@/assets/scss/main.scss";' 
      }
    },
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return;
    return {
      plugins: [
        new PrerenderSPAPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          [ '/'],
          {
            // options
          }
        ),
      ]
    }
  }
}
