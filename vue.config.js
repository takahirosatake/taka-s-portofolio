module.exports = {
  publicPath: '',
  css:{ 
    loaderOptions:{
        scss:{
          additionalData: '@import "@/assets/scss/main.scss";' 
        }
    },
  }
}
