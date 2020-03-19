<template>
    <!-- <img src="https://wallpaperaccess.com/full/1465518.jpg"> -->
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
                <button class = "update">Add</button>
            </b-col>
        </b-row>
        <b-row>
            <b-table striped hover :items="items">
                <template v-slot:cell(Actions)="data">
                    <span v-html="data.value"></span>
                 </template>
            </b-table>
        </b-row>
    </b-container>
</template>
<script>
export default {
  data () {
    return {
      items: [
        { ID: 40, 'Batch No': 'Formula Name', Creator: 'Hello', 'Date Updated': 'Hello', Actions: '<Button class = "update">Update</Button><Button class = "update">Order</Button>' },
        { ID: 41, 'Batch No': 'Formula Name', Creator: 'Hello', 'Date Updated': 'Hello', Actions: '<Button class = "update">Update</Button><Button class = "update">Order</Button>' },
        { ID: 42, 'Batch No': 'Formula Name', Creator: 'Hello', 'Date Updated': 'Hello', Actions: '<Button class = "update">Update</Button><Button class = "update">Order</Button>' },
        { ID: 43, 'Batch No': 'Formula Name', Creator: 'Hello', 'Date Updated': 'Hello', Actions: '<Button class = "update">Update</Button><Button class = "update">Order</Button>' },
        { ID: 44, 'Batch No': 'Formula Name', Creator: 'Hello', 'Date Updated': 'Hello', Actions: '<Button class = "update">Update</Button><Button class = "update">Order</Button>' },
        { ID: 45, 'Batch No': 'Formula Name', Creator: 'Hello', 'Date Updated': 'Hello', Actions: '<Button class = "update">Update</Button><Button class = "update">Order</Button>' },
        { ID: 46, 'Batch No': 'Formula Name', Creator: 'Hello', 'Date Updated': 'Hello', Actions: '<Button class = "update">Update</Button><Button class = "update">Order</Button>' },
        { ID: 47, 'Batch No': 'Formula Name', Creator: 'Hello', 'Date Updated': 'Hello', Actions: '<Button class = "update">Update</Button><Button class = "update">Order</Button>' },
        { ID: 48, 'Batch No': 'Formula Name', Creator: 'Hello', 'Date Updated': 'Hello', Actions: '<Button class = "update">Update</Button><Button class = "update">Order</Button>' },
        { ID: 49, 'Batch No': 'Formula Name', Creator: 'Hello', 'Date Updated': 'Hello', Actions: '<Button class = "update">Update</Button><Button class = "update">Order</Button>' }
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
    .button{
        margin-top:1.7%;
    }
</style>
