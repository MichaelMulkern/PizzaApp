<template>
  <div class="specialty-list">
    <div v-for="topping in this.$store.state.toppings" :key="topping.id">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
        <label class="form-check-label" for="defaultCheck1">
          {{ topping.toppingName }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import specialtyService from "../services/SpecialtyService.js";

export default {
  name: "specialty-list",
  methods: {
    getSpecialties() {
      specialtyService.listSpecialties().then((response) => {
        this.$store.commit("SET_SPECIALTIES", response.data);
      });
    },
  },
  created() {
    this.getSpecialties();
  },
};
</script>

<style>
</style>