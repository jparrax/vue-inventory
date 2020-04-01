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
        Total percentage: <span>{{totalPercentage()}}</span>
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
      <b-col cols = "5" class="form table">
        <b-table striped hover :items="items" :fields="fields"></b-table>
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
        <button v-b-modal.modal-1 class="update">Add Ingredients</button>
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
    <!-- Modal -->
    <b-modal id="modal-1" title="Choose raw material" hide-footer>
        <b-row>
            <b-col cols="3" class="modal-label">
                Raw material
            </b-col>
            <b-col cols="9">
                <b-form-select v-model="selected" :options="options"></b-form-select>
            </b-col>
        </b-row>
        <br>
        <b-row>
            <b-col cols="3" class="modal-label">
                Percentage
            </b-col>
            <b-col cols="9">
                <b-form-input v-model="percentage" placeholder="Enter Percentage on decimals"></b-form-input>
            </b-col>
        </b-row>
        <br>
        <b-row>
            <b-col cols = "2" class="button modal-button">
                <button class="update">Add</button>
            </b-col>
            <b-col cols = "1" class="button">
                <button class="cancel" block @click="$bvModal.hide('modal-1')">Cancel</button>
            </b-col>
        </b-row>
    </b-modal>
    <!-- Modal -->
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
      date_created: '',
      fields: ['Raw material','Percentage'],
      items: [],
      selected: null,
      options: [],
      percentage: '',
      rawmaterialslist: [],
      percentagelist: [],
    }
  },
  methods: {
    totalPercentage: function() {
      return this.percentagelist.reduce((a, b) => a + b, 0)
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
    .table{
      height: 90px;
      overflow: auto;
    }
</style>
