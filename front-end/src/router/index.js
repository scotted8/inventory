import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Create from '../views/Create.vue'
import Edit from '../views/edit.vue'
import DemoKits from '../views/demokits.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/edit:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/demokits',
    name: 'Demo Kits',
    component: DemoKits,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
