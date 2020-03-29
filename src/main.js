import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {Tabbar,TabbarItem} from 'vant'
Vue.use(Tabbar).use(TabbarItem)

import 'vant/lib/index.css';
import '@/assets/css/reset.css';
import '@/assets/js/rem.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
