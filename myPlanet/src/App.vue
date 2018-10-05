<template>
  <div id="app">
    <sidebar></sidebar>
    <div class="container">
      <div class="outer">
        <div class="inner">
          <div class="centered">
            <userPlanet class="userPlanet"></userPlanet>
          </div>
        </div>
      </div>
    </div>
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
  #app{
    display:flex;
    flex-direction: column;
  }
  .container {
    width: 70%;
    height: 500px;
    margin: 40px auto;
  }
  .outer {
    display: table;
    width: 100%;
    height: 100%;
  }
  .inner {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  .centered {
    position: relative;
    display: inline-block;
   
    width: 80%;
    padding: 1em;

  }
</style>