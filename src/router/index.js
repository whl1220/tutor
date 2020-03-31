import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/home/Search.vue'
import TeacherDetails from '../views/home/TeacherDetails.vue'
import ClassDetails from '../views/home/ClassDetails.vue'
import TeacherComment from '../views/home/TeacherComment.vue'
import ClassComment from '../views/home/ClassComment.vue'
import Register from '../views/home/Register.vue'
import SignUp from '../views/home/SignUp.vue'
import SignUp2 from '../views/home/SignUp2.vue'

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
    path:'/home/search',
    name:'search',
    component:Search
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
  },
  {
    path: '/teacherdetails',
    name: 'teacherdetails',
    component: TeacherDetails
  },
  {
    path:'/classdetails',
    name:'classdetails',
    component: ClassDetails
  },
  {
    path:'/teachercomment',
    name:'teachercomment',
    component: TeacherComment
  },
  {
    path:'/classcomment',
    name:'classcomment',
    component: ClassComment
  },
  {
    path:'/register',
    name:Register,
    component:Register
  },
  {
    path:'/signup',
    name:SignUp,
    component:SignUp
  },
  {
    path:'/signup2',
    name:SignUp2,
    component:SignUp2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
