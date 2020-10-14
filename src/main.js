import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRoute from 'vue-router'
import { routes } from './router/index'
import { store} from './store'
import Vuetify from 'vuetify/lib'

Vue.config.productionTip = false

Vue.use(VueRoute)
Vue.use(Vuetify)
 

const router = new VueRoute({
  routes,
  mode:'history'
})

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')

