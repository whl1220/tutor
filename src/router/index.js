import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

import Find from '../views/Find.vue'
import TreeHole from '../views/TreeHole.vue'
import TreeHoleEdit from '../views/TreeHoleEdit.vue'

import Release from  '../views/Release.vue'
import ReleaseTeacher from '../views/ReleaseTeacher.vue'
import ReleaseStudent from '../views/ReleaseStudent.vue'
import Mine from '../views/Mine.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',    
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
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
