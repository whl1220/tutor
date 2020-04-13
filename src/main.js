import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import {Tabbar, TabbarItem, Tab, Tabs, IndexBar, IndexAnchor, Form, Field, Button, Popup, Picker,
        Cell, CellGroup, Toast} from 'vant'
Vue.use(Tabbar).use(TabbarItem).use(Tab).use(Tabs).use(IndexBar).use(IndexAnchor).use(Form).use(Field).use(Button)
.use(Popup).use(Picker).use(Cell).use(CellGroup).use(Toast)

import './icon/iconfont.css'

import {Tabbar,TabbarItem} from 'vant'
Vue.use(Tabbar).use(TabbarItem)


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
