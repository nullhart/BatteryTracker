import Vue from 'vue'
import VueRouter from 'vue-router'
import Dynamic from '../views/Dynamic'
import Home from '../views/Home'
import Settings from '../views/Settings'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    meta: { label: "Battery Tracker" },
    component: Home
  },
  {
    path: '/NewForm',
    name: 'Dynamic',
    meta: { label: "Edit Form" },
    component: Dynamic
  },

  {
    path: '/Settings',
    name: 'Settings',
    meta: { label: "Settings" },
    component: Settings
  },

]

const router = new VueRouter({
  mode: "abstract",
  base: process.env.BASE_URL,
  routes
})
router.replace('/')


export default router
