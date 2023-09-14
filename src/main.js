import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import VueMasonry from 'vue-masonry-css'

import '@/plugins/vue-js-modal'

import CommonJs from "./assets/js/common.js";

import VueZoomer from 'vue-zoomer'

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
Vue.use(VueMasonry)
Vue.use(CommonJs)
Vue.use(VueZoomer)
 
const router = new VueRouter({
  // mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

new Vue({
  render: h => h(App),
    router
}).$mount('#app')
