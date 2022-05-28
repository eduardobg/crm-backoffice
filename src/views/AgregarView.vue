<template>
  <div>
      <SidebarMenuAkahon />
        <div class="container">
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
                        <input type="text" class="form-control" name="createat" id="createat" v-model="form.createAt">
                    </div>
                    <div class="col-xl-4">
                        <label>Email</label> 
                        <input type="text" class="form-control" name="email" id="email" v-model="form.email">
                    </div>
                    <div class="col-xl-4">
                        <label>Vendedor asignado</label> 
                        <input type="text" class="form-control" name="vendedor" id="vendedor" v-model="form.seller[0]._id">
                    </div>
                </div>
            </form>
            <br>
                <div class="form-group">
                    <button type="button" class="btn btn-primary" v-on:click="guardar()">Guardar</button>
                    <button type="button" class="btn btn-dark margen" v-on:click="salir()">Salir</button>
                </div>
        </div>
  </div>
</template>

<script>
import SidebarMenuAkahon from '@/components/SidebarComp.vue'

export default {
    name: "AgregarView",
    data: function(){
        return {          
            form:{
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
            }
        }
    },
    components:{
        SidebarMenuAkahon
    },
    methods: {
        guardar(){
            this.$http
            .post("/customers",this.form)
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
    }
}
</script>

<style scoped>
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
</style>