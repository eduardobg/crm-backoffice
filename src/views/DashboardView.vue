<template>
  <div>
      <SidebarMenuAkahon />    
      <div class="container izquierda">
        <div class="row">
          <h1>Lista de clientes plus</h1>
        </div>
        <br>
        <div class="row">
          <div class="col izquierda">
            <input type="text" placeholder="Buscar cliente por DNI" v-model="SearchDNI" v-on:keypress.enter="buscar()">
          </div>
          <div class="col especial">
            <input type="submit" value="Nuevo Cliente" v-on:click="agregar()">
           </div>
        </div>  
        <div class="row">
          <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">DNI/RUC</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Negocio</th>
              <th scope="col">Telefono</th>
              <th scope="col">Email</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="customers in Listcustomers" :key="customers._id" v-on:click="editar(customers._id)">
              <td>{{ customers.ruc_dni }}</td>
              <td>{{ customers.name }}</td>
              <td>{{ customers.lastName }}</td>
              <td>{{ customers.businessName }}</td>
              <td>{{ customers.phone }}</td>
              <td>{{ customers.email }}</td>
              <td>{{ customers.state }}</td>
            </tr>
          </tbody>
          </table>
        </div>   
      </div>
  </div>
</template>

<script>
import SidebarMenuAkahon from '@/components/SidebarComp.vue'
export default {
    name: "DashboardView",
    data(){
      return {
        Listcustomers: null,
        SearchDNI: null,
      }
    },
    components: {
      SidebarMenuAkahon
    },
    methods: {
      editar(id){
        this.$router.push('/editarclienteview/' + id)
      },
      agregar(){
        this.$router.push('/agregarclienteview')
      },
      buscar(){ 
        this.$http
        .get("/customers/dni/"+this.SearchDNI)
        .then(datos => {   
            this.id = datos.data.customer._id
            this.$router.push('/editarclienteview/'+this.id)
        })
        .catch(err => {
            console.log(err)
        })      
      }
    },
    mounted: function(){
      this.$http
      .get("/customers").then(data => {
        this.Listcustomers = data.data.customers    
      })
    }
}
</script>

<style scoped>

  .container{
    width: 100%;
    max-width: 1550px;
    margin: auto;
  }

  @media screen and (max-width: 800px) {
       table {
           width:100%;
           max-width: 650px;
           margin: auto;
       }
       thead {
           display: none;
       }
       tr:nth-of-type(2n) {
           background-color: inherit;
       }
       tr td:first-child {
           background: #f0f0f0;
           font-weight:bold;
           font-size:1.3em;
       }
       tbody td {
           display: block;
           text-align:center;
       }
       tbody td:before {
           content: attr(data-th);
           display: block;
           text-align:center;
       }
       .col .especial {
         text-align: left;
       }
       
  }

  .izquierda{
    text-align: left;
  }

  .especial{
    text-align: right;
  }

  h1 {
    text-align: left;
    font-size: 46px;
    font-weight: 600;
    text-transform: uppercase;
    display:inline-block;
    margin: 40px 8px 10px 8px; 
    color: #0B4C3C;
  }

  input[type=button], input[type=submit], input[type=reset]  {
    background-color: #1D8A6B;
    border: none;
    color: white;
    padding: 15px 40px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 15px;
    border-radius: 5px 5px 5px 5px;
    margin: 5px 20px 40px 20px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {
    background-color: #0B4C3C;
  }

  input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {
    -moz-transform: scale(0.95);
    -webkit-transform: scale(0.95);
    -o-transform: scale(0.95);
    -ms-transform: scale(0.95);
    transform: scale(0.95);
  }

  input[type=text],input[type=password] {
    background-color: #f6f6f6;
    border: none;
    color: #0d0d0d;
    padding: 15px 32px;
    text-align: left;
    font-size: 16px;
    margin: 5px;
    width: 95%;
    max-width: 620px;
    min-width: 380px;
    border: 2px solid #f6f6f6;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
  }

  input[type=text]:focus, input[type=password]:focus {
    background-color: #fff;
    border-bottom: 2px solid #3FB85F;
  }

  input[type=text]:placeholder, input[type=password]:placeholder {
    color: #cccccc;
  }

</style>