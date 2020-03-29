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
        <b-form-input v-model="code" class = "disabled" disabled></b-form-input>
      </b-col>
      <b-col cols = "2" class="form">
        Anal.No.
      </b-col>
      <b-col cols = "3" class="form">
         <b-form-input v-model="anal_no" class = "disabled" disabled></b-form-input>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols = "2" class="form">
        Supplier
      </b-col>
      <b-col cols = "3" class="form">
        <b-form-input v-model="supplier" placeholder="Enter Supplier"></b-form-input>
      </b-col>
      <b-col cols = "2" class="form">
        Batch No.
      </b-col>
      <b-col cols = "3" class="form">
         <b-form-input v-model="batch_no" class = "disabled"></b-form-input>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols = "2" class="form">
        Price per Kg
      </b-col>
      <b-col cols = "3" class="form">
        <b-form-input v-model="price_per_kg" placeholder="Enter Price per Kg"></b-form-input>
      </b-col>
      <b-col cols = "2" class="form">
        Ammount
      </b-col>
      <b-col cols = "3" class="form">
         <b-form-input v-model="ammount" placeholder="Enter Ammount"></b-form-input>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols = "2" class="form">
        Trade name
      </b-col>
      <b-col cols = "3" class="form">
        <b-form-input v-model="trade_name" placeholder="Enter Trade Name"></b-form-input>
      </b-col>
      <b-col cols = "2" class="form">
        Date received
      </b-col>
      <b-col cols = "3" class="form">
         <b-form-input v-model="date_received" class = "disabled" disabled></b-form-input>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols = "2" class="form">
        INCI names
      </b-col>
      <b-col cols = "3" class="form">
        <b-form-input v-model="inci_names" placeholder="Enter INCI Names"></b-form-input>
      </b-col>
      <b-col cols = "2" class="form">
        Notes
      </b-col>
      <b-col cols = "3" class="form">
         <b-form-textarea
         id="textarea"
         v-model="notes"
         placeholder="Enter Description"
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
      code: '',
      anal_no: '',
      supplier: '',
      batch_no: '',
      price_per_kg: '',
      ammount: '',
      trade_name: '',
      date_received: '',
      inci_names: '',
      notes: ''
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
    .disabled{
      background-color: #b2b2b2;
    }
</style>
