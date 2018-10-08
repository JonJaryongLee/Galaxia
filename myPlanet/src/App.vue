<template>
  <div id="app">
    <sidebar></sidebar>
    <userPlanet></userPlanet>
  </div>
</template>

<script>


  import Vue from 'vue'
  // bootstrap
  import BootstrapVue from 'bootstrap-vue'
  Vue.use(BootstrapVue);
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  //vuesax
  import Vuesax from 'vuesax'
  import 'vuesax/dist/vuesax.css' //Vuesax styles
  Vue.use(Vuesax);
  import 'material-icons/iconfont/material-icons.css'
  //vuetify
  import Vuetify from 'vuetify'
  Vue.use(Vuetify, {
    iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
  });
  import 'vuetify/dist/vuetify.min.css'
  import 'material-design-icons-iconfont/dist/material-design-icons.css'
  import '@mdi/font/css/materialdesignicons.css'

  //child components
  import sidebar from'./components/Sidebar.vue'
  import userPlanet from './components/UserPlanet.vue'

export default {
  name: 'app',
  components: {
    sidebar:sidebar,
    userPlanet:userPlanet
  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>