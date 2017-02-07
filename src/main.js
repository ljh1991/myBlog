import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueGesture from 'vue-gesture'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueGesture)
import routes from './routes'

const router = new VueRouter({
	routes
})

new Vue({
  el: '#app',
  router:router
})
