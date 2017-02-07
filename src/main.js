import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)
import routes from './routes'

const router = new VueRouter({
	routes
})

new Vue({
  el: '#app',
  router:router
})
