<template>
  <b-container>
    <b-row>
      <b-col cols="7" class="title">
        <h1>Inventory report</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6" class="search">
        <b-form-datepicker id="inventory-from-datepicker" v-model="from" class="mb-2"></b-form-datepicker>
      </b-col>
      <b-col cols="6" class="search">
        <b-form-datepicker id="inventory-to-datepicker" v-model="to" class="mb-2"></b-form-datepicker>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6" class="button">
        <b-button @click="getInventoryReport()" variant="primary">Generate report</b-button>
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
        "materialName",
        "inciName",
        "batchNumber",
        "analysisNumber",
        "quantity",
        "supplier"
      ],
      items: []
    };
  },
  methods: {
    getInventoryReport() {
      if (!this.from || !this.to) {
        alert("Please fill all criterias above");
        return;
      }
      axios
        .get(
          "http://localhost:9000/reports/inventory?from=" +
            this.from +
            "&to=" +
            this.to
        )
        .then(response => {
          this.items = response.data;
        });
    }
  }
};
</script>
<style scoped>
.title {
  text-align: left;
  margin-top: 1%;
}
.search {
  align-items: center;
  margin-bottom: 1.7%;
}
.button {
  margin-bottom: 1.4%;
  text-align: left;
}
</style>
