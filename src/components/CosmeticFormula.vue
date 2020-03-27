<template>
    <b-container>
        <b-row>
            <b-col cols = "7" class = "title">
                <h1>Cosmetic formula</h1>
            </b-col>
            <b-col cols = "4" class = "search">
                <b-input-group prepend="Search" class="mt-3">
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
        <b-modal id="modal-1" title="Create order">
            <b-row>
                <b-col cols="3" class="modal-label">
                    Formula
                </b-col>
                <b-col cols="9">
                    <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col cols="3" class="modal-label">
                    Batch size
                </b-col>
                <b-col cols="9">
                    <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col cols="3" class="modal-label">
                    Customer
                </b-col>
                <b-col cols="9">
                    <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col cols="3" class="modal-label">
                    Order date
                </b-col>
                <b-col cols="9">
                    <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
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
                    v-model="text"
                    placeholder="Enter something..."
                    rows="3"
                    max-rows="6"
                    ></b-form-textarea>
                </b-col>
            </b-row>
        </b-modal>
    </b-container>
</template>
<script>
export default {
  data () {
    return {
      fields: ['ID', 'Batch No', 'Creator', 'Date updated', 'Actions'],
      items: []
    }
  }
}
</script>
<style scoped>
    /* .col{
        text-align: center;
    } */
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
</style>
