<template>
  <div>
      <HeaderComp />
      
      <div class="container izquierda">
        <button class="btn btn-primary" v-on:click="agregar()">Nuevo Cliente</button>
        <br><br>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">DNI/RUC</th>
              <th scope="col">Negocio</th>
              <th scope="col">Telefono</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="customers in Listcustomers" :key="customers._id" v-on:click="editar(customers._id)">
              <td>{{ customers._id }}</td>
              <td>{{ customers.name }}</td>
              <td>{{ customers.lastName }}</td>
              <td>{{ customers.ruc_dni }}</td>
              <td>{{ customers.businessName }}</td>
              <td>{{ customers.phone }}</td>
              <td>{{ customers.email }}</td>
              <td>{{ customers.state }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <FooterComp />
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import axios from 'axios'
export default {
    name: "DashboardView",
    data(){
      return {
        Listcustomers: null,
      }
    },
    components: {
      HeaderComp,
      FooterComp
    },
    methods: {
      editar(id){
        this.$router.push('/editarview/' + id)
      },
      agregar(){
        this.$router.push('/agregarview')
      }
    },
    mounted: function(){
      let direccion = "https://crm-utp.herokuapp.com/api/customers"
      axios.get(direccion).then(data => {
        this.Listcustomers = data.data.customers    
      })
    }
}
</script>

<style scoped>
  .izquierda{
        text-align: left;
    }
</style>