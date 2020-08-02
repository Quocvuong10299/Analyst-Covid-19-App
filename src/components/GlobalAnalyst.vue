<template>
    <div class="container">
      <h3>Thống kê trên toàn cầu</h3>
      <table class="table text-center">
        <thead class="thead-dark">
        <tr>
          <th scope="col">Tổng số ca mới nhiễm</th>
          <th scope="col">Tổng số ca nhiễm</th>
          <th scope="col">Tổng số người chết</th>
          <th scope="col">Tổng số người hồi phục</th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="loaded">
          <div class="position-relative">
            <img style="width: 200px; height: 200px;position: fixed; top:50%;left: 50%;transform: translate(-50%,-50%)" src="../assets/loading.gif">
          </div>
        </tr>
        <tr>
          <td v-if="global" class="text-warning">{{(global.NewConfirmed)}}</td>
          <td class="text-danger">{{(global.TotalConfirmed)}}</td>
          <td class="text-danger">{{(global.TotalDeaths)}}</td>
          <td class="text-success">{{(global.TotalRecovered)}}</td>
        </tr>
        </tbody>
      </table>
      <div class="container-fluid">
        <canvas ref="canvas" width="900" height="400"></canvas>
      </div>
    </div>
</template>
<script>

  import { Pie, mixins } from 'vue-chartjs'
  import axios from 'axios'
  import {RESOURCE} from '../api';
  export default {
    mixins: [mixins.reactiveData],
    data() {
      return {
        chartData: [],
        global:[],
        datacollection: {
          //Data to be represented on x-axis
          labels: [
            'Ca vừa nhiễm',
            'Tổng số ca nhiễm',
            'Số người vừa tử vong 24h qua',
            'Tổng số người chết',
            'Vừa bình phục',
            'Tổng số người bình phục'
          ],
          datasets: [{
            label: 'Thống kê trên toàn cầu',
            backgroundColor: [
              'rgb(255, 153, 0)',
              'rgb(255, 204, 0)',
              'rgb(153, 0, 0)',
              'rgba(208, 2, 27, 1)',
              'rgb(77, 153, 0)',
              'rgb(102, 255, 51)',
            ],
            // borderColor:'rgb(75, 192, 192)',
            pointBackgroundColor: 'white',
            borderWidth: 2,
            pointBorderColor: '#249EBF',
            //Data to be represented on y-axis
            data: []
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        },
        loading:false,
        loaded:true,
      }
    },
    extends: Pie,
    mounted() {
      this.fetchData_Global();
      this.fetch_data_chart();
    },
    methods:{
      fetchData_Global(){
      axios.get(`${RESOURCE}summary`)
      .then(res => {this.global = res.data.Global})
      .catch(err => {})},
      async fetch_data_chart(){
        await axios.get(`${RESOURCE}summary`)
          .then(response => {
            const responseData = response.data.Global;
            this.datacollection.datasets[0].data = Object.values(responseData);
            this.loading = true;
          })
          .catch(e => {
            console.log(e);
          })
          .finally(() => (this.loaded = false));
      }
    },
    watch: {
      loading: function() {
        this.renderChart(this.datacollection, this.options);
      }
    }
  }
</script>
<style>
  [v-cloak] {
    display: none;
  }
</style>
