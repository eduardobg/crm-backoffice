<template>
  <div>
    <SidebarMenuAkahon />
        <div class="container">
            <div class="row">
                <h1>Actualizar datos del cliente</h1>
            </div>           
            <br>
            <form action="" class="form-horizontal left">
                <div class="row">
                    <div class="col-xl-4">
                        <label>Nombre</label> 
                        <input type="text" class="form-control" name="nombre" id="nombre" v-model="form.name">
                    </div>
                    <div class="col-xl-4">
                        <label>Apellido</label> 
                        <input type="text" class="form-control" name="apellido" id="apellido" v-model="form.lastName">
                    </div>
                    <div class="col-xl-4">
                        <label>Negocio</label>  
                        <input type="text" class="form-control" name="negocio" id="negocio" v-model="form.businessName">
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-4">
                        <label>RUC / DNI</label> 
                        <input type="text" class="form-control" name="rucdni" id="rucdni" v-model="form.ruc_dni">
                    </div>
                    <div class="col-xl-4">
                        <label>Telefono</label> 
                        <input type="text" class="form-control" name="telefono" id="telefono" v-model="form.phone">
                    </div>
                    <div class="col-xl-4">
                        <label>Direccion</label> 
                        <input type="text" class="form-control" name="direccion" id="direccion" v-model="form.address">
                    </div>
                </div>
                <hr>
                <div class="row">                  
                    <div class="col-xl-4">
                        <label>Fecha de registro</label> 
                        <input type="date" class="form-control" name="createat" id="createat" v-model="form.createAt" disabled>
                    </div>
                    <div class="col-xl-4">
                        <label>Email</label> 
                        <input type="text" class="form-control" name="email" id="email" v-model="form.email" disabled>
                    </div>
                    <div class="col-xl-4">
                        <label>Vendedor asignado</label>                    
                        <select type="text" class="form-control" name="vendedor" id="vendedor" v-model="form.seller[this.indice]._id">
                            <option selected>{{ form.seller[this.indice]._id }}</option>
                            <option v-for="sellers in Listsellers" :key="sellers._id">{{ sellers._id }}</option>
                        </select>
                    </div>
                </div>
            </form>
            <br>
            <div class="row">
                <div class="col">
                    <input type="submit" value="Activar" v-on:click="activar()">
                    <input type="submit" value="Suspender" v-on:click="suspender()">   
                    <input type="button" value="Actualizar" v-on:click="editar()">               
                    <input type="button" value="Salir" v-on:click="salir()">
                </div>             
            </div>
        </div>      
  </div>
</template>

<script>
import SidebarMenuAkahon from '@/components/SidebarComp.vue'

export default {
    name: "EditarClienteView",
    components: {
      SidebarMenuAkahon
    },
    data: function(){
        return {     
            indice: 0,
            Listsellers: null,     
            form:{
                "_id": "",
                "name": "",
                "lastName": "",
                "businessName":"",
                "ruc_dni":"",
                "createAt":"",
                "address":"",
                "phone":"",
                "email": "",
                "seller": [
                    {
                        "_id": ""
                    }
                ],
                "state": ""
            }
        }
    },
    methods:{
        editar(){
            this.$http
            .put("/customers/" + this.form._id, this.form)
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
            this.$router.push("/dashboardview")
        },
        salir(){
            this.$router.push("/dashboardview")
        },
        suspender(){
            this.state = "Suspendido"
            this.$http
            .put("/customers/" + this.form._id + "/" + this.state)
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
            this.$router.push("/dashboardview")
        },
        activar(){                      
            this.state = "Activo"
            this.$http
            .put("/customers/" + this.form._id + "/" + this.state)
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
            this.$router.push("/dashboardview")
        },
    },
    mounted: function(){
        this.form._id = this.$route.params.id
        this.$http
        .get("/customers/" + this.form._id)
        .then(datos => {   
            this.form.name = datos.data.customer.name
            this.form.lastName = datos.data.customer.lastName
            this.form.businessName = datos.data.customer.businessName
            this.form.ruc_dni = datos.data.customer.ruc_dni
            this.form.createAt = datos.data.customer.createAt.substring(0,10)
            this.form.address = datos.data.customer.address
            this.form.phone = datos.data.customer.phone
            this.form.email = datos.data.customer.email
            this.form.seller[this.indice]._id = datos.data.customer.seller[this.indice]._id
            this.form.state = datos.data.customer.state
        })
        .catch(err => {
            console.log(err)
        })

        this.$http
        .get("/sellers").then(data => {
            this.Listsellers = data.data.sellers    
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

    input[type=text],input[type=date],select[type=text] {
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

    input[type=text]:focus, input[type=date]:focus, select[type=text]:focus {
        background-color: #fff;
        border-bottom: 2px solid #3FB85F;
    }

    input[type=text]:placeholder, input[type=date]:placeholder, select[type=text]:placeholder {
        color: #cccccc;
    }
</style>