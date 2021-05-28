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
  }
}
