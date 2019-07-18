import Vue from 'vue'
import App from './App.vue'

import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css'
Vue.use(Mint);

// vue文件自动去node_modules文件夹寻找
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import axios from 'axios'
Vue.prototype.$http = axios

import router from './assets/js/router.js'

new Vue({
  el: '#app',
	router,
  render: h => h(App),
})
