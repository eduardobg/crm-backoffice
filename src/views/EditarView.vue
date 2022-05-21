<template>
  <div>
    <HeaderComp />
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
                        <input type="text" class="form-control" name="createat" id="createat" v-model="form.createAt" disabled>
                    </div>
                    <div class="col-xl-4">
                        <label>Email</label> 
                        <input type="text" class="form-control" name="email" id="email" v-model="form.email" disabled>
                    </div>
                    <div class="col-xl-4">
                        <label>Vendedor asignado</label> 
                        <input type="text" class="form-control" name="vendedor" id="vendedor" v-model="form.seller[0]._id" disabled>
                    </div>
                </div>
            </form>
        </div>
        <br>
        <div class="form-group">
            <button type="button" class="btn btn-primary" v-on:click="editar()">Editar</button>
            <button type="button" class="btn btn-danger margen">Suspender</button>
            <button type="button" class="btn btn-dark margen" v-on:click="salir()">Salir</button>
        </div>
        
    <FooterComp />
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import axios from 'axios'

export default {
    name: "EditarView",
    components: {
      HeaderComp,
      FooterComp
    },
    data: function(){
        return {
            
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
                ]
            }
        }
    },
    methods:{
        editar(){
            axios.put("https://crm-utp.herokuapp.com/api/customers/" + this.form._id, this.form)
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
        },
        salir(){
            this.$router.push("/dashboardview")
        }
    },
    mounted: function(){
        this.form._id = this.$route.params.id
        axios.get("https://crm-utp.herokuapp.com/api/customers/" + this.form._id)
        .then(datos => {
            this.form.name = datos.data.customer.name
            this.form.lastName = datos.data.customer.lastName
            this.form.businessName = datos.data.customer.businessName
            this.form.ruc_dni = datos.data.customer.ruc_dni
            this.form.createAt = datos.data.customer.createAt
            this.form.address = datos.data.customer.address
            this.form.phone = datos.data.customer.phone
            this.form.email = datos.data.customer.email
            this.form.seller[0]._id = datos.data.customer.seller[0]._id
        })
        .catch(err => {
            console.log(err)
        })
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