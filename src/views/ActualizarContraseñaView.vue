<template>
  <div class="home">
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <!-- Icon0 -->
        <div class="fadeIn first">
        <img src="@/assets/logo.png" id="icon" alt="User Icon" />
        </div>
        <!-- Formulario Validacion -->
        <form v-on:submit.prevent="validar" v-if="this.validacion">
          <p class="fadeIn second">Ingresa tu usuario y número de teléfono</p>
          <input type="text" id="usuario" class="fadeIn second" name="usuario" placeholder="Usuario" v-model="usuario" required>
          <input type="text" id="telefono" class="fadeIn third" name="telefono" placeholder="Teléfono" v-model="telefono" required>
          <input type="submit" class="fadeIn fourth" value="Validar identidad">
        </form>
        <!-- Formulario Validacion -->
        <form v-on:submit.prevent="actualizar" v-if="this.actualizacion">
          <p class="fadeIn second">Ingresa tu código de verificación y la nueva contraseña</p>
          <input type="text" id="codigo" class="fadeIn second" name="codigo" placeholder="Código de verificación" v-model="codigo" required>
          <input type="password" id="passwordnew" class="fadeIn third" name="passwordnew" placeholder="Nueva contraseña" v-model="contraseñanew" required>
          <input type="password" id="passwordnew2" class="fadeIn third" name="passwordnew2" placeholder="Repetir contraseña" v-model="contraseñanew2" required>
          <input type="submit" class="fadeIn fourth" value="Cambiar contraseña">
        </form>
        <!-- Volver a login -->
        <div class="alert alert-danger" role="alert" v-if="error">
          <a>{{ mensaje }}</a>
        </div>
        <div id="formFooter">
          <a type="submit" class="underlineHover" v-on:click="salir()" >Regresar al inicio</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ActualizarContraseñaView',
    components: {

    },
    data: function() {
        return {
            usuario: "",
            telefono: "",
            error: false,
            validacion: true,
            actualizacion: false,
            mensaje: "",
            id: "",
            codigo: "",
            codigoverificacion: "",
            contraseñanew: "",
            contraseñanew2: "",
        }
    },
    methods: {
        validar(){
            let json = {
               "email": this.usuario,
               "phone": this.telefono
            };
            this.$http
            .post('/password/first',json)
            .then(data => {
                this.id = data.data.seller._id
                this.mensaje = data.data.msg
                alert(this.mensaje)
                this.validacion = false
                this.actualizacion = true
                this.error = false
                this.codigoverificacion = data.data.code
            })
            .catch(err => {
                const { msg } = err.response.data
                if( msg !== "OK"){
                    this.error = true
                    this.mensaje = msg
                }
            })
        },
        actualizar(){
            if(this.codigo==this.codigoverificacion && this.contraseñanew==this.contraseñanew2){
                this.error = false
                let json = {
                    "password": this.contraseñanew
                }
                this.$http
                .put('/password/change/'+this.id, json)
                .then(data => {
                    this.mensaje = data.data.msg
                    alert(this.mensaje)
                    this.$router.push('/')
                })
            }
            if (this.codigo!=this.codigoverificacion){
                this.error = true
                this.mensaje = "Codigo de verificación incorrecto"
            }else if (this.contraseñanew!=this.contraseñanew2){
                this.error = true
                this.mensaje = "Validación de contraseñas incorrecta"
            }
        },
        salir(){
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
html {
  background-color: #56baed;
}

body {
  font-family: "Poppins", sans-serif;
  height: 100vh;
}

a {
  color: #1D8A6B;
  display:inline-block;
  text-decoration: none;
  font-weight: 400;
}

h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display:inline-block;
  margin: 40px 8px 10px 8px; 
  color: #cccccc;
}

img {
  height: auto;
  width: auto;
  max-height: 200px;
  max-width: 200px;
  margin: 25px 0 25px 0;
}


/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column; 
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  text-align: center;
}

#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}

/* TABS */

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}

/* FORM TYPOGRAPHY*/

input[type=button], input[type=submit], input[type=reset]  {
  background-color: #F4873E;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
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

input[type=text],input[type=password] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
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

/* ANIMATIONS */

/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

.fadeIn {
  opacity:0;
  -webkit-animation:fadeIn ease-in 1;
  -moz-animation:fadeIn ease-in 1;
  animation:fadeIn ease-in 1;

  -webkit-animation-fill-mode:forwards;
  -moz-animation-fill-mode:forwards;
  animation-fill-mode:forwards;

  -webkit-animation-duration:1s;
  -moz-animation-duration:1s;
  animation-duration:1s;
}

.fadeIn.first {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fadeIn.third {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.fadeIn.fourth {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
}

/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #3FB85F;
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover {
  color: #0d0d0d;
}

.underlineHover:hover:after{
  width: 100%;
}

/* OTHERS */

*:focus {
    outline: none;
} 

#icon {
  width:60%;
}

</style>
