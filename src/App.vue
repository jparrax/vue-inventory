<template>
  <div id="app">
    <Header/>
    <Module v-if="isModuleActive"></Module>
    <Login v-if='isLoginActive'></Login>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Module from './views/Module.vue'
import Login from './views/Login.vue'
import { bus } from './main.js'
export default {
  data () {
    return {
      isModuleActive: false,
      isLoginActive: true
    }
  },
  components: {
    Header,
    Module,
    Login
  },
  created () {
    bus.$on('logIn', (data) => {
      this.isModuleActive = true
      this.isLoginActive = false
    })
    bus.$on('logOut', (data) => {
      this.isModuleActive = false
      this.isLoginActive = true
    })
  }
}
</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
