<template>
  <b-container fluid>
      <Header/>
    <b-row>
      <b-col cols="2" class="my-container"><NavBar/></b-col>
      <b-col cols="10" class="my-container scrollable"><router-view/></b-col>
    </b-row>
  </b-container>
</template>
<script>
import Header from '../components/Header.vue'
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    Header,
    NavBar
  }
}
</script>
<style scoped>
  .my-container{
    padding-left: 0%;
    padding-right: 0%;
  }
  .scrollable{
    height: 560px;
    overflow: auto;
  }
</style>
