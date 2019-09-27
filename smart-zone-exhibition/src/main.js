// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import 'cesium/Widgets/widgets.css'
import VueParticles from 'vue-particles';
import http from 'axios';
// import $ from 'jquery'
// import Carousel3d from 'vue-carousel-3d';
// import BaiduMap from 'vue-baidu-map'

// Vue.use(BaiduMap, {
//   ak: 'HFp7IWyhCAihSWNBn4pZ84D0eGO34FzS'    //这个地方是官方提供的ak密钥
// })
// console.log(BaiduMap);

// Vue.use(Carousel3d);

Vue.config.productionTip = false
Vue.use(VueParticles);

//引入echarts
import echarts from 'echarts'
import 'echarts/map/js/china'
Vue.prototype.$echarts = echarts;

//引入swiper
import swiper from 'swiper'
Vue.prototype.$swiper = swiper;

import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)

Vue.config.productionTip = false;
Vue.prototype.$http = http;

import http1 from './libs/http'
Vue.use(http1)

//防止404
const pages = [
  'index',
  'intelligentProperty',
  'intelligentResource',
  'AdministrativeOffice',
  'financing',
  'leasingSystem',
  'repairSystem',
  'InformationExchange',
  'humanResources',
  'addedService',
  'seeDemo',
  'soonDemo',
  'home',
  'carPark',
  'map'
]
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
      document.title = to.meta.title;
    }
    if(pages.indexOf(to.name) == -1) {
      next({
        name:'index'
      })
    } else {
      next();
    }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
