import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

import Find from '../views/Find.vue'

import Release from  '../views/Release.vue'

import Mine from '../views/Mine.vue'

import Login from '../views/Login.vue'

import Issue from '../views/Issue.vue'

import Collent from '../views/Collent.vue'

import Appoint from '../views/Appoint.vue'

import History from '../views/History.vue'

import Apply from '../views/Apply.vue'

import Details from '../views/Details.vue'

import Message from '../views/Message.vue'

import Set from '../views/Set.vue'

import Personal from '../views/Personal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { 
      showFooter: true
     }
  },
  {
    path: '/home',
    redirect: '/',meta: { 
      showFooter: true
     }
  },
  {
    path: '/find',
    name: 'find',
    component: Find,
    meta: { 
      showFooter: true
     }
  },
  {
    path: '/release',
    name: 'release',
    component: Release,
    meta: { 
      showFooter: true
     }
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine,
    meta: { 
      showFooter: true
     }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/issue',
    name: 'issue',
    component: Issue
  },
  {
    path: '/collent',
    name: 'collent',
    component: Collent
  },
  {
    path: '/appoint',
    name: 'appoint',
    component: Appoint
  },
  {
    path: '/history',
    name: 'history',
    component: History
  },
  {
    path: '/apply',
    name: 'apply',
    component: Apply
  },
  {
    path: '/details',
    name: 'details',
    component: Details
  },
  {
    path: '/message',
    name: 'message',
    component: Message
  },
  {
    path: '/set',
    name: 'set',
    component: Set
  },
  {
    path: '/personal',
    name: 'personal',
    component: Personal
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
