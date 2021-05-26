import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import hzqingVueTimeline from 'hzqing-vue-timeline'
import axios from 'axios' //追記
import VueAxios from 'vue-axios' //追記


Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
