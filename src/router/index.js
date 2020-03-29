import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

import Find from '../views/Find.vue'

import Release from  '../views/Release.vue'

import Mine from '../views/Mine.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/find',
    name: 'find',
    component: Find
  },
  {
    path: '/release',
    name: 'release',
    component: Release
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
