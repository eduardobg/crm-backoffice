import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ActualizarContraseñaView from '../views/ActualizarContraseñaView.vue'

import DashboardView from '../views/DashboardView.vue'
import EditarClienteView from '../views/EditarClienteView.vue'
import AgregarClienteView from '../views/AgregarClienteView.vue'

import VendedorView from '../views/VendedorView.vue'
import EditarVendedorView from '../views/EditarVendedorView'
import AgregarVendedorView from '../views/AgregarVendedorView.vue'

import PlantillaView from '../views/PlantillaView.vue'
import EditarPlantillaView from '../views/EditarPlantillaView.vue'
import AgregarPlantillaView from '../views/AgregarPlantillaView.vue'

import MensajeView from '../views/MensajeView.vue'
import EnviarMensajePersonalizado from '../views/EnviarMensajePersonalizado.vue'
import EnviarMensajePlantilla from '../views/EnviarMensajePlantilla.vue'
import MensajeGrupoView from '../views/MensajeGrupoView.vue'

import SupervisorView from '../views/SupervisorView.vue'
import EditarSupervisorView from '../views/EditarSupervisorView.vue'
import AgregarSupervisorView from '../views/AgregarSupervisorView.vue'

import CentroDistribucionView from '../views/CentroDistribucionView.vue'
import EditarCentroDistribucionView from '../views/EditarCentroDistribucionView.vue'
import AgregarCentroDistribucionView from '../views/AgregarCentroDistribucionView.vue'

import PerfilView from '../views/PerfilView.vue'

import ConfiguracionView from '../views/ConfiguracionView.vue'
import ListarRolesView from '../views/ListarRolesView.vue'
import ReporteClientesView from '../views/ReporteClientesView.vue'

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
  {
    path: '/mensajeview',
    name: 'MensajeView',
    component: MensajeView
  },
  {
    path: '/enviarmensajepersonalizado',
    name: 'EnviarMensajePersonalizado',
    component: EnviarMensajePersonalizado
  },
  {
    path: '/enviarmensajeplantilla',
    name: 'EnviarMensajePlantilla',
    component: EnviarMensajePlantilla
  },
  {
    path: '/supervisorview',
    name: 'SupervisorView',
    component: SupervisorView
  },
  {
    path: '/editarsupervisorview/:id',
    name: 'EditarSupervisorView',
    component: EditarSupervisorView
  },
  {
    path: '/agregarsupervisorview',
    name: 'AgregarSupervisorView',
    component: AgregarSupervisorView
  },
  {
    path: '/centrodistribucionview',
    name: 'CentroDistribucionView',
    component: CentroDistribucionView
  },
  {
    path: '/editarcentrodistribucionview/:id',
    name: 'EditarCentroDistribucionView',
    component: EditarCentroDistribucionView
  },
  {
    path: '/agregarcentrodistribucionview',
    name: 'AgregarCentroDistribucionView',
    component: AgregarCentroDistribucionView
  },
  {
    path: '/actualizarcontraseñaview',
    name: 'ActualizarContraseñaView',
    component: ActualizarContraseñaView
  },
  {
    path: '/perfilview',
    name: 'PerfilView',
    component: PerfilView
  },
  {
    path: '/listarrolesview',
    name: 'ListarRolesView',
    component: ListarRolesView
  },
  {
    path: '/mensajegrupoview',
    name: 'MensajeGrupoView',
    component: MensajeGrupoView
  },
  {
    path: '/reporteclientesview',
    name: 'ReporteClientesView',
    component: ReporteClientesView
  },
  {
    path: '/configuracionview',
    name: 'ConfiguracionView',
    component: ConfiguracionView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
