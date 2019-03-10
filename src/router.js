import Vue from 'vue'
import Router from 'vue-router'
import Airquality from './views/Zrzh/Airquality'
import Forecast from './views/Zrzh/Forecast'
import Typhoontrack from './views/Zrzh/Typhoontrack'
import Water from './views/Zrzh/WaterSitu'
import Rain from './views/Zrzh/RainSitu'
import Earthquake from './views/Zrzh/Earthquake'
import Index from './views/Index.vue'
import Zrzh from './views/Zrzh.vue'
import Ggws from './views/Ggws.vue'
import Sgzn from './views/Sgzn.vue'
import Shaq from './views/Shaq.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/zrzh',
      name: '自然灾害',
      component: Zrzh,
      children: [
        {
          path: '/quality',
          name: '空气质量',
          component: Airquality
        },
        {
          path: '/forecast',
          name: '天气预报',
          component: Forecast
        },
        {
          path: '/typhoontrack',
          name: '台风路径',
          component: Typhoontrack
        },
        {
          path: '/water',
          name: '雨情',
          component: Water
        },
        {
          path: '/rain',
          name: '水情',
          component: Rain
        },
        {
          path: '/earthquake',
          name: '地震监测',
          component: Earthquake
        }
      ]
    },
    {
      path: '/ggws',
      name: '公共卫生',
      component: Ggws
    },
    {
      path: '/sgzn',
      name: '事故灾难',
      component: Sgzn
    },
    {
      path: '/shaq',
      name: '社会安全',
      component: Shaq
    }
  ]
})
