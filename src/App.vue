<template>
  <div id="app">
    <div class="header">
      <div class="banner_first image-cover min-h30" style="background-image: url('https://www.ymcashr.org/sites/default/files/styles/prgf_small_banner/public/2020-03/Corona_SmallBanner%20copy.jpg?h=bc1925a2&itok=BVIcpv9s');">
        <div class="top-header container">
          <h2 style="padding-top: 20px" class="my-0 max-700 text-center mx-auto text-red">
            <strong>
              Trang thông tin về dịch viêm đường hô hấp cấp do vius corona gây ra (nCOV)
            </strong>
          </h2>
        </div>
      </div>

      <div class="menu position-relative">
        <div class="container">
          <ul class="d-flex justify-content-between nav-menu" :class="{active_content_menu : isActive}">
            <li><router-link :to="{ name: 'HomeComponent' }">Trang chủ</router-link></li>
            <li><router-link :to="{ name: 'GlobalAnalyst' }">Thống kê toàn cầu </router-link></li>
            <li><router-link :to="{ name: 'Prevention' }">Phòng chống</router-link></li>
<!--            <li><router-link :to="{ name: 'news' }">Tin tức</router-link></li>-->
            <li><router-link :to="{ name: 'HealtheDclaration' }">Khai báo y tế</router-link></li>
            <i @click="closeMenu" class="pe-7s-close"></i>
          </ul>
        </div>
        <div @click="openMenu" class="menu-icon">
          <span class="line-1"></span>
          <span class="line-2"></span>
          <span class="line-3"></span>
        </div>

      </div>
    </div>
    <router-view/>
    <div style="color: gray" class="footer container">
      <p>Created by Vuong &copy; 2020 - API support
        <a target="_blank" href="https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#27454960-ea1c-4b91-a0b6-0468bb4e6712">here</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:() => {
    return{
      isActive:false,
      unActive:false,
    }
  },
  methods:{
    openMenu(){
      this.isActive = true;
    },
    closeMenu(){
      this.isActive = false;
    }
  },
  watch:{
    '$route'(){
      this.isActive = false;
    }
  }
}
</script>
<style>
  .nav-menu{
    list-style: none;
    margin: 0;


  }
  .min-h30{
    min-height: 30vh;
  }
  .menu{
    min-height: 50px;
    background-color: #2B3777;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .nav-menu li{
    text-transform: uppercase;
    font-size: 16px;
    /*color: #fff!important;*/
  }
  .nav-menu li a{
    text-decoration: none;
    color: #fff!important;
  }
  .router-link-exact-active{
    font-weight: bold;
  }
  .max-700{
    max-width: 700px;
  }
  .image-cover{
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  .menu-icon{
    display: none;
    position: absolute;
    right: 20px;
    top: 0;
    cursor: pointer;
  }
  .line-1{
    width: 30px;
    border-radius: 5px;
    height: 3px;
    margin: 8px 0;
    background-color: #fff;
    display: block;
    transition: all 0.3s ease-in-out;
  }
  .line-2{
    border-radius: 5px;
    height: 3px;
    margin: 8px 0;
    background-color: #fff;
    display: block;
    transition: all 0.3s ease-in-out;
    width: 20px;
    transform: rotate(0);
  }
  .line-3{
    width: 30px;
    border-radius: 5px;
    height: 3px;
    margin: 8px 0;
    background-color: #fff;
    display: block;
    transition: all 0.3s ease-in-out;
  }
  .pe-7s-close{
    font-size: 60px;
    color: white;
    display: none;
    z-index: 9999999999999999;
    position: fixed;
    top:0;
    right: 0;
    cursor: pointer;
  }
  .active-bar line-1{
    transform: rotate(-45deg) translate(0, 11px);
  }
  .active-bar line-2{
    opacity: 0;
  }
  .active-bar line-3{
    transform: rotate(45deg) translate(-4px, -15px);
  }
  .active_content_menu{
    opacity: 1!important;
    visibility: inherit!important;
    width: 100%!important;
  }
  .active_content_menu .pe-7s-close{
    display: block!important;
  }
  /*@import "./assets/style.css";*/
  @media (max-width: 1199.98px) {  }
  @media (max-width: 991.98px) {
    .menu-icon{
      top:50%;
      transform: translateY(-50%);
      display: block;

    }
    .nav-menu{
      transition: all 0.3s ease-in-out;
      opacity: 0;
      visibility: hidden;
      padding: 200px 0;
      align-items: center;
      position: fixed;
      top:0;
      left: 0;
      bottom: 0;
      right: 0;
      background: linear-gradient(#667eea,#764ba2);
      display: flex;
      flex-direction: column;
      z-index: 9999999999;
      width: 0;
      height: 100%;
      /*visibility: hidden!important;*/
    }
    .nav-menu li{
      line-height: 10px!important;
    }
  }
  @media (max-width: 767.98px) {
    .text-red{
      font-size: 30px!important;
    }

  }
  @media (max-width: 575.98px) {
    .min-h30{
      min-height: 15vh;
    }
    .text-red{
      font-size: 20px!important;
    }
  }

</style>
