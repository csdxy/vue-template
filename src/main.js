import Vue from 'vue'
import { Carousel, CarouselItem } from 'element-ui'
import App from './App'
import router from './router'
import store from './store'

import 'common/scss/index.scss'

Vue.use(Carousel)
Vue.use(CarouselItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
