import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import 'simplebar' // 또는 "simplebar '에서 SimpleBar 가져 오기;" 수동으로 사용하려는 경우 
import 'simplebar/dist/simplebar.css'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');