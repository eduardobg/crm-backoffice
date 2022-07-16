<template>
  <div>
    <SidebarMenuAkahon />
    <div class="container">
        <div class="row">
            <h1>Registrar datos del centro de distribución</h1>
        </div>           
        <br>
        <form action="" class="form-horizontal left">
            <div class="row">
                <div class="col-xl-4">
                    <label>Nombre</label> 
                    <input type="text" class="form-control" name="nombre" id="nombre" placeholder="ej. centro" v-model="form.name">
                </div>
                <div class="col-xl-4">
                    <label>Direccion</label> 
                    <input type="text" class="form-control" name="direccion" id="direccion" placeholder="ej. Av Tacna 123" v-model="form.address">
                </div>                                
            </div>
            <hr>                
            <div class="row">
                <div class="col-xl-4">
                    <label>Distrito</label> 
                    <input type="text" class="form-control" name="distrito" id="distrito" placeholder="ej. SJL" v-model="form.district" >
                </div>
                <div class="col-xl-4">
                    <label>Provincia</label>  
                    <input type="text" class="form-control" name="provincia" id="provincia" placeholder="ej. Lima" v-model="form.province" >
                </div>
                <div class="col-xl-4">
                    <label>Departamento</label> 
                    <input type="text" class="form-control" name="departamento" id="departamento" placeholder="ej. Lima" v-model="form.department">
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
    name: 'AgregarCentroDistribucionView',
    components: {
      SidebarMenuAkahon
    },
    data: function(){
        return{
            Mensaje: null,
            form:{
                "name": "",
                "address": "",
                "district": "",
                "province": "",
                "department": "",
                "state": "Activo"
            }
        }
    },
    methods: {
        guardar(){
            this.$http
            .post("/distributions",this.form)
            .then(data => {
                this.Mensaje = data.statusText
                alert(this.Mensaje + ". Centro de distribución registrado. Por favor, actualizar la página")
            })
            .catch(err => {
                this.Mensaje = err.response.data.errors[0].msg
                alert(this.Mensaje)          
            }) 
            this.$router.push("/centrodistribucionview")
        },
        salir(){
            this.$router.push("/centrodistribucionview")
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