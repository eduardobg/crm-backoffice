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
                    <label>DNI del vendedor</label> 
                     <input type="text" name="dnivendedor" id="dnivendedor" placeholder="Buscar vendedor por DNI" v-model="search_seller" v-on:keypress.enter="buscarvendedor()">
                </div> 
                <div class="col-xl-4">
                    <label>Nombre</label> 
                    <input type="text" class="form-control" name="nombre" id="nombre" v-model="nombre" disabled>
                </div>  
                <div class="col-xl-4">
                    <label>Apellido</label> 
                    <input type="text" class="form-control" name="apellido" id="apellido" v-model="apellido" disabled>
                </div>              
            </div>
            <hr>
            <div class="row">
                <div class="col-xl-4">
                    <label>DNI del cliente</label> 
                    <input type="text" name="dnicliente" id="dnicliente" placeholder="Buscar cliente por DNI" v-model="search_customer" v-on:keypress.enter="buscarcliente()">
                </div>
                <div class="col-xl-4">
                    <label>Negocio</label> 
                    <input type="text" class="form-control" name="negocio" id="negocio" v-model="negocio" disabled>
                </div>  
                <div class="col-xl-4">
                    <label>Telefono</label> 
                    <input type="text" class="form-control" name="telefono" id="telefono" v-model="form.receiver_phone" disabled>
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
                <input type="button" value="Enviar" v-on:click="guardar()">
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
            Mensaje: null,
            search_seller: "",
            nombre: "",
            apellido: "",
            search_customer: "",
            negocio: "",
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
                this.Mensaje = data.statusText
                alert(this.Mensaje + ". Mensaje Enviado. Por favor, actualizar la página")
            })
            .catch(err => {
                this.Mensaje = err.response.data.errors[0].msg
                alert(this.Mensaje)        
            }) 
            this.$router.push("/mensajeview")
        },
        salir(){
            this.$router.push("/mensajeview")
        },
        buscarvendedor(){
            this.$http
            .get("/sellers/dni/"+this.search_seller)
            .then(datos => {   
                this.form.id_seller = datos.data.sellerDB._id
                this.nombre = datos.data.sellerDB.name
                this.apellido = datos.data.sellerDB.lastName
            })
            .catch(err => {
                console.log(err)
            })     
        },
        buscarcliente(){
            this.$http
            .get("/customers/dni/"+this.search_customer)
            .then(datos => {                  
                this.form.id_customer = datos.data.customer._id
                this.negocio = datos.data.customer.businessName
                this.form.receiver_phone = datos.data.customer.phone
            })
            .catch(err => {
                console.log(err)
            })      
        }
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