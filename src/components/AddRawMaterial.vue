<template>
  <b-container>
    <b-row>
      <b-col cols="7" class="title">
        <h1>Add a new raw material</h1>
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col class="subtitle-left">Raw material info:</b-col>
      <b-col class="subtitle-right">Inventory info:</b-col>
    </b-row>
    <br />
    <br />
    <b-row>
      <b-col cols="2" class="form">Code</b-col>
      <b-col cols="3" class="form">
        <b-form-input disabled v-model="rawMaterialId" placeholder id="code"></b-form-input>
      </b-col>
      <b-col cols="2" class="form">Anal.No.</b-col>
      <b-col cols="3" class="form">
        <b-form-input v-model="anal_no" placeholder="Enter Anal No"></b-form-input>
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col cols="2" class="form">Supplier</b-col>
      <b-col cols="3" class="form">
        <b-form-select
          v-model="selectedSupplier"
          :options="supplierOptions"
          value-field="supplierId"
          text-field="name"
        ></b-form-select>
      </b-col>
      <b-col cols="2" class="form">Batch No.</b-col>
      <b-col cols="3" class="form">
        <b-form-input v-model="batch_no" placeholder="Enter Batch No"></b-form-input>
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col cols="2" class="form">Trade name</b-col>
      <b-col cols="3" class="form">
        <b-form-input v-model="trade_name" placeholder="Enter Trade Name"></b-form-input>
      </b-col>
      <b-col cols="2" class="form">Ammount received</b-col>
      <b-col cols="3" class="form">
        <b-form-input v-model="ammount_received" placeholder="Enter Ammount received"></b-form-input>
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col cols="2" class="form">INCI name</b-col>
      <b-col cols="3" class="form">
        <b-form-input v-model="inci_name" placeholder="Enter INCI Name"></b-form-input>
      </b-col>

      <b-col cols="2" class="form">Date received</b-col>
      <b-col cols="3" class="form">
        <b-form-datepicker id="inventory-from-datepicker" v-model="date_received"></b-form-datepicker>
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col cols="2" class="form"></b-col>
      <b-col cols="3" class="form"></b-col>
      <b-col cols="2" class="form">Notes</b-col>
      <b-col cols="3" class="form">
        <b-form-textarea
          id="textarea"
          v-model="notes"
          placeholder="Enter description"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="1" class="button left">
        <button class="update" @click="saveRawMaterial()">Add</button>
      </b-col>
      <b-col cols="1" class="button right">
        <router-link to="/RawMaterial" tag="button" class="cancel">Cancel</router-link>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      anal_no: "",
      selectedSupplier: null,
      supplierOptions: [],
      batch_no: "",
      price_per_kg: "",
      ammount_received: "",
      trade_name: "",
      date_received: "",
      inci_name: "",
      notes: "",
      rawMaterialId: ""
    };
  },
  mounted() {
    axios.get("http://localhost:9000/rawmaterials/supplier").then(response => {
      console.log(response);
      this.supplierOptions = response.data.data;
    });
  },
  methods: {
    saveRawMaterial() {
      if (this.checkAllFields()) {
        axios
          .post("http://localhost:9000/rawmaterials", {
            name: this.trade_name,
            inciName: this.inci_name
          })
          .then(response => {
            console.log(response);
            console.log(response.data.data.materialId);

            this.rawMaterialId = response.data.data.materialId;
            this.saveInventory();
            alert("Raw Material successfully updated!");
          })
          .catch(error => {
            console.log(error);
            alert("Failed!");
          });
      }
    },
    saveInventory() {
      axios
        .post("http://localhost:9000/rawmaterials/inventories", {
          batchNumber: this.batch_no,
          analysisNumber: this.anal_no,
          quantity: this.ammount_received,
          inventoryDesc: this.notes,
          supplierId: this.selectedSupplier,
          materialId: this.rawMaterialId
        })
        .then(response => {
          console.log(response);
          alert("Inventory successfully updated!");
          this.$router.push("/RawMaterial");
        })
        .catch(error => {
          console.log(error);
          alert("Failed!");
        });
    },
    checkAllFields() {
      if (
        this.anal_no &&
        this.selectedSupplier &&
        this.ammount_received &&
        this.batch_no &&
        this.selectedSupplier &&
        this.trade_name &&
        this.inci_name
      ) {
        return true;
      } else {
        alert("Please fill all fields");
        return false;
      }
    }
  }
};
</script>
<style scoped>
.title {
  text-align: left;
  margin-top: 1%;
}
.subtitle-left {
  text-align: left;
  padding-left: 205px;
  padding-right: 0%;
}
.subtitle-right {
  text-align: left;
  padding-left: 20px;
  padding-right: 0%;
}
.search {
  align-items: center;
  margin-bottom: 1.7%;
}
.button {
  margin-top: 1.7%;
}
.left {
  margin-left: 180px;
}
.right {
  text-align: left;
}
#code {
  background-color: #b2b2b2;
}
</style>
