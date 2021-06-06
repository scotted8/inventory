import Vue from 'vue'
import App from './App.vue'
import VueSweetalert2 from "vue-sweetalert2"
import VueCurrencyInput from "vue-currency-input"
import router from './router'

import 'sweetalert2/dist/sweetalert2.min.css';

Vue.config.productionTip = false
Vue.use(VueSweetalert2)
Vue.use(VueCurrencyInput)

import mock from'./mock-data.js'

let data = {
  items: mock,
}

new Vue({
  router,
  data,
  render: h => h(App),
}).$mount('#app')
