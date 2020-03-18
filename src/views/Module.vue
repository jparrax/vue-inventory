<template>
  <b-container fluid>
      <Header/>
    <b-row>
      <b-col cols="3" class="my-container"><NavBar/></b-col>
      <b-col cols="9" class="my-container"><router-view/></b-col>
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
</style>
