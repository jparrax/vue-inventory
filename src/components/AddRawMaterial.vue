<template>
  <b-container>
    <b-row>
      <b-col cols = "7" class="title">
        <h1>Add a new raw material</h1>
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
        <b-form-input disabled v-model="code" placeholder="" id = "code"></b-form-input>
      </b-col>
      <b-col cols = "2" class="form">
        Anal.No.
      </b-col>
      <b-col cols = "3" class="form">
         <b-form-input v-model="anal_no" placeholder="Enter Anal No"></b-form-input>
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
         <b-form-input v-model="batch_no" placeholder="Enter Batch No"></b-form-input>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols = "2" class="form">
        Price per Kg
      </b-col>
      <b-col cols = "3" class="form">
        <b-form-input v-model="price_per_kg" placeholder="Enter Price Per KG"></b-form-input>
      </b-col>
      <b-col cols = "2" class="form">
        Ammount received
      </b-col>
      <b-col cols = "3" class="form">
         <b-form-input v-model="ammount_received" placeholder="Enter Ammount received"></b-form-input>
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
         <b-form-input v-model="date_received" placeholder="Enter Date Received"></b-form-input>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols = "2" class="form">
        INCI name
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
         placeholder="Enter description"
         rows="3"
         max-rows="6"
        ></b-form-textarea>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols = "1" class="button left">
                <router-link to="/AddRawMaterial" tag="button" class="update"> Add </router-link>
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
      ammount_received: '',
      trade_name: '',
      date_received: '',
      inci_name: '',
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
    #code{
      background-color: #b2b2b2;
    }
</style>
