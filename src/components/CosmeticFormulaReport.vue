<template>
  <b-container>
    <b-row>
      <b-col cols="7" class="title">
        <h1>Cosmetic formula report</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="4" class="select">
        <b-form-select
          v-model="selected"
          :options="options"
          value-field="formulaId"
          text-field="formulaName"
        ></b-form-select>
      </b-col>
      <b-col cols="4" class="search">
        <b-form-datepicker id="inventory-from-datepicker" v-model="from" class="mb-2"></b-form-datepicker>
      </b-col>
      <b-col cols="4" class="search">
        <b-form-datepicker id="inventory-to-datepicker" v-model="to" class="mb-2"></b-form-datepicker>
      </b-col>
    </b-row>
    <b-row class="paddingTB10">
      <b-col cols="6" class="button">
        <b-button variant="primary" @click="getFormulaReport()">Generate report</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-table striped hover :items="items" :fields="fields"></b-table>
    </b-row>
  </b-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      from: "",
      to: "",
      fields: [
        "transactionId",
        "order.customerName",
        "formula.formulaName",
        "createdAt",
        "batchSize"
      ],
      items: [],
      selected: null,
      options: []
    };
  },
  mounted() {
    axios.get("http://localhost:9000/formulas").then(response => {
      console.log(response);
      this.options = response.data.data;
    });
  },
  methods: {
    getFormulaReport() {
      if (!this.selected || !this.from || !this.to) {
        alert("Please fill all criterias above");
        return;
      }
      axios
        .get(
          "http://localhost:9000/reports/formula?formulaId=" +
            this.selected +
            "&from=" +
            this.from +
            "&to=" +
            this.to
        )
        .then(response => {
          console.log(response);
          this.items = response.data;
        });
    }
  }
};
</script>
<style scoped>
.title {
  text-align: left;
}
.search {
  align-items: center;
}
.select {
}
.button {
  text-align: left;
}
.paddingTB10 {
  padding-bottom: 10px;
  padding-top: 10px;
}
</style>
