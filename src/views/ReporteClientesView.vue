<template>
  <div>
    <SidebarMenuAkahon /> 
    <div class="container izquierda">
        <div class="row">
          <h1>Reporte - Estado de los clientes</h1>
        </div>
        <div class="ApexChar" id="chart">
          <ApexchartComp type="pie" width="800" :options="chartOptions" :series="series"></ApexchartComp>
        </div>
    </div>
  </div>
</template>

<script>
import SidebarMenuAkahon from '@/components/SidebarComp.vue'

export default {
    name: "ReporteClientesView",
    data(){
        return{            
            series: [],
            chartOptions: {
              chart: {
                width: 800,
                type: 'pie',
              },
            labels: ['Activo','Suspendido'],
            responsive: [{
              breakpoint: 801,
              options: {
                chart: {
                  width: 500
                },
                legend: {
                  position: 'right'
                }
              }
            }]
          },

        }
    },
    components: {
        SidebarMenuAkahon,
    },
    mounted: function(){
        this.$http
        .get("/metrics/customer/pastel/status/").then(data => {
            this.series = data.data.series
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

  @media screen and (max-width: 800px) {
       table {
           width:100%;
           max-width: 650px;
           margin: auto;
       }
       thead {
           display: none;
       }
       tr:nth-of-type(2n) {
           background-color: inherit;
       }
       tr td:first-child {
           background: #f0f0f0;
           font-weight:bold;
           font-size:1.3em;
       }
       tbody td {
           display: block;
           text-align:center;
       }
       tbody td:before {
           content: attr(data-th);
           display: block;
           text-align:center;
       }
       .col .especial {
         text-align: left;
       }
       
  }

  .izquierda{
    text-align: left;
  }

  .especial{
    text-align: right;
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

  .ApexChar{
    -webkit-border-radius: 10px 10px 10px 10px;
    border-radius: 10px 10px 10px 10px;
    background: #fff;
    text-transform: uppercase;
    padding: 20px;
    max-width: 850px;
    min-width: 520px;
    position: relative;
    margin: auto;
    margin-top: 25px;
    -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
    text-align: left;
  }

</style>