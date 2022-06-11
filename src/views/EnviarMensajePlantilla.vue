<template>
  <div>
    <SidebarMenuAkahon />
    <div class="container">
        <div class="row">
            <h1>Enviar mensaje por plantilla</h1>
        </div>          
        <br>
        <form action="" class="form-horizontal left">
            <div class="row">
                <div class="col-xl-4">
                    <label>ID del vendedor</label> 
                     <input type="text" class="form-control" name="idvendedor" id="idvendedor" placeholder="ej. 62a2dde82ed4f54907c521cc" v-model="form.id_seller">
                </div>
                <div class="col-xl-4">
                    <label>ID del cliente</label> 
                    <input type="text" class="form-control" name="idcliente" id="idcliente" placeholder="ej. 62885b940352c73fe93dc16f" v-model="form.id_customer">
                </div>
                <div class="col-xl-4">
                    <label>Telefono</label> 
                    <input type="text" class="form-control" name="telefono" id="telefono" placeholder="ej. 987987987" v-model="form.receiver_phone">
                </div>                
            </div>
            <hr>
            <div class="row">
                <div class="col-xl-9">
                    <label>ID de la plantilla</label> 
                    <input type="text" class="form-control" name="idplantilla" id="idplantilla" placeholder="ej. 629da819c3ad7232ba72bab0" v-model="plantilla">
                </div>  
            </div>                              
        </form>
        <br>
        <div class="row">
            <div class="col">
                <input type="button" value="Guardar" v-on:click="guardar()">
                <input type="button" value="Salir" v-on:click="salir()">
            </div>             
        </div>
    </div>
  </div>
</template>

<script>
import SidebarMenuAkahon from '@/components/SidebarComp.vue'

export default {
    name: "EnviarMensajePlantilla",
    data(){
        return{
            form:{
                "id_seller": "",
                "id_customer": "",
                "receiver_phone": ""
            },
            "plantilla": ""
        }
    },
    components: {
      SidebarMenuAkahon
    },
    methods: {
        guardar(){
            this.$http
            .post("/campaign/"+this.plantilla,this.form)
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)        
            }) 
            this.$router.push("/mensajeview")
        },
        salir(){
            this.$router.push("/mensajeview")
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
    
    .left{
        text-align: left;
    }
    .row > div{
        background: #ffffff;
        padding: 30px;
        border: 0px;
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

    label {
        text-align: left;
        font-size: 15px;
        font-weight: 600;
        text-transform: uppercase;
        display:inline-block;
        margin: 10px 8px 10px 8px; 
        color: #0B4C3C;
    }

    textarea {
        background-color: #f6f6f6;
        border: none;
        color: #0d0d0d;
        padding: 15px 32px;
        text-align: left;
        font-size: 16px;
        margin: 5px;
        width: 95%;
        max-width: 950px;
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

    textarea:focus{
        background-color: #fff;
        border-bottom: 2px solid #3FB85F;
    }

    textarea:placeholder {
        color: #cccccc;
    }

    input[type=submit], input[type=reset]  {
        background-color: #1D8A6B;
        border: none;
        color: white;
        width: 180px;
        padding-block: 15px;
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

    input[type=submit]:hover, input[type=reset]:hover  {
        background-color: #0B4C3C;
    }

    input[type=submit]:active, input[type=reset]:active  {
        -moz-transform: scale(0.95);
        -webkit-transform: scale(0.95);
        -o-transform: scale(0.95);
        -ms-transform: scale(0.95);
        transform: scale(0.95);
    }

    input[type=button], input[type=reset]  {
        background-color: #F4873E;
        border: none;
        color: white;
        width: 180px;
        padding-block: 15px;
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

    input[type=button]:hover, input[type=reset]:hover  {
        background-color: #c46d34;
    }

    input[type=button]:active, input[type=reset]:active  {
        -moz-transform: scale(0.95);
        -webkit-transform: scale(0.95);
        -o-transform: scale(0.95);
        -ms-transform: scale(0.95);
        transform: scale(0.95);
    }

    input[type=text],input[type=password],input[type=date],select[type=text] {
        background-color: #f6f6f6;
        border: none;
        color: #0d0d0d;
        padding: 15px 32px;
        text-align: left;
        font-size: 16px;
        margin: 5px;
        width: 95%;
        max-width: 750px;
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

    input[type=text]:focus, input[type=password]:focus, input[type=date]:focus, select[type=text]:focus {
        background-color: #fff;
        border-bottom: 2px solid #3FB85F;
    }

    input[type=text]:placeholder, input[type=password]:placeholder, input[type=date]:placeholder, select[type=text]:placeholder {
        color: #cccccc;
    }
</style>