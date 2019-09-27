import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index'
import home from '@/pages/home'
import intelligentResource from '@/pages/intelligentResource'
import intelligentProperty from '@/pages/intelligentProperty'
import AdministrativeOffice from '@/pages/AdministrativeOffice'
import financing from '@/pages/financing'
import leasingSystem from '@/pages/leasingSystem'
import repairSystem from '@/pages/repairSystem'
import InformationExchange from '@/pages/InformationExchange'
import humanResources from '@/pages/humanResources'
import addedService from '@/pages/addedService'
import seeDemo from '@/pages/seeDemo'
import soonDemo from '@/pages/soonDemo'
import map from '@/pages/map'
import carPark from '@/pages/carPark'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        title: '首屏展示'//暂时
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        title: 'home'
      }
    },
    {
      path: '/seeDemo',
      name: 'seeDemo',
      component: seeDemo,
      meta: {
        title: '地球展示'//暂时
      }
    },
    {
      path: '/soonDemo',
      name: 'soonDemo',
      component: soonDemo,
      meta: {
        title: '模型展示'//暂时
      }
    },
    {
      path: '/intelligentResource',
      name: 'intelligentResource',
      component: intelligentResource,
      meta: {
        title: '智慧资源管理平台'//暂时
      }
    },
    {
      path: '/intelligentProperty',
      name: 'intelligentProperty',
      component: intelligentProperty,
      meta: {
        title: '智慧物业管理平台'//暂时
      }
    },
    {
      path: '/AdministrativeOffice',
      name: 'AdministrativeOffice',
      component: AdministrativeOffice,
      meta: {
        title: '行政办公系统展示'//暂时
      }
    },
    {
      path: '/financing',
      name: 'financing',
      component: financing,
      meta: {
        title: '投融资、技术咨询系统展示'//暂时
      }
    },
    {
      path: '/InformationExchange',
      name: 'InformationExchange',
      component: InformationExchange,
      meta: {
        title: '信息交流系统展示'//暂时
      }
    },
    {
      path: '/leasingSystem',
      name: 'leasingSystem',
      component: leasingSystem,
      meta: {
        title: '智能租赁系统展示'//暂时
      }
    },
    {
      path: '/repairSystem',
      name: 'repairSystem',
      component: repairSystem,
      meta: {
        title: '智能报修系统展示'//暂时
      }
    },
		{
      path: '/humanResources',
      name: 'humanResources',
      component: humanResources,
      meta: {
        title: '人力资源系统展示'//暂时
      }
    },
		{
      path: '/map',
      name: 'map',
      component: map,
      meta: {
        title: '地图展示'//暂时
      }
    },
		{
      path: '/addedService',
      name: 'addedService',
      component: addedService,
      meta: {
        title: '增值服务系统展示'//暂时
      }
    },
    {
      path: '/carPark',
      name: 'carPark',
      component: carPark,
      meta: {
        title: '汽车产业园数据运维中心'
      }
    }
  ]
})
