<template>
    <!-- <img src="https://wallpaperaccess.com/full/1465518.jpg"> -->
    <b-container>
        <b-row>
            <b-col cols = "7" class = "title">
                <h1>Raw Material</h1>
            </b-col>
            <b-col cols = "4" class = "search">
                <b-input-group prepend="Search" class="mt-3">
                    <b-form-input></b-form-input>
                </b-input-group>
            </b-col>
            <b-col cols = "1" class="button">
                <button class="update">Add</button>
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
        { Code: 41, 'Batch No': 'Hello', 'Anal No': 'Hello', 'Trade Name': 'Hello', 'INCI Name': 'Hello', Quantity: 'Hello', Actions: '<Button class = "update">Update</Button><Button class = "discard">Discard</Button>' },
        { Code: 42, 'Batch No': 'Hello', 'Anal No': 'Hello', 'Trade Name': 'Hello', 'INCI Name': 'Hello', Quantity: 'Hello', Actions: '<Button class = "update">Update</Button><Button class = "discard">Discard</Button>' },
        { Code: 43, 'Batch No': 'Hello', 'Anal No': 'Hello', 'Trade Name': 'Hello', 'INCI Name': 'Hello', Quantity: 'Hello', Actions: '<Button class = "update">Update</Button><Button class = "discard">Discard</Button>' },
        { Code: 44, 'Batch No': 'Hello', 'Anal No': 'Hello', 'Trade Name': 'Hello', 'INCI Name': 'Hello', Quantity: 'Hello', Actions: '<Button class = "update">Update</Button><Button class = "discard">Discard</Button>' },
        { Code: 45, 'Batch No': 'Hello', 'Anal No': 'Hello', 'Trade Name': 'Hello', 'INCI Name': 'Hello', Quantity: 'Hello', Actions: '<Button class = "update">Update</Button><Button class = "discard">Discard</Button>' },
        { Code: 46, 'Batch No': 'Hello', 'Anal No': 'Hello', 'Trade Name': 'Hello', 'INCI Name': 'Hello', Quantity: 'Hello', Actions: '<Button class = "update">Update</Button><Button class = "discard">Discard</Button>' }
      ]
    }
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
</style>
