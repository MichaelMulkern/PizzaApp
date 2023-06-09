<template>
  <div class="size-list">
    <div class="size-container" v-for="size in sizes" :key="size.id">
      <div class="toppings-div">
        <img
          v-if="size.sizeName === 'Kids'"
          src="../assets/kids.jpg"
          class="pepperoni-pic"
        />
        <img
          v-if="size.sizeName === 'Medium'"
          src="../assets/medium.jpg"
          class="pepperoni-pic"
        />
        <img
          v-if="size.sizeName === 'Large'"
          src="../assets/large.jpg"
          class="pepperoni-pic"
        />
        <img
          v-if="size.sizeName === 'XL'"
          src="../assets/xl.jpg"
          class="pepperoni-pic"
        />
        <input
          @click="updateParent"
          v-on:change="clickCheckbox(size, $event)"
          class="form-check-input6"
          type="radio"
          name="flexRadioDefault2"
          :id="'sizeOption-' + size.id"
        />
        <label :for="'sizeOption-' + size.id" class="form-check-label1">
          {{ size.sizeName }} - ${{ size.price }}.00
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import sizeService from "../services/SizeService.js";

export default {
  name: "size-list",
  data() {
    return {
      size: "",
    };
  },
  computed: {
    sizes() {
      return this.$store.state.sizes;
    },
  },
  methods: {
    clickCheckbox(size, event) {
      if (event.target.checked) {
        console.log(size);
        this.size = size;
      }
      this.$store.commit("ADD_SIZE", this.size);
    },
    getSizes() {
      sizeService.listSizes().then((response) => {
        this.$store.commit("SET_SIZES", response.data);
      });
    },
    updateParent() {
      this.$emit("updateSize", this.size);
    },
  },
  created() {
    this.getSizes();
  },
};
</script>

<style>
.pepperoni-pic {
  width: 50px;
  height: 50px;
}
.form-check-label1 {
  float: left;
  padding-left: 2rem;
}
.form-check-input6 {
  display: flex;
  flex-direction: column;
}
.size-container input[type="radio"] {
  margin-top: 0.5rem;
}
.size-container {
  border: 1px solid black;
  display: flex;
  justify-content: left;
  align-items: center;
  white-space: nowrap;
}
.form-check-input6 {
  margin-left: 2rem;
}
.toppings-name-text {
  display: flex;
  align-items: center;
}
</style>