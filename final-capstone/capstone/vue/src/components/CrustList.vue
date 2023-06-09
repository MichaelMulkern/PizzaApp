<template>
  <div class="crust-list">
    <div
      class="crust-container"
      v-for="crust in this.$store.state.crusts"
      :key="crust.id"
    >
      <div class="toppings-div">
        <img
          v-if="crust.crustName === 'Thin Crust'"
          src="../assets/thincrust.png"
          class="pepperoni-pic"
        />
        <img
          v-if="crust.crustName === 'Extra Crispy'"
          src="../assets/extracrispy.jpg"
          class="pepperoni-pic"
        />
        <img
          v-if="crust.crustName === 'Pan'"
          src="../assets/pan.jpg"
          class="pepperoni-pic"
        />
        <img
          v-if="crust.crustName === 'Chicago Style'"
          src="../assets/chicagostyle.jpg"
          class="pepperoni-pic"
        />
        <input
          @click="updateParent"
          v-on:change="clickCheckbox(crust, $event)"
          class="form-check-input3"
          type="radio"
          name="flexRadioDefault3"
          id="crust"
        />
        <label class="form-check-label6" for="crust">
          {{ crust.crustName }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import crustService from "../services/CrustService.js";

export default {
  name: "crust-list",
  data() {
    return {
      crust: "",
    };
  },
  methods: {
    clickCheckbox(crust, event) {
      if (event.target.checked) {
        console.log(crust);
        this.crust = crust;
      }
      this.$store.commit("ADD_CRUST", this.crust);
    },
    getCrusts() {
      crustService.listCrusts().then((response) => {
        this.$store.commit("SET_CRUSTS", response.data);
      });
    },
    updateParent() {
      this.$emit("updateCrust", this.crust);
    },
    calcCrustPrice(crust) {
      if (crust.price == 0) {
        return "";
      } else {
        return ` - $${crust.price.toFixed(2)}`;
      }
    },
  },
  created() {
    this.getCrusts();
  },
};
</script>

<style>
.pepperoni-pic {
  width: 50px;
  height: 50px;
}
.form-check-label6 {
  float: left;
  padding-left: 2rem;
}

.crust-container {
  border: 1px solid black;
  display: flex;
  justify-content: left;
  align-items: center;
  white-space: nowrap;
}

.form-check-input3 {
  margin-left: 2rem;
}
</style>