<template>
    <b-container>
        <b-row>
            <b-col cols = "7" class = "title">
                <h1>Inventory report</h1>
            </b-col>
        </b-row>
        <b-row>
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
        { Code: 40, 'Batch No': 'Hello', 'Anal No': 'Hello', 'Trade Name': 'Hello', 'INCI Name': 'Hello', 'Actual stock': 'Hello', Supplier: 'Hello' },
        { Code: 41, 'Batch No': 'Hello', 'Anal No': 'Hello', 'Trade Name': 'Hello', 'INCI Name': 'Hello', 'Actual stock': 'Hello', Supplier: 'Hello' },
        { Code: 42, 'Batch No': 'Hello', 'Anal No': 'Hello', 'Trade Name': 'Hello', 'INCI Name': 'Hello', 'Actual stock': 'Hello', Supplier: 'Hello' },
        { Code: 43, 'Batch No': 'Hello', 'Anal No': 'Hello', 'Trade Name': 'Hello', 'INCI Name': 'Hello', 'Actual stock': 'Hello', Supplier: 'Hello' },
        { Code: 44, 'Batch No': 'Hello', 'Anal No': 'Hello', 'Trade Name': 'Hello', 'INCI Name': 'Hello', 'Actual stock': 'Hello', Supplier: 'Hello' },
        { Code: 45, 'Batch No': 'Hello', 'Anal No': 'Hello', 'Trade Name': 'Hello', 'INCI Name': 'Hello', 'Actual stock': 'Hello', Supplier: 'Hello' },
        { Code: 46, 'Batch No': 'Hello', 'Anal No': 'Hello', 'Trade Name': 'Hello', 'INCI Name': 'Hello', 'Actual stock': 'Hello', Supplier: 'Hello' },
        { Code: 47, 'Batch No': 'Hello', 'Anal No': 'Hello', 'Trade Name': 'Hello', 'INCI Name': 'Hello', 'Actual stock': 'Hello', Supplier: 'Hello' },
        { Code: 48, 'Batch No': 'Hello', 'Anal No': 'Hello', 'Trade Name': 'Hello', 'INCI Name': 'Hello', 'Actual stock': 'Hello', Supplier: 'Hello' },
        { Code: 49, 'Batch No': 'Hello', 'Anal No': 'Hello', 'Trade Name': 'Hello', 'INCI Name': 'Hello', 'Actual stock': 'Hello', Supplier: 'Hello' },
        { Code: 50, 'Batch No': 'Hello', 'Anal No': 'Hello', 'Trade Name': 'Hello', 'INCI Name': 'Hello', 'Actual stock': 'Hello', Supplier: 'Hello' },
        { Code: 51, 'Batch No': 'Hello', 'Anal No': 'Hello', 'Trade Name': 'Hello', 'INCI Name': 'Hello', 'Actual stock': 'Hello', Supplier: 'Hello' }
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
        margin-bottom:1.4%;
        text-align: left;
    }
</style>
