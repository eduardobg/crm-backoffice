<template>
  <div>
      <SidebarMenuAkahon />
      <div class="container">
          <div class="row">
                <h1>Datos de la plantilla</h1>
          </div>           
          <br>
          <form action="" class="form-horizontal left">
                <div class="row">
                    <div class="col-xl-4">
                        <label>Titulo</label> 
                        <input type="text" class="form-control" name="titulo" id="titulo" v-model="form.title">
                    </div>  
                    <div class="col-xl-4">
                        <label>Prioridad</label> 
                        <select type="text" class="form-control" name="prioridad" id="prioridad" v-model="form.priority" disabled>
                            <option disabled value="">Selecionar prioridad</option>
                            <option v-for="option in options" :key="option.value" v-bind:value="option.value">
                                {{ option.text }}
                            </option>
                        </select>
                    </div>               
                </div>
                <div class="row">
                    <div class="col-xl-9">
                        <label>Mensaje</label> 
                        <textarea class="form-control" name="mensaje" id="mensaje" v-model="form.message"></textarea>
                    </div>               
                </div>
                <hr>
                <div class="row">                    
                    <div class="col-xl-4">
                        <label>Fecha de registro</label> 
                        <input type="date" class="form-control" name="createat" id="createat" v-model="form.createAt" disabled>
                    </div>
                    <div class="col-xl-4">
                        <label>Autor de campaña</label>                    
                        <input type="text" class="form-control" name="autor" id="autor" v-model="form.author" disabled>
                    </div>
                    <div class="col-xl-4">
                        <label>Centro de distribución</label> 
                        <select type="text" class="form-control" name="centrodistribucion" id="centrodistribucion" v-model="form.ddcenter">
                            <option disabled value="">Seleccionar ID</option>
                            <option v-for="distributions in Listdistributions" :key="distributions._id">{{ distributions._id }}</option>
                        </select>
                    </div>
                </div>
            </form>
            <br>
            <div class="row">
                <div class="col">
                    <input type="button" value="Actualizar" v-on:click="editar()">  
                    <input type="submit" value="Eliminar" v-on:click="eliminar()">                
                    <input type="button" value="Salir" v-on:click="salir()">
                </div>             
            </div>
      </div>
  </div>
</template>

<script>
import SidebarMenuAkahon from '@/components/SidebarComp.vue'

export default {
    name: "EditarPlantillaView",
    components: {
      SidebarMenuAkahon
    },
    data: function(){
        return{
            Listdistributions: null,
            Mensaje: null,
            form:{
                "_id": "",
                "title": "",
                "message": "",
                "priority":"",
                "createAt":"",
                "ddcenter": "",
                "author": ""
            },
            options: [
                { text: "Alta", value: "true" },
                { text: "Baja", value: "false" },
            ]
        }
    },
    methods:{
        editar(){
            this.$http
            .put("/templates/" + this.form._id, this.form)
            .then(data => {
                this.Mensaje = data.statusText
                alert(this.Mensaje + ". Plantilla actualizada. Por favor, actualizar la página") 
            })
            .catch(err => {
                this.Mensaje = err.response.data.errors[0].msg
                alert(this.Mensaje)
            })
            this.$router.push("/plantillaview")
        },
        eliminar(){
            this.$http
            .delete("/templates/" + this.form._id)
            .then(data => {
                this.Mensaje = data.statusText
                alert(this.Mensaje + ". Plantilla Eliminada. Por favor, actualizar la página") 
            })
            .catch(err => {
                console.log(err)
            })
            this.$router.push("/plantillaview")
        },
        salir(){
            this.$router.push("/plantillaview")
        }
    },
    mounted: function(){
        this.form._id = this.$route.params.id
        this.$http
        .get("/templates/" + this.form._id)
        .then(datos => {
            this.form.title = datos.data.template.title
            this.form.message = datos.data.template.message
            this.form.priority = datos.data.template.priority
            this.form.createAt = datos.data.template.createAt.substring(0,10)
            this.form.ddcenter = datos.data.template.ddcenter[0]  //corregir con los nuevos cambios
            this.form.author = datos.data.template.author
        })
        .catch(err => {
            console.log(err)
        })

        this.$http
        .get("/distributions").then(data => {
            this.Listdistributions = data.data.distributions
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