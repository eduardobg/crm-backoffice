<template>
    <div>
        <SidebarMenuAkahon />
        <div class="container izquierda">
            <div class="row">
                <h1>Lista de mensajes enviados</h1>
            </div>
            <br>
            <div class="row">
                <div class="col izquierda">
                    <input type="text" placeholder="Buscar vendedores por ID" v-model="SearchId" v-on:keypress.enter="buscar()">
                </div>
                <div class="col especial">
                    <input type="submit" value="Nuevo mensaje personalizado" v-on:click="mensajepersonalizado()">
                    <input type="submit" value="Nuevo mensaje por plantilla" v-on:click="mensajeplantilla()">
                </div>
                <div class="row">
                  <h4>Cantidad de mensajes: {{ this.CantMessage}} </h4>
                </div>
                <div class="container-card">
                  <div class="row row-cols-2">
                    <div class="col-xl-4" v-for="campaignMessages in ListcampaignMessages" :key="campaignMessages._id">             
                      <div class="card">
                        <h3>{{ "ID Mensaje: " + campaignMessages._id }}</h3>
                        <h5>{{ "De: " + nombrevendedor(campaignMessages.id_seller) + NameSeller }}</h5>
                        <h5>{{ "Para: " + nombrecliente(campaignMessages.id_customer) + NameCustomer }}</h5>
                        <p>{{ campaignMessages.message }}</p>
                        <h6>{{ campaignMessages.receiver_phone }}</h6>
                      </div>
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
          NameSeller: "",
          NameCustomer: "",
          ListcampaignMessages: null,
          SearchId: "62a2dde82ed4f54907c521cc",
          CantMessage: null
        }
    },
    components: {
      SidebarMenuAkahon
    },
    methods: {
        mensajepersonalizado(){
          this.$router.push('/enviarmensajepersonalizado')
        },
        mensajeplantilla(){
          this.$router.push('/enviarmensajeplantilla')
        },
        buscar(){
          this.$http
          .get("/campaign/" + this.SearchId).then(data => {
            this.ListcampaignMessages = data.data.campaignMessages
            this.CantMessage = data.data.total
          })
        },
        nombrevendedor(id){
          this.$http.get("/sellers/"+id).then(datos => {   
              this.NameSeller = datos.data.seller.name
          })
          .catch(err => {
              console.log(err)
          }) 
          return ""
        },
        nombrecliente(id){
          this.$http.get("/customers/"+id).then(datos => {   
              this.NameCustomer = datos.data.customer.name
          })
          .catch(err => {
              console.log(err)
          }) 
          return ""
        },
    },
    mounted: function(){
      this.$http
      .get("/campaign/" + this.SearchId).then(data => {
        this.ListcampaignMessages = data.data.campaignMessages
        this.CantMessage = data.data.total
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
    text-transform: uppercase;
    color: #1D8A6B;
  }

  h4 {
    text-align: left;
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    margin-left: 10px;
    margin-bottom: 20px;
    color: #0d0d0d;
  }

  h5 {
    text-align: left;
    font-size: 17px;
    font-weight: 600;
    text-transform: uppercase;
    color: #0d0d0d;
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
    width: 330px;
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