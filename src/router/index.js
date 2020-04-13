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
import TreeHole from '../views/TreeHole.vue'
import TreeHoleEdit from '../views/TreeHoleEdit.vue'

import Release from  '../views/Release.vue'
import ReleaseTeacher from '../views/ReleaseTeacher.vue'
import ReleaseStudent from '../views/ReleaseStudent.vue'
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
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/find',
    name: 'find',
    component: Find,
  },
  {
    path: '/hole',
    name: 'tree_hole',
    component: TreeHole,
  },
  {
    path: '/hole_edit',
    component: TreeHoleEdit
  },
  {
    path: '/release',
    component: Release,
    children: [
      {
        path: 'teacher',
        name: 'release_teacher',
        component: ReleaseTeacher
      },
      {
        path: 'student',
        name: 'release_student',
        component: ReleaseStudent
      },
      {
        path: '',
        redirect: 'teacher',
      }
    ]
  },
  {
    path:'/home/search',
    name:'search',
    component:Search
  },
  {
    path: '/release',
    name: 'release',
    component: Release,
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine,
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
    // component: Mine
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
    // name:SignUp,
    component:SignUp
  },
  {
    path:'/signup2',
    // name:SignUp2,
    component:SignUp2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
