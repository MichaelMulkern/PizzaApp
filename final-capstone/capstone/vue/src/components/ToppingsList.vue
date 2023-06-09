<template>
  <div class="toppings-list">
    <div
      
      v-for="topping in toppings"
      :key="topping.toppingId"
      
    >
    <div v-if="topping.available" class="toppings-container">
      <div class="toppings-div" >
        <img
          v-if="topping.toppingName === 'Pepperoni'"
          src="../assets/pepperoni.png"
          class="pepperoni-pic"
        />
        <img
          v-if="topping.toppingName === 'Extra Cheese'"
          src="../assets/cheese.jpg"
          class="pepperoni-pic"
        />
        <img
          v-if="topping.toppingName === 'Peppers'"
          src="../assets/pepper.jpg"
          class="pepperoni-pic"
        />
        <img
          v-if="topping.toppingName === 'Mushroom'"
          src="../assets/mushroom.jpg"
          class="pepperoni-pic"
        />
        <img
          v-if="topping.toppingName === 'Sausage'"
          src="../assets/sausage.jpg"
          class="pepperoni-pic"
        />
        <img
          v-if="topping.toppingName === 'Anchovies'"
          src="../assets/anchovies.jpg"
          class="pepperoni-pic"
        />
        <img
          v-if="topping.toppingName === 'Onion'"
          src="../assets/onion.jpeg"
          class="pepperoni-pic"
        />
        <img
          v-if="topping.toppingName === 'Jalapeno'"
          src="../assets/jalapeno.jpg"
          class="pepperoni-pic"
        />
        <img
          v-if="topping.toppingName === 'Caviar'"
          src="../assets/caviar.jpg"
          class="pepperoni-pic"
        />
        <img
          v-if="topping.toppingName === 'Gold Flakes'"
          src="../assets/goldflakes.jpg"
          class="pepperoni-pic"
        />
        <img
        v-if="topping.toppingName === 'Olives'"
        src="../assets/olives.jpg"
        class="pepperoni-pic"
        />
        <img
          v-if="topping.toppingName === 'Feta Cheese'"
          src="../assets/feta.jpg"
          class="pepperoni-pic"
        />
        <img
          v-if="topping.toppingName === 'Spinach'"
          src="../assets/spinach.jpg"
          class="pepperoni-pic"
        />
        <img
          v-if="topping.toppingName === 'Tomatoes'"
          src="../assets/tomatoes.jpg"
          class="pepperoni-pic"
        />
      </div>
      <div class="toppings-div">
        <input
          @change="toggleTopping(topping)"
          type="checkbox"
          :value="topping"
          v-model="selectedToppings"
          id="flexCheckDefault1"
          class="toppings-name-and-price"
        />
        <label class="form-check-label" for="flexCheckDefault"> </label>
        <div class="toppings-div">
          <span class="topping-name-text">
            {{ topping.toppingName }} - ${{
              topping.premium ? "1.50" : "1.00"
            }}</span
          >
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import toppingService from "../services/ToppingService.js";

export default {
  name: "toppings-list",
  props: ["parentToppings"],
  data() {
    return {
      toppings: [],
      selectedToppings: [],
    };
  },
  computed: {
    isPepperoniAdded() {
      return this.selectedToppings.includes("Pepperoni");
    },
  },
  methods: {
    toggleTopping() {
      // let toppingExists = false;
      // for (let t in this.selectedToppings) {
      //   if (t.toppingName === topping.toppingName) {
      //     toppingExists = true;
      //     break;
      //   }
      // }
      // if (toppingExists) {
      //   this.selectedToppings.filter(
      //     (top) => top.toppingName !== topping.toppingName
      //   );
      // } else {
      //   this.selectedToppings.push(topping);
      // }
      // console.log(this.selectedToppings);
      this.$store.commit("ADD_TOPPINGS", this.selectedToppings);
    },

    isSelected(topping) {
      return this.selectedToppings.some(
        (t) => t.toppingId === topping.toppingId
      );
    },
    getToppings() {
      toppingService.listToppings().then((response) => {
        this.toppings = response.data;
      });
    },
    calcToppingPrice(topping) {
      if (topping.premium) {
        return Number(1.5).toFixed(2);
      } else {
        return Number(1).toFixed(2);
      }
    },
  },
  created() {
    this.getToppings();
  },
};
</script>

<style scoped>
.toppings-div {
  width: 200px;
}

.pepperoni-pic {
  width: 50px;
  height: 50px;
  float: left;
}

.toppings-container {
  border: 1px solid black;
  display: flex;
  justify-content: left;
  white-space: nowrap;
}

.toppings-div {
  display: flex;
  align-items: center;
}

.toppings-name-and-price {
  margin-left: -8rem;
}
</style>
