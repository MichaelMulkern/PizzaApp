<template>
  <div class="sauce-list">
    <div
      class="sauce-container"
      v-for="sauce in this.$store.state.sauces"
      :key="sauce.id"
    >
      <div class="toppings-div">
        <img
          v-if="sauce.sauceName === 'Regular'"
          src="../assets/regular.jpg"
          class="pepperoni-pic"
        />
        <img
          v-if="sauce.sauceName === 'Meat Sauce'"
          src="../assets/meat.jpg"
          class="pepperoni-pic"
        />
        <img
          v-if="sauce.sauceName === 'Chunky'"
          src="../assets/chunky.jpg"
          class="pepperoni-pic"
        />
        <img
          v-if="sauce.sauceName === 'White Sauce'"
          src="../assets/whitesauce.jpg"
          class="pepperoni-pic"
        />
        <input
          @click="updateParent"
          v-on:change="clickCheckbox(sauce, $event)"
          class="form-check-input5"
          type="radio"
          name="flexRadioDefault1"
          id="sauce"
        />
        <div class="toppings-div">
          <label class="form-check-label" for="sauce">
            {{ sauce.sauceName }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sauceService from "../services/SauceService.js";

export default {
  name: "sauce-list",
  data() {
    return {
      sauce: "",
    };
  },
  methods: {
    clickCheckbox(sauce, event) {
      if (event.target.checked) {
        console.log(sauce);
        this.sauce = sauce;
      }
      this.$store.commit("ADD_SAUCE", this.sauce);
    },
    getSauces() {
      sauceService.listSauces().then((response) => {
        this.$store.commit("SET_SAUCES", response.data);
      });
    },
    updateParent() {
      this.$emit("updateSauce", this.sauce);
    },
    calcSaucePrice(sauce) {
      if (sauce.price == 0) {
        return "";
      } else {
        return ` - $${sauce.price.toFixed(2)}`;
      }
    },
  },
  created() {
    this.getSauces();
  },
};
</script>

<style>
.pepperoni-pic {
  width: 50px;
  height: 50px;
  float: left;
}
.form-check-label {
  float: left;
  padding-left: 2rem;
}

.sauce-container {
  border: 1px solid black;
  display: flex;
  justify-content: left;
  align-items: center;
  white-space: nowrap;
}

.form-check-input5 {
  margin-left: 2rem;
}

.sauce-name-text {
  display: flex;
  align-items: center;
  padding-left: 2rem;
}

.toppings-div {
  display: flex;
  align-items: center;
}
</style>