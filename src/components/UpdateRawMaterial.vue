<template>
  <b-container>
    <b-row>
      <b-col cols = "7" class="title">
        <h1>Update a raw material</h1>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col class = "subtitle-left">Raw material info:</b-col>
      <b-col class = "subtitle-right">Inventory info:</b-col>
    </b-row>
    <br>
    <br>
    <b-row>
      <b-col cols = "2" class="form">
        Code
      </b-col>
      <b-col cols = "3" class="form">
        <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
      </b-col>
      <b-col cols = "2" class="form">
        Anal.No.
      </b-col>
      <b-col cols = "3" class="form">
         <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols = "2" class="form">
        Supplier
      </b-col>
      <b-col cols = "3" class="form">
        <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
      </b-col>
      <b-col cols = "2" class="form">
        Batch No.
      </b-col>
      <b-col cols = "3" class="form">
         <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols = "2" class="form">
        Price per Kg
      </b-col>
      <b-col cols = "3" class="form">
        <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
      </b-col>
      <b-col cols = "2" class="form">
        Ammount received
      </b-col>
      <b-col cols = "3" class="form">
         <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols = "2" class="form">
        Trade name
      </b-col>
      <b-col cols = "3" class="form">
        <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
      </b-col>
      <b-col cols = "2" class="form">
        Date received
      </b-col>
      <b-col cols = "3" class="form">
         <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols = "2" class="form">
        INCI names
      </b-col>
      <b-col cols = "3" class="form">
        <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
      </b-col>
      <b-col cols = "2" class="form">
        Notes
      </b-col>
      <b-col cols = "3" class="form">
         <b-form-textarea
         id="textarea"
         v-model="text"
         placeholder="Enter something..."
         rows="3"
         max-rows="6"
        ></b-form-textarea>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols = "1" class="button left">
                <router-link to="/AddRawMaterial" tag="button" class="update"> Update </router-link>
      </b-col>
      <b-col cols = "1" class="button right">
                <router-link to="/RawMaterial" tag="button" class="cancel">Cancel</router-link>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data () {
    return {
      text: ''
    }
  }
}
</script>
<style scoped>
    .title{
        text-align: left;
        margin-top: 1%;
    }
    .subtitle-left{
      text-align: left;
      padding-left: 205px;
      padding-right: 0%;
    }
    .subtitle-right{
      text-align: left;
      padding-left: 20px;
      padding-right: 0%;
    }
    .search{
        align-items: center;
        margin-bottom: 1.7%;
    }
    .button{
        margin-top:1.7%;
    }
    .left{
      margin-left: 180px;
    }
    .right{
      text-align: left;
    }
</style>
