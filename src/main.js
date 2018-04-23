import Vue from 'vue'
import { Carousel, CarouselItem } from 'element-ui'
import App from './App'
import router from './router'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css'
import 'common/scss/index.scss'
import 'common/scss/element-reset.scss'

Vue.config.productionTip = false
Vue.use(Carousel)
Vue.use(CarouselItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
