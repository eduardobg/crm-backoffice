<template>
  <div>
    <SidebarMenuAkahon /> 
    <div class="container izquierda">
        <div class="row">
          <h1>Reporte - Estado del sistema CRM</h1>
        </div>
        <div class="row">
            <div class="col">
            <h3>Estado de los clientes</h3>
            <div class="ApexChar" id="chart">
              <ApexchartComp type="pie" width="535" :options="chartOptions" :series="series"></ApexchartComp>
            </div>
          </div>
          <div class="col">
            <h3>Mensajes enviados por Sedes</h3>
            <div class="ApexChar" id="chart">
              <ApexchartComp type="bar" height="350" :options="chartOptions1" :series="series1"></ApexchartComp>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h3>Mensajes enviados por vendedor</h3>
            <div class="ApexCharSpecial" id="chart">
              <ApexchartComp type="bar" height="340" :options="chartOptions2" :series="series2"></ApexchartComp>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import SidebarMenuAkahon from '@/components/SidebarComp.vue'
import axios from 'axios'
export default {
    name: "ReporteClientesView",
    data(){
        return{     
            ApiDcenter: 'https://8si8d6ofyh.execute-api.us-east-1.amazonaws.com/dev/api/metrics/message/bars/dcenter/',
            ApiSeller: 'https://8si8d6ofyh.execute-api.us-east-1.amazonaws.com/dev/api/metrics/message/columns/seller/',
            
            series: [],
            chartOptions: {
              chart: {
                width: 535,
                type: 'pie',
              },
              labels: [],
            },

            series1: [{
              data: []
            }], 
            chartOptions1: {
              chart: {
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                  borderRadius: 4,
                  horizontal: true,
                }
              },
              dataLabels: {
                enabled: false
              },
              xaxis: {
                categories: [],
              }
            },

            series2: [{
              data: []
            }],
            chartOptions2: {
              chart: {
                height: 350,
                type: 'bar',
              },
              plotOptions: {
                bar: {
                  columnWidth: '45%',
                  distributed: true,
                }
              },
              dataLabels: {
                enabled: false
              },
              legend: {
                show: false
              },
              xaxis: {
                categories: [],
              }
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
            this.chartOptions = ({
              labels: data.data.label
            })
        })

        axios.get(this.ApiDcenter).then(data => {
            this.series1 = [{
              data: data.data.data
            }] 
            this.chartOptions1 = ({
              xaxis: {
                categories: data.data.categories
              }
            })
        })

        axios.get(this.ApiSeller).then(data => {
            this.series2 = [{
              data: data.data.data
            }] 
            this.chartOptions2 = ({
              xaxis: {
                categories: data.data.categories
              }
            })
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

  h1 {
    text-align: left;
    font-size: 46px;
    font-weight: 600;
    text-transform: uppercase;
    display:inline-block;
    margin: 40px 8px 10px 8px; 
    color: #0B4C3C;
  }

  h3 {
    text-align: left;
    font-size: 26px;
    font-weight: 600;
    margin: 40px 8px 10px 8px; 
    text-transform: uppercase;
    color: #1D8A6B;
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

  .ApexCharSpecial{
    -webkit-border-radius: 10px 10px 10px 10px;
    border-radius: 10px 10px 10px 10px;
    background: #fff;
    text-transform: uppercase;
    padding: 20px;
    max-width: 1530px;
    min-width: 520px;
    position: relative;
    margin: auto;
    margin-top: 25px;
    -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
    text-align: left;
  }

</style>