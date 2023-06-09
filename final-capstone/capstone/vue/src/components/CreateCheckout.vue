<template>
  <div class="create-checkout"></div>
</template>

<script>
import SaleService from "../services/SaleService.js";

export default {
  name: "create-checkout",
  data() {
    return {
      sale: {
        saleId: "",
        saleStatus: "",
        saleTotal: "",
        isDelivery: "",
        customerAddress: "",
        ccLastFour: "",
      },
    };
  },
  methods: {
    createSale() {
      SaleService.addSale(this.sale)
        .then((response) => {
          if (response.status === 201) {
            this.$router.push({ name: "home" });
          }
        })
        .catch((error) => {
          if (error.response) {
            this.errorMsg =
              "Error adding sale. Response received was " +
              error.response.statusText +
              ".";
          } else if (error.request) {
            this.errorMsg = "Error adding sale. Server could not be reached";
          } else {
            this.errorMsg = "Error adding sale.  Request could not be created";
          }
        });
    },
    getToppings() {
      return this.$store.state.toppings;
    },
  },
};
</script>

<style>
</style>