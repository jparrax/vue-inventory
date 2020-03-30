<template>
  <b-container>
    <b-row>
      <b-col cols="7" class="title">
        <h1>Raw Material</h1>
      </b-col>
      <b-col cols="4" class="search">
        <b-input-group prepend="Search" class="mt-3" v-model="search">
          <b-form-input></b-form-input>
        </b-input-group>
      </b-col>
      <b-col cols="1" class="button">
        <router-link to="/AddRawMaterial" tag="button" class="update">Add</router-link>
      </b-col>
    </b-row>
    <b-row>
      <b-table striped hover :items="items" :fields="fields">
        <template v-slot:cell(Actions)>
          <router-link to="/UpdateRawMaterial" tag="button" class="update">Update</router-link>
          <router-link to="/DiscardRawMaterial" tag="button" class="discard">Discard</router-link>
        </template>
      </b-table>
    </b-row>
  </b-container>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      search: '',
      fields: [
        'materialId',
        'Batch No',
        'Anal No',
        'name',
        'inciName',
        'quantity',
        'Actions'
      ],
      items: []
    }
  },
  mounted () {
    axios.get('http://localhost:9000/rawmaterials').then(response => {
        console.log(response);
        
        this.items = response.data.data
    })
  }
}
</script>
<style scoped>
.title {
  text-align: left;
  margin-top: 1%;
}
.search {
  align-items: center;
  margin-bottom: 1.7%;
}
.button {
  margin-top: 1.7%;
}
</style>
