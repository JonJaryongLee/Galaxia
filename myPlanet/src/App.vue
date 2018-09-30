<template>
  <div id="app">
    <sidebar></sidebar>
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
  import 'material-icons/iconfont/material-icons.css';

  //child components
  import sidebar from'./components/Sidebar.vue'

export default {
  name: 'app',
  components: {
    sidebar:sidebar
  },
  data () {
    return {
    }
  }
}
</script>

<style>
  #app{
    display:flex;
    flex-direction: column;
    box-sizing:border-box;
  }
</style>