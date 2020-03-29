<template>
  <b-container>
    <b-row>
      <b-col cols = "7" class="title">
        <h1>Update cosmetic formula</h1>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col class = "subtitle-left">Formula info:</b-col>
      <b-col class = "subtitle-right">Ingredients:</b-col>
    </b-row>
    <br>
    <br>
    <b-row>
      <b-col cols = "2" class="form">
        Name
      </b-col>
      <b-col cols = "3" class="form">
        <b-form-input v-model="name" placeholder="Enter Name"></b-form-input>
      </b-col>
      <b-col cols = "2" class="form">
        Total percentage: 0%
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols = "2" class="form">
        Decription
      </b-col>
      <b-col cols = "3" class="form">
        <b-form-textarea
         id="textarea"
         v-model="description"
         placeholder="Enter Description"
         rows="3"
         max-rows="6"
        ></b-form-textarea>
      </b-col>
      <b-col cols = "5" class="form">
        <b-form-textarea
         id="textarea"
         v-model="percentage"
         placeholder=""
         rows="3"
         max-rows="6"
        ></b-form-textarea>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols = "2" class="form">
        Creator
      </b-col>
      <b-col cols = "3" class="form">
        <b-form-input v-model="creator" class = 'disabled' disabled></b-form-input>
      </b-col>
      <b-col cols = "5" class="button-left">
        <router-link to="/UpdateCosmeticFormula" tag="button" class="update"> Add Ingredients</router-link>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols = "2" class="form">
        Date created
      </b-col>
      <b-col cols = "3" class="form">
        <b-form-input v-model="date_created" class = 'disabled' disabled></b-form-input>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols = "1" class="button left">
                <router-link to="/UpdateCosmeticFormula" tag="button" class="update"> Add </router-link>
      </b-col>
      <b-col cols = "1" class="button right">
                <router-link to="/UpdateCosmeticFormula" tag="button" class="discard">Discard</router-link>
      </b-col>
      <b-col cols = "1" class="button right">
                <router-link to="/CosmeticFormula" tag="button" class="cancel">Cancel</router-link>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      description: '',
      percentage: '',
      creator: '',
      date_created: ''
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
    .button-left{
      text-align: right;
    }
    .left{
      margin-left: 180px;
    }
    .right{
      text-align: left;
    }
    .disabled{
      background-color: #b2b2b2;
    }
</style>
