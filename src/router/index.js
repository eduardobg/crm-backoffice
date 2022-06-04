import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import EditarView from '../views/EditarClienteView.vue'
import AgregarView from '../views/AgregarClienteView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboardview',
    name: 'DashboardView',
    component: DashboardView
  },
  {
    path: '/editarclienteview/:id',
    name: 'EditarClienteView',
    component: EditarView
  },
  {
    path: '/agregarclienteview',
    name: 'AgregarClienteView',
    component: AgregarView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
