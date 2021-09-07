import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ()=>import('../views/contact.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: ()=>import('../views/Portfolio.vue')
  },
  {
    path: '/portfolio/ui',
    name: 'Project',
    component: ()=>import('../views/ui.vue')
  },
  {
    path: '/portfolio/:id',
    name: 'Project',
    component: ()=>import('../views/Project.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
