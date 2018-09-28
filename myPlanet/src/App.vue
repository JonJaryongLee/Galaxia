<template>
  <div id="app">
    
  </div>
</template>

<script>

// bootstrap
  import Vue from 'vue'

  import BootstrapVue from 'bootstrap-vue'
  Vue.use(BootstrapVue);
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'



export default {
  name: 'app',
  
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
