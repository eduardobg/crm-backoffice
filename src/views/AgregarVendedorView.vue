<template>
  <div>
      <SidebarMenuAkahon />
      <div class="container">
          <div class="row">
                <h1>Registrar datos del vendedor</h1>
          </div>           
          <br>
          <form action="" class="form-horizontal left">
                <div class="row">
                    <div class="col-xl-4">
                        <label>DNI</label> 
                        <input type="text" class="form-control" name="dni" id="dni" placeholder="ej. 75544332" v-model="form.dni">
                    </div>  
                    <div class="col-xl-4">
                        <label>Nombre</label> 
                        <input type="text" class="form-control" name="nombre" id="nombre" placeholder="ej. Jeremy" v-model="form.name">
                    </div>
                    <div class="col-xl-4">
                        <label>Apellido</label> 
                        <input type="text" class="form-control" name="apellido" id="apellido" placeholder="ej. Villafuerte" v-model="form.lastName">
                    </div>              
                </div>
                <hr>
                <div class="row">
                    <div class="col-xl-4">
                        <label>Rol empresarial</label> 
                        <input type="text" class="form-control" name="rol" id="rol" placeholder="ej. vendedor" v-model="form.role">
                    </div>
                    <div class="col-xl-4">
                        <label>Contraseña</label>  
                        <input type="text" class="form-control" name="contraseña" id="contraseña" placeholder="ej. 123456" v-model="form.password">
                    </div>
                    <div class="col-xl-4">
                        <label>Telefono</label> 
                        <input type="text" class="form-control" name="telefono" id="telefono" placeholder="ej. 987876765" v-model="form.phone">
                    </div> 
                </div>               
                <div class="row">                    
                    <div class="col-xl-4">
                        <label>Fecha de registro</label> 
                        <input type="date" class="form-control" name="createat" id="createat" placeholder="ej. 2022-05-23" v-model="form.createAt">
                    </div>
                    <div class="col-xl-4">
                        <label>Email</label> 
                        <input type="text" class="form-control" name="email" id="email" placeholder="ej. usuario@gmail.com" v-model="form.email">
                    </div>
                    <div class="col-xl-4">
                        <label>Supervisor asignado</label>                    
                        <select type="text" class="form-control" name="supervisor" id="supervisor" v-model="form.supervisor">
                            <option disabled value="">Seleccionar ID</option>
                            <option v-for="supervisors in Listsupervisors" :key="supervisors._id">{{ supervisors._id }}</option>
                        </select>
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
    name: "AgregarVendedorView",
    data: function(){
        return{
            Listsupervisors: null,
            form:{
                "dni": "",
                "name": "",
                "lastName": "",
                "password":"",
                "role":"",
                "createAt":"",
                "phone":"",
                "email": "",
                "state": "",
                "supervisor": ""         
            }
        }
    },
    components:{
        SidebarMenuAkahon
    },
    methods: {
        guardar(){
            this.$http
            .post("/sellers",this.form)
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)        
            }) 
            this.$router.push("/vendedorview")
        },
        salir(){
            this.$router.push("/vendedorview")
        },
    },
    mounted: function(){
      this.$http
      .get("/supervisors").then(data => {
        this.Listsupervisors = data.data.supervisors    
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

    .btn {
        margin-left: 20px;
        margin-right: 20px;
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

    input[type=button], input[type=submit], input[type=reset]  {
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

    input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {
        background-color: #c46d34;
    }

    input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {
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