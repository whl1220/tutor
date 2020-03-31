import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {Tabbar,TabbarItem,NavBar,Dialog,Popup,Area,Search,Swipe, SwipeItem,DropdownMenu, DropdownItem} from 'vant'
Vue.use(Tabbar).use(TabbarItem).use(NavBar).use(Dialog).use(Popup).use(Area).use(Search).use(Swipe).use(SwipeItem).use(DropdownMenu).use(DropdownItem);

import 'vant/lib/index.css';
import '@/assets/css/reset.css';
import '@/assets/js/rem.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
