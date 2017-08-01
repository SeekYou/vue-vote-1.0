// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import normalize from 'normalize.css/normalize.css'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Rem from './assets/js/rem.js'
import normalize from './assets/css/normalize.css';

Vue.prototype.$http = axios
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
