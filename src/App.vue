<template>
  <div id="app">
    <div class="header">
      <div class="top-header">
                <h2 class="max-700 text-center mx-auto text-red">
                    <strong>
                      Trang thông tin về dịch viêm đường hô hấp cấp do vius corona gây ra (nCOV)
                    </strong>
                  </h2>
      </div>
      <div class="menu">
        <div class="container">
          <ul class="d-flex justify-content-between nav-menu">
            <li><router-link :to="{ name: 'HomeComponent' }">Trang chủ</router-link></li>
            <li><router-link :to="{ name: 'GlobalAnalyst' }">Thống kê toàn cầu </router-link></li>
            <li><router-link :to="{ name: 'Prevention' }">Phòng chống</router-link></li>
<!--            <li><router-link :to="{ name: 'news' }">Tin tức</router-link></li>-->
            <li><router-link :to="{ name: 'HealtheDclaration' }">Khai báo y tế</router-link></li>
          </ul>
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
  name: 'App'
}
</script>
<style>
  .nav-menu{
    list-style: none;
    margin: 0;
    min-height: 50px;
    align-items: center;
  }
  .menu{
    background-color: #2B3777;
    width: 100%;
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
    background-size: 100% auto;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
