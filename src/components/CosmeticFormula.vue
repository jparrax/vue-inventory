<template>
    <b-container>
        <b-row>
            <b-col cols = "7" class = "title">
                <h1>Cosmetic formula</h1>
            </b-col>
            <b-col cols = "4" class = "search">
                <b-input-group prepend="Search" class="mt-3" v-model="search">
                    <b-form-input></b-form-input>
                </b-input-group>
            </b-col>
            <b-col cols = "1" class="button">
                <router-link to="/AddCosmeticFormula" tag="button" class="update">Add</router-link>
            </b-col>
        </b-row>
        <b-row>
            <b-table striped hover :items="items" :fields="fields">
                <template v-slot:cell(Actions)>
                    <router-link to="/UpdateCosmeticFormula" tag="button" class="update">Update</router-link>
                    <button v-b-modal.modal-1 class="update">Order</button>
                 </template>
            </b-table>
        </b-row>
        <!-- Modal -->
        <b-modal id="modal-1" title="Create order" hide-footer>
            <b-row>
                <b-col cols="3" class="modal-label">
                    Formula
                </b-col>
                <b-col cols="9">
                    <b-form-input v-model="formula" class = 'disabled' disabled></b-form-input>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col cols="3" class="modal-label">
                    Batch size
                </b-col>
                <b-col cols="9">
                    <b-form-input v-model="batch_size" placeholder="Enter Batch Size"></b-form-input>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col cols="3" class="modal-label">
                    Customer
                </b-col>
                <b-col cols="9">
                    <b-form-input v-model="customer" placeholder="Enter Customer"></b-form-input>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col cols="3" class="modal-label">
                    Order date
                </b-col>
                <b-col cols="9">
                    <b-form-input v-model="order_date" placeholder="Enter Order date"></b-form-input>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col cols="3" class="modal-label">
                    Description
                </b-col>
                <b-col cols="9">
                    <b-form-textarea
                    id="textarea"
                    v-model="description"
                    placeholder="Enter Description"
                    rows="3"
                    max-rows="6"
                    ></b-form-textarea>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols = "2" class="button modal-button">
                    <button class="update">Create</button>
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
import axios from 'axios'
export default {
  data () {
    return {
      search: '',
      formula: '',
      batch_size: '',
      customer: '',
      order_date: '',
      description: '',
      fields: ['formulaId', 'formulaName', 'formulaDesc', 'user.username', 'Actions'],
      items: []
    }
  },
  mounted () {
    axios.get('http://localhost:9000/formulas').then(response => {
        console.log(response);
        
        this.items = response.data.data
    })
  }
}
</script>
<style scoped>
    .title{
        text-align: left;
        margin-top: 1%;
    }
    .search{
        align-items: center;
        margin-bottom: 1.7%;
    }
    .button{
        margin-top:1.7%;
    }
    .modal-label{
        padding-top: 1%;
        text-align: center;
    }
    .disabled{
        background-color: #b2b2b2;
    }
    .modal-button{
        margin-left: 120px;
    }
</style>
