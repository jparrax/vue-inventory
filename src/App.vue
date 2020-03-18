<template>
  <div id="app">
    <Module/>
    <!-- <Login/> -->
  </div>
</template>
<script>
import Module from './views/Module.vue'
// import Login from './views/Login.vue'
export default {
  components: {
    Module
    // Login
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
