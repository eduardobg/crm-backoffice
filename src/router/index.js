import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import DashboardView from '../views/DashboardView.vue'
import EditarClienteView from '../views/EditarClienteView.vue'
import AgregarClienteView from '../views/AgregarClienteView.vue'

import VendedorView from '../views/VendedorView.vue'
import EditarVendedorView from '../views/EditarVendedorView'
import AgregarVendedorView from '../views/AgregarVendedorView.vue'

import PlantillaView from '../views/PlantillaView.vue'
import EditarPlantillaView from '../views/EditarPlantillaView.vue'
import AgregarPlantillaView from '../views/AgregarPlantillaView.vue'

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
    component: EditarClienteView
  },
  {
    path: '/agregarclienteview',
    name: 'AgregarClienteView',
    component: AgregarClienteView
  },
  {
    path: '/vendedorview',
    name: 'VendedorView',
    component: VendedorView
  },
  {
    path: '/editarvendedorview/:id',
    name: 'EditarVendedorView',
    component: EditarVendedorView
  },
  {
    path: '/agregarvendedorview',
    name: 'AgregarVendedorView',
    component: AgregarVendedorView
  },
  {
    path: '/plantillaview',
    name: 'PlantillaView',
    component: PlantillaView
  },
  {
    path: '/editarplantillaview/:id',
    name: 'EditarPlantillaView',
    component: EditarPlantillaView
  },
  {
    path: '/agregarplantillaview',
    name: 'AgregarPlantillaView',
    component: AgregarPlantillaView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
