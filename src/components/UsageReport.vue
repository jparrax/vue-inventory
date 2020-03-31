<template>
  <b-container>
    <b-row>
      <b-col cols="7" class="title">
        <h1>Usage Report</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="4" class="select">
        <b-form-select
          v-model="selected"
          :options="options"
          value-field="materialId"
          text-field="name"
        ></b-form-select>
      </b-col>
      <b-col cols="4" class="search">
        <b-form-datepicker id="inventory-from-datepicker" v-model="from" class="mb-2"></b-form-datepicker>
      </b-col>
      <b-col cols="4" class="search">
        <b-form-datepicker id="inventory-to-datepicker" v-model="to" class="mb-2"></b-form-datepicker>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6" class="button">
        <b-button variant="primary" @click="getUsageReport()">Generate report</b-button>
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
        "invId",
        "batchNumber",
        "analysisNumber",
        "inventoryDesc",
        "inventoryDesc",
        "quantity"
      ],
      items: [],
      selected: null,
      options: []
    };
  },
  mounted() {
    axios.get("http://localhost:9000/rawmaterials").then(response => {
      console.log(response);
      this.options = response.data.data;
    });
  },
  methods: {
    getUsageReport() {
      if (!this.selected || !this.from || !this.to) {
        alert("Please fill all criterias above");
        return;
      }
      axios
        .get(
          "http://localhost:9000/reports/usage?materialId=" +
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
  margin-top: 1%;
}
.search {
  align-items: center;
  margin-bottom: 1.7%;
}
.select {
  margin-top: 0%;
}
.button {
  margin-bottom: 1.4%;
  text-align: left;
}
</style>
