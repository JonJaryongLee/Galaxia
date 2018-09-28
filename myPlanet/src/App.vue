<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col>
          <CottonCandyTree></CottonCandyTree>
          <Planet></Planet>
        </b-col>
        <b-col>
          <Nav></Nav>
        </b-col>
      </b-row> 
    </b-container>
  </div>
</template>

<script>

// bootstrap
  import Vue from 'vue'

  import BootstrapVue from 'bootstrap-vue'
  Vue.use(BootstrapVue);
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  import CottonCandyTree from './components/CottonCandyTree.vue'
  import Nav from './components/Nav.vue'
  import Planet from './components/Planet.vue'


export default {
  name: 'app',
  components: {
    'CottonCandyTree': CottonCandyTree,
    'Nav': Nav,
    'Planet': Planet
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
