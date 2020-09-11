<template>
  <div class="container">
    <div class="">
      <marquee><h5 style="color: #2B3777">Thống kê tình hình dịch bệnh nCoV gây ra ở các quốc gia</h5></marquee>

      <div class="row">
        <div class="col-md-4 col-lg-4 col-12">
          <div class="form-group">
            <input type="text" v-model="search" class="form-control" id="search" aria-describedby="emailHelp" placeholder="Tìm kiếm quốc gia">
          </div>
        </div>
        <div class="col-8"></div>
      </div>
      <div class="table-responsive">
        <table class="table">
          <thead class="thead-dark">
          <tr>
            <th scope="col">Quốc gia</th>
            <th scope="col">Ngày</th>
            <th scope="col">Ca nhiễm mới</th>
            <th scope="col">Số ca nhiễm</th>
            <th scope="col">Tử vong</th>
            <th scope="col">Bình phục</th>
            <th scope="col">Mới bình phục</th>
          </tr>
          </thead>
          <tbody>
          <tr v-if="loading">
            <div class="position-relative">
              <img style="width: 200px; height: 200px;position: fixed; top:70%;left: 50%;transform: translate(-50%,-50%)" src="../assets/loading.gif">
            </div>
          </tr>
          <tr v-for="(data, i) in filterCountry" :key="i">
            <th scope="row">{{(data.CountryCode === 'VN') ? 'Việt Nam' :  data.Country}}</th>
            <th>{{data.Date.slice(0,10)}}</th>
            <th class="text-danger text-center">+{{data.NewConfirmed}}</th>
            <td class="text-warning text-center">{{data.TotalConfirmed}}</td>
            <td class="text-danger text-center">{{data.TotalDeaths}}</td>
            <td class="text-success text-center">{{data.TotalRecovered}}</td>
            <td class="text-success text-center">+{{data.NewRecovered}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  var country = 'viet-nam';
  import {RESOURCE} from '../api';
  import axios from 'axios';
    export default {
        name: "HomeComponent",
        data(){
          return{
            country:[],
            time_update:[],
            search: '',
            loading: true,
          }
        },
        mounted(){
          this.getDataCountry();
        },
        computed:{
          filterCountry(){
            if(this.search){
              return this.country
                .filter((item) => {
                  return item.Country.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
                })
            }else{
              return this.country;
            }

          }
        },
        methods:{
          getDataCountry(){
            axios.get(`${RESOURCE}summary`)
              .then(res => {this.country = res.data.Countries})
              .catch(e => {
                console.log(e);
              })
              .finally(() => (this.loading = false));
          },
        }
    }
</script>

<style>
  .max-700{
    max-width: 700px;
  }
  .text-red{
    color:white;
  }
  textarea:focus,
  textarea.form-control:focus,
  input.form-control:focus,
  input[type=text]:focus,
  input[type=password]:focus,
  input[type=email]:focus,
  input[type=number]:focus,
  [type=text].form-control:focus,
  [type=password].form-control:focus,
  [type=email].form-control:focus,
  [type=tel].form-control:focus,
  [contenteditable].form-control:focus {
    box-shadow: inset 0 -1px 0 #ddd;
  }
</style>
