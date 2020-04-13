import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import {Tab, Tabs, IndexBar, IndexAnchor, Form, Field, Button, Picker,Cell, CellGroup,
        Toast, Tabbar,TabbarItem,NavBar,Dialog,Popup,Area,Search,Swipe, SwipeItem,
        DropdownMenu, DropdownItem} from 'vant'
Vue.use(Tab).use(Tabs).use(IndexBar).use(IndexAnchor).use(Form).use(Field).use(Button).use(Picker).use(Cell).use(CellGroup)
.use(Toast).use(Tabbar).use(TabbarItem).use(NavBar).use(Dialog).use(Popup).use(Area).use(Search).use(Swipe).use(SwipeItem)
.use(DropdownMenu).use(DropdownItem);

import './icon/iconfont.css'
import 'vant/lib/index.css';
import '@/assets/css/reset.css';
import '@/assets/js/rem.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
