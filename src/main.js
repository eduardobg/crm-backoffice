import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueApexCharts from 'vue-apexcharts'

Vue.config.productionTip = false
Vue.prototype.$http = axios
axios.defaults.baseURL = 'https://crm-utp.herokuapp.com/api'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)
Vue.use(VueApexCharts)

Vue.component('ApexchartComp', VueApexCharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
