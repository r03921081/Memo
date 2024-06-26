import Vue from 'vue'
import App from './App.vue'
import "./assets/styles/app.css";
import "./assets/styles/order.css";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
