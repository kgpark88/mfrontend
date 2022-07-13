import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(`@/views/Home.vue`)
  },
  {
    path: '/classifier',
    name: 'classifier',
    component: () => import(
      `@/views/Classifier.vue`
    )   
  },
  {
    path: '/ocr',
    name: 'ocr',
    component: () => import(
      `@/views/Ocr.vue`
    )   
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(
      `@/views/Dashboard.vue`
    )
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(`@/views/About.vue`)
  },
  {
    path: '*',
    redirect: {
      path: '/404'
    }
  },  
  {
    path: '/404',
    name: 'NotFound',
    component: () => import(
      `@/views/NotFound.vue`
    )
  },
  {
    path: '/403',
    name: 'AccessDenied',
    component: () => import(
      `@/views/Deny.vue`
    )
  },
  {
    path: '/500',
    name: 'ServerError',
    component: () => import(
      `@/views/Error.vue`
    )
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
