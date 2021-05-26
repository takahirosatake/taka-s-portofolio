module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/taka_portfolio/'
  : '/',
  css:{ 
    loaderOptions:{
        scss:{additionalData: '@import "@/assets/scss/main.scss";' 
      }
    },
  }
}
