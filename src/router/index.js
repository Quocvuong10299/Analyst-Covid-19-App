import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import HomeComponent from '@/components/HomeComponent';
import GlobalAnalyst from '@/components/GlobalAnalyst';
import Prevention from '@/components/Prevention';
// import news from '@/components/news';
import HealtheDclaration from '@/components/HealtheDclaration';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomeComponent',
      component: HomeComponent
    },
    {
      path: '/thong-ke-toan-cau',
      name: 'GlobalAnalyst',
      component: GlobalAnalyst
    },
    {
      path: '/bien-phap-phong-chong',
      name: 'Prevention',
      component: Prevention
    },
    // {
    //   path: '/tin-tuc',
    //   name: 'news',
    //   component: news
    // },
    {
      path: '/khai-bao-y-te',
      name: 'HealtheDclaration',
      component: HealtheDclaration
    },
  ]
})
