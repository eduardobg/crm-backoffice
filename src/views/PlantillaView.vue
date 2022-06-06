<template>
  <div>
      <SidebarMenuAkahon />
      <div class="container izquierda">
        <div class="row">
          <h1>Lista de plantillas</h1>
        </div>
        <br>
        <div class="row">
          <div class="col izquierda">
            <input type="text" placeholder="Buscar plantilla por ID" v-model="SearchId" v-on:keypress.enter="buscar()">
          </div>
          <div class="col especial">
            <input type="submit" value="Nueva plantilla" v-on:click="agregar()">
           </div>
        </div>
        <div class="container-card">
          <div class="row row-cols-2">
            <div class="col-xl-4" v-for="templates in Listtemplates" :key="templates._id" v-on:click="editar(templates._id)">             
              <div class="card">
                <h3>{{ templates.title }}</h3>
                <p>{{ templates.message }}</p>
                <h6>{{templates.createAt.substring(0,10)}}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import SidebarMenuAkahon from '@/components/SidebarComp.vue'
export default {
    name: "PlantillaView",
    data(){
        return{
            Listtemplates: null,
            SearchId: null
        }
    },
    components: {
      SidebarMenuAkahon
    },
    methods: {
      editar(id){
        this.$router.push('/editarplantillaview/' + id)
      },
      agregar(){
        this.$router.push('/agregarplantillaview')
      },
      buscar(){
        this.$router.push('/editarplantillaview/' + this.SearchId)
      }
    },
    mounted: function(){
      this.$http
      .get("/templates").then(data => {
        this.Listtemplates = data.data.templates
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

  .izquierda{
    text-align: left;
  }

  .especial{
    text-align: right;
  }

  .container-card{
    width: 100%;
    max-width: 1550px;
    margin: auto;
    align-content: center;
  }

  @media screen and (max-width: 800px) {
    .row-cols-2 {
      place-content:justify;
    } 
  }
  .card {
    border-radius: 10px 10px 10px 10px;
    min-height: 200px;
    font-weight: bold;
    padding: 20px;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    margin-bottom: 20px;
    
    background: #F7F8F6;
    box-shadow: 0 15px 30px 0 rgb(0 0 0 / 15%);
    
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

  h3 {
    text-align: left;
    font-size: 26px;
    font-weight: 600;
    text-transform: capitalize;
    color: #1D8A6B;
  }

  p {
    text-align: justify;
    font-size: 17px;
    font-weight: 500;
    color: #0d0d0d;
  }

  h6 {
    text-align: end;
    font-size: 17px;
    font-weight: 600;
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
    min-width: 360px;
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