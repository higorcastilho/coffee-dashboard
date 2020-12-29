import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'

import './assets/styles/globalStyles.css'

Vue.config.productionTip = false

import VueRouter from 'vue-router'
import router from './routes'

Vue.use(VueRouter)
Vue.config.productionTip = false

Vue.use(new VueSocketIO({
		debug: true,
		connection: 'http://localhost:5000'
	})
)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
