<template>
  <b-container fluid>
      <!-- <Header/> -->
    <b-row>
      <b-col cols="2" class="my-container"><NavBar/></b-col>
      <b-col cols="10" class="my-container scrollable"><router-view/></b-col>
    </b-row>
  </b-container>
</template>
<script>
// import Header from '../components/Header.vue'
import NavBar from '@/components/NavBar.vue'
// import { bus } from '../main.js'
export default {
  components: {
    // Header,
    NavBar
  }
}
</script>
<style>
  .my-container{
    padding-left: 0%;
    padding-right: 0%;
  }
  .scrollable{
    height: 560px;
    overflow: auto;
  }
  .update{
        background-color: #90CAF9;
  }
  .cancel{
    background-color: #f48fb1;
    margin: 0.3%;
  }
  .discard{
    background-color: #DC3545;
    margin: 0.3%;
  }
</style>
