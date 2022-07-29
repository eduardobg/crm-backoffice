<template>
  <div>
    <SidebarMenuAkahon /> 
    <div class="container izquierda">
        <div class="row">
            <h1>Mensajes de mi Equipo</h1>
        </div>
        <br>
        <div class="row">
            <div class="col">
                <h3>Sede: {{ this.sede }}</h3>
                <h3>Dirección: {{ this.direccion }}</h3>
            </div>
            <div class="col especial">
                <input type="submit" value="Nuevo Mensaje" v-on:click="mensaje()">
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-3">
              <h4>Supervisor</h4>
                <div class="card">
                  <div class="row">
                    <div class='col-lg-3'>
                      <img src='../assets/img/User.png' />
                    </div>
                    <div class='col-lg-9'>
                      <h6>{{ this.nombreSup + " "+ this.apellidoSup }}</h6>
                      <h6>{{ this.correoSup }}</h6>
                      <h6>{{ this.telefonoSup }}</h6>
                    </div>  
                  </div>
                </div>
              <hr>
              <h4>Vendedores</h4>
              <div v-for="sellers in Listsellers" :key="sellers._id">
                <div class="card">
                    <div class="row">
                      <div class='col-lg-3'>
                        <img src='../assets/img/User.png' />
                      </div>
                      <div class='col-lg-9'>
                        <h6>{{ sellers.name + " "+ sellers.lastName }}</h6>
                        <h6>{{ sellers.email }}</h6>
                        <h6>{{ sellers.phone }}</h6>
                      </div>  
                    </div>
                </div>
              </div>
            </div>
            <div class="col-9">
              <h4>Mensajes</h4>
              <div v-for="messages in Listmessages" :key="messages._id">
                <div class="card">
                    <h3>{{ messages.title }}</h3>
                    <p>{{ messages.message }}</p>
                    <h5>{{ messages.createAt.substring(0,10) }}</h5>
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
    name: "MensajeGrupoView",
    data(){
        return{
            Listsellers: null,
            Listmessages: null,
            "info": null,
            "id": "",
            "sede": "",
            "direccion": "",
            "nombreSup": "",
            "apellidoSup": "",
            "correoSup": "",
            "telefonoSup": ""
        }
    },
    components: {
        SidebarMenuAkahon
    },
    methods:{
        mensaje(){}
    },
    mounted: function(){
        this.info = JSON.parse(sessionStorage.data)
        this.id = this.info._id
        this.$http
        .get("/messages/"+this.id)
        .then(data => {
            console.log(data)
            this.sede = data.data.info.ddcenter.name
            this.direccion = data.data.info.ddcenter.address
            this.nombreSup = data.data.info.supervisor.name 
            this.apellidoSup = data.data.info.supervisor.lastName
            this.correoSup = data.data.info.supervisor.email
            this.telefonoSup = data.data.info.supervisor.phone
            this.Listsellers = data.data.info.sellers
            this.Listmessages = data.data.info.messages
        })
        .catch(err => {
            console.log(err)
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
    margin-bottom: 20px;
  }

  .container-card{
    width: 100%;
    max-width: 1550px;
    margin: auto;
    align-content: center;
  }

  .card {
    border-radius: 10px 10px 10px 10px;
    min-height: 150px;
    font-weight: bold;
    padding: 20px;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    margin-bottom: 20px;
    background: #F7F8F6;
    box-shadow: 0 15px 30px 0 rgb(0 0 0 / 15%);

    display: flex;
    justify-content: center;
    justify-items: center;
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
    text-transform: uppercase;
    color: #1D8A6B;
  }

  h4 {
    text-align: left;
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    margin-left: 10px;
    margin-bottom: 20px;
    color: #0d0d0d;
  }

  p {
    text-align: justify;
    font-size: 17px;
    font-weight: 500;
    color: #0d0d0d;
  }

  h5 {
    text-align: right;
    font-size: 17px;
    font-weight: 600;
    text-transform: uppercase;
  }

  h6 {
    text-align: end;
    font-size: 17px;
    font-weight: 600;
    text-align: center;
  }

  img {
    max-width: 80px;
    margin-bottom: 10px;
    margin-left: 17px;
  }

  input[type=button], input[type=submit], input[type=reset]  {
    background-color: #1D8A6B;
    border: none;
    color: white;
    width: 250px;
    padding-block: 15px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 15px;
    border-radius: 5px 5px 5px 5px;
    margin: 10px 20px 5px 20px;
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
    max-width: 640px;
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