<template>
  <div>
    <SidebarMenuAkahon />
    <div class="container">
        <div class="row">
            <h1>Perfil de usuario</h1>
        </div>           
        <form action="" class="form-horizontal left">
            <div class="row">               
                <div class="col-xl-4">
                    <label>ID</label> 
                    <input type="text" class="form-control" name="id" id="id" v-model="id" disabled>
                </div>   
                <div class="col-xl-4">
                    <label>DNI</label> 
                    <input type="text" class="form-control" name="dni" id="dni" v-model="dni" disabled>
                </div>                                 
            </div>                     
            <div class="row">               
                <div class="col-xl-4">
                    <label>Nombre</label> 
                    <input type="text" class="form-control" name="nombre" id="nombre" v-model="name" disabled>
                </div>
                <div class="col-xl-4">
                    <label>Apellido</label> 
                    <input type="text" class="form-control" name="apellido" id="apellido" v-model="lastName" disabled>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-4">
                    <label>Rol empresarial</label> 
                    <input type="text" class="form-control" name="rol" id="rol" v-model="role" disabled>
                </div>                   
                <div class="col-xl-4">
                    <label>Telefono</label> 
                    <input type="text" class="form-control" name="telefono" id="telefono" v-model="phone" disabled>
                </div>  
                <div class="col-xl-4">
                    <label>Email</label> 
                    <input type="text" class="form-control" name="email" id="email" v-model="email" disabled>
                </div>
            </div>
            <div v-if="usuario">
                <hr>  
                <div class="row">  
                    <div class="col-xl-4">
                        <label>Fecha de registro</label> 
                        <input type="date" class="form-control" name="createat" id="createat" v-model="createAt" disabled>
                    </div> 
                    <div class="col-xl-4">
                        <label>{{(this.role=="vendedor")?'Supervisor':'Centro de distribución'}} asignado</label>                    
                        <input type="text" v-if="inputsupervisor" class="form-control" name="supervisor" id="supervisor" v-model="supervisor" disabled>
                        <input type="text" v-if="inputddcenter" class="form-control" name="ddcenter" id="ddcenter" v-model="ddcenter" disabled>
                    </div>                 
                    <div class="col-xl-4">
                        <label>Estado</label>  
                        <input type="text" class="form-control" name="state" id="state" v-model="state" disabled>
                    </div>
                </div>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
import SidebarMenuAkahon from '@/components/SidebarComp.vue'
export default {
    name: "PerfilView",
    components: {
      SidebarMenuAkahon
    },
    data: function(){
        return{
            //Objeto con los datos
            "info": null,
            //Datos del usuario
            "id": "",
            "dni": "",
            "name": "",
            "lastName": "",
            "role":"",
            "phone":"",
            "email": "",
            "createAt":"",
            "state": "",
            //Validar acorde al rol
            "supervisor": "",
            "ddcenter": "",
            "inputsupervisor": false,
            "inputddcenter": false,
            //Validar usuario
            "usuario": true
        }
    },
    mounted: function(){
        this.info = JSON.parse(sessionStorage.data)
        this.id = this.info._id
        this.dni = this.info.dni
        this.name = this.info.name
        this.lastName = this.info.lastName
        this.role = this.info.role
        this.phone = this.info.phone
        this.email = this.info.email
        this.createAt = this.info.createAt.substring(0,10)
        this.state = this.info.state
        if(this.role=="vendedor"){
            this.supervisor = this.info.supervisor
            this.inputsupervisor = true
        }
        if(this.role=="supervisor"){
            this.ddcenter = this.info.ddcenter
            this.inputddcenter = true
        }
        if(this.role=="manager"){
            this.usuario = false
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
    input[type=text],input[type=password],input[type=date],select[type=text] {
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

    input[type=text]:focus, input[type=password]:focus, input[type=date]:focus, select[type=text]:focus {
        background-color: #fff;
        border-bottom: 2px solid #3FB85F;
    }

    input[type=text]:placeholder, input[type=password]:placeholder, input[type=date]:placeholder, select[type=text]:placeholder {
        color: #cccccc;
    }
</style>