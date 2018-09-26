<template>
  <div id="app">
    <div class="start">
      <transition name="welcomeAppear">
        <div class="welcomePage" v-if="welcomeShow">
          <h1 class="title">My Galaxy</h1>
        </div>
      </transition>
    </div>
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
      welcomeShow: false
    }
  },
  mounted(){
    this.welcomeShow=true;
  }
}
</script>

<style>
  #app{
    display:flex;
    flex-direction: column;
    box-sizing:border-box;
  }
  .start{
    background-image: url("./assets/image/cute_galaxy.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;
    background-attachment: fixed;
    height:789px;
  }
  .welcomePage{
    position: absolute;
    top:30%;
    left:38%;
    width:500px;
    height:400px;
    margin:-50px 0 0 -50px;
    text-align: center;
  }

  .title{
    font-size:5.5rem;
    font-family: 'Space Mono', monospace;
    color: white;
  }

  .welcomeAppear-enter{
    opacity: 0;
  }
  .welcomeAppear-enter-active{
    transition: 2s;
  }
  .welcomeAppear-to{
    opacity: 1;
  }
</style>
