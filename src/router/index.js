import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

  const routes = [
    { path: '/', redirect: '/home' },
  {
    path: '/home', name: 'Home', component: Home, 
    meta: { title: '资产管理', isMenu: true }
  },
  {
    path: '/plan', name: 'Plan', component: () => import('../views/me.vue'),
    meta: { title: '代办事项', isMenu: true }
  },
  {
    path: '/me', name: 'Me', component: () => import('../views/me.vue'),
    meta: { title: '我的', isMenu: true }
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
