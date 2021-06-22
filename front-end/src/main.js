import Vue from 'vue'
import App from './App.vue'
import VueSweetalert2 from "vue-sweetalert2"
import VueCurrencyInput from "vue-currency-input"
import router from './router'

import 'sweetalert2/dist/sweetalert2.min.css';

Vue.config.productionTip = false
Vue.use(VueSweetalert2)
Vue.use(VueCurrencyInput)

let data = {
  indices: 0,
  quests: 0,
  laptops: 0,
  corsairs: 0,
  user: null,
}

new Vue({
  router,
  data,
  render: h => h(App),
}).$mount('#app')
