<template>
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
                <b-input-group prepend="From" class="mt-3" v-model="from">
                    <b-form-input></b-form-input>
                </b-input-group>
            </b-col>
            <b-col cols = "4" class = "search">
                <b-input-group prepend="To" class="mt-3" v-model="to">
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
            <b-table striped hover :items="items" :fields="fields"></b-table>
        </b-row>
    </b-container>
</template>
<script>
export default {
  data () {
    return {
      from: '',
      to: '',
      fields: ['ID', 'Formula Name', 'Creator', 'Date Updated', 'Batch Size'],
      items: [],
      selected: null,
      options: []
    }
  },
  mounted () {
      axios.get('http://localhost:9000/formulas?selected='+this.selected+'&from='+this.from+'&to='+this.to).then(response => {
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
    .select{
      margin-top: 1.4%;
    }
    .button{
        margin-bottom:1.4%;
        text-align: left;
    }
</style>
