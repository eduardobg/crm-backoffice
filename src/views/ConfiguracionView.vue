<template>
  <div>
    <SidebarMenuAkahon /> 
    <div class="container izquierda">
        <div class="row">
          <h1>Configuración y reportes</h1>
        </div>
        <div class="row">
            <input type="submit" value="Lista de roles en el sistema" v-on:click="listar()">
            <input type="submit" value="Reporte de estado del cliente" v-on:click="reportcliente()">   
            <input type="submit" value="Reporte de comunicación" v-on:click="reportcomunicacion()">
        </div>
    </div>
  </div>
</template>

<script>
import SidebarMenuAkahon from '@/components/SidebarComp.vue'

export default {
    name: "ConfiguracionView",
    components: {
        SidebarMenuAkahon,
    },
    methods:{
        listar(){
            this.$router.push("/listarrolesview")
        },
        reportcliente(){
            this.$router.push("/reporteclientesview")
        },
        reportcomunicacion(){
            console.log("En proceso...")
        },
    }
}
</script>

<style scoped>

   .container{
    width: 100%;
    max-width: 1550px;
    margin: auto;
  }

  .izquierda{
    text-align: left;
  }

  h1 {
    text-align: left;
    font-size: 46px;
    font-weight: 600;
    text-transform: uppercase;
    display:inline-block;
    margin: 40px 8px 25px 8px; 
    color: #0B4C3C;
  }

  input[type=button], input[type=submit], input[type=reset]  {
    background-color: #1D8A6B;
    border: none;
    color: white;
    padding: 25px 40px;
    text-align: left;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px 5px 5px 5px;
    margin: 20px;
    width: 90%;
    max-width: 1500px;
    min-width: 360px;
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

</style>