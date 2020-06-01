import Vue from 'vue'
import VueRouter from 'vue-router'
import Dynamic from '../views/Dynamic'
import Home from '../views/Home'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dynamic',
    component: Dynamic
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
