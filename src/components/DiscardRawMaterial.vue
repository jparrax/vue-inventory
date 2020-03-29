<template>
  <b-container>
    <b-row>
      <b-col cols = "7" class="title">
        <h1>Discard a raw material</h1>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col class = "subtitle-left">Raw material info:</b-col>
      <b-col class = "subtitle-right"></b-col>
    </b-row>
    <br>
    <br>
    <b-row>
      <b-col>
        <b-row>
          <b-col cols ="3" class="form">
            Code
          </b-col>
          <b-col cols ="6" class="form right">
            <b-form-input v-model="code" class = "disabled" disabled></b-form-input>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col cols = "3" class="form">
            Supplier
          </b-col>
          <b-col cols = "6" class="form">
            <b-form-input v-model="supplier" class = "disabled" disabled></b-form-input>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col cols = "3" class="form">
            Price per Kg
          </b-col>
          <b-col cols = "6" class="form">
            <b-form-input v-model="price_per_kg" class = "disabled" disabled></b-form-input>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col cols = "3" class="form">
            Trade name
          </b-col>
          <b-col cols = "6" class="form">
            <b-form-input v-model="trade_name" class = "disabled" disabled></b-form-input>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col cols = "3" class="form">
            INCI names
          </b-col>
          <b-col cols = "6" class="form">
            <b-form-input v-model="inci_names" class = "disabled" disabled></b-form-input>
          </b-col>
        </b-row>
      </b-col>
      <b-col>
        <b-row>
          <b-col cols ="3" class="form">
            Notes
          </b-col>
          <b-col cols ="6" class="form right">
            <b-form-textarea
            id="textarea"
            v-model="notes"
            placeholder="Enter Description"
            rows="11"
            max-rows="6"
            ></b-form-textarea>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col cols = "1" class="button left">
                <router-link to="/DiscardRawMaterial" tag="button" class="discard"> Discard </router-link>
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
      supplier: '',
      price_per_kg: '',
      trade_name: '',
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
      padding-left: 160px;
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
      background-color:#b2b2b2;
    }
</style>
