<template>
  <div>
      <HeaderComp />
        <div class="container">
            Hola desde editar
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
            id: null
        }
    },
    mounted: function(){
        this.id = this.$route.params.id
        axios.get("https://crm-utp.herokuapp.com/api/customers/" + this.id)
        .then(datos => {
            console.log(datos)
        })
        .catch(err => {
            console.log(err)
        })
    }
}
</script>

<style scoped>

</style>