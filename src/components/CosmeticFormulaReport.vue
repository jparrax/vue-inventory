<template>
    <!-- <img src="https://wallpaperaccess.com/full/1465518.jpg"> -->
    <b-container>
        <b-row>
            <b-col cols = "7" class = "title">
                <h1>Cosmetic formula report</h1>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols = "4" class = "select">
              <b-form-select v-model="selected" :options="options"></b-form-select>
            </b-col>
            <b-col cols = "4" class = "search">
                <b-input-group prepend="From" class="mt-3">
                    <b-form-input></b-form-input>
                </b-input-group>
            </b-col>
            <b-col cols = "4" class = "search">
                <b-input-group prepend="To" class="mt-3">
                    <b-form-input></b-form-input>
                </b-input-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols = "2" class="button">
                <b-button variant="primary">Generate report</b-button>
            </b-col>
        </b-row>
        <b-row>
            <b-table striped hover :items="items"></b-table>
        </b-row>
    </b-container>
</template>
<script>
export default {
  data () {
    return {
      items: [
        { ID: 40, 'Formula Name': 'Hello', Creator: 'Hello', 'Date Update': 'Hello', 'Batch Size': 'Hello' },
        { ID: 41, 'Formula Name': 'Hello', Creator: 'Hello', 'Date Update': 'Hello', 'Batch Size': 'Hello' },
        { ID: 42, 'Formula Name': 'Hello', Creator: 'Hello', 'Date Update': 'Hello', 'Batch Size': 'Hello' },
        { ID: 43, 'Formula Name': 'Hello', Creator: 'Hello', 'Date Update': 'Hello', 'Batch Size': 'Hello' },
        { ID: 44, 'Formula Name': 'Hello', Creator: 'Hello', 'Date Update': 'Hello', 'Batch Size': 'Hello' },
        { ID: 45, 'Formula Name': 'Hello', Creator: 'Hello', 'Date Update': 'Hello', 'Batch Size': 'Hello' },
        { ID: 46, 'Formula Name': 'Hello', Creator: 'Hello', 'Date Update': 'Hello', 'Batch Size': 'Hello' },
        { ID: 47, 'Formula Name': 'Hello', Creator: 'Hello', 'Date Update': 'Hello', 'Batch Size': 'Hello' },
        { ID: 48, 'Formula Name': 'Hello', Creator: 'Hello', 'Date Update': 'Hello', 'Batch Size': 'Hello' },
        { ID: 49, 'Formula Name': 'Hello', Creator: 'Hello', 'Date Update': 'Hello', 'Batch Size': 'Hello' },
        { ID: 50, 'Formula Name': 'Hello', Creator: 'Hello', 'Date Update': 'Hello', 'Batch Size': 'Hello' },
        { ID: 51, 'Formula Name': 'Hello', Creator: 'Hello', 'Date Update': 'Hello', 'Batch Size': 'Hello' }
      ],
      selected: null,
      options: [
        { value: null, text: 'Please select a formula' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ]
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
    .select{
      margin-top: 1.4%;
    }
    .button{
        margin-bottom:1.4%;
        text-align: left;
    }
</style>
