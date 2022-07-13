import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(`@/views/HomeView.vue`)
  },
  {
    path: '/classifier',
    name: 'classifier',
    component: () => import(
      `@/views/ClassifierView.vue`
    )   
  },
  {
    path: '/ocr',
    name: 'ocr',
    component: () => import(
      `@/views/OcrView.vue`
    )   
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(
      `@/views/DashboardView.vue`
    )
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(`@/views/AboutView.vue`)
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
      `@/views/DenyView.vue`
    )
  },
  {
    path: '/500',
    name: 'ServerError',
    component: () => import(
      `@/views/ErrorView.vue`
    )
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
