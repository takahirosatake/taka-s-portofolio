module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/portfolio/'
  : '/',
  css:{ 
    loaderOptions:{
        scss:{
          additionalData: '@import "@/assets/scss/main.scss";' 
        }
    },
  }
}
