<template>
  <div class="edit-toppings">
    <div>
      <form action="" v-on:submit.prevent="emptyMethod()">
        <label for="toppings">Select a topping to Edit: </label>
        <select name="toppings" v-model="selected" v-on:change="setEdited()">
          <option>Select a topping to edit:</option>
          <option
            v-bind:value="topping"
            v-for="topping in this.$store.state.toppings"
            :key="topping.toppingId"
          >
            {{ topping.toppingName }}
          </option>
        </select>
        <div class="toppings-options">
          <label for="">Topping Name: </label>
          <input type="text" v-model="edited.toppingName" />
        </div>
        <div class="toppings-options">
          <label for="">Premium: </label>
          <input type="checkbox" v-model="edited.premium" />
        </div>
        <div class="toppings-options">
          <label for="">Available: </label>
          <input type="checkbox" v-model="edited.available" />
        </div>
        <div>
          <button type="submit" v-on:click="createTopping()">
            Create New Topping
          </button>
          <button type="submit" v-on:click="modifyTopping()">
            Modify Topping
          </button>
          <button type="submit" v-on:click="deleteTopping()">
            Delete Topping
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ToppingService from "../services/ToppingService.js";

export default {
  name: "edit-toppings",
  data() {
    return {
      selected: {
        toppingId: "",
        toppingName: "",
        premium: "",
        available: "",
      },

      edited: {
        toppingId: "",
        toppingName: "",
        premium: "",
        available: "",
      },
    };
  },
  methods: {
    getToppings() {
      ToppingService.listToppings().then((response) => {
        this.$store.commit("SET_TOPPINGS", response.data);
      });
    },
    createTopping() {
      ToppingService.addTopping(this.edited)
        .then((response) => {
          if (response.status === 201) {
            window.alert(`Created topping ${this.edited.toppingName}`);
            this.$router.push({ name: "employee-view" });
          }
        })
        .catch((error) => {
          if (error.response) {
            this.errorMsg =
              "Error adding topping. Response received was " +
              error.response.statusText +
              ".";
          } else if (error.request) {
            this.errorMsg = "Error adding topping. Server could not be reached";
          } else {
            this.errorMsg =
              "Error adding topping.  Request could not be created";
          }
        });
    },

    deleteTopping() {
      if (confirm("Are you sure you want to delete this topping?")) {
        ToppingService.deleteTopping(this.edited.toppingId)
          .then((response) => {
            if (response.status === 200) {
              this.$router.push({ name: "employee-view" });
            }
          })
          .catch((error) => {
            if (error.response) {
              this.errorMsg =
                "Error deleting topping. Response received was " +
                error.response.statusText +
                ".";
            } else if (error.request) {
              this.errorMsg =
                "Error deleting topping. Server could not be reached";
            } else {
              this.errorMsg =
                "Error deleting topping.  Request could not be created";
            }
          });
      }
    },
    modifyTopping() {
      if (confirm("Are you sure you want to modify this topping?")) {
        ToppingService.updateTopping(this.edited)
          .then((response) => {
            if (response.status === 200) {
              this.$router.push({ name: "employee-view" });
            }
          })
          .catch((error) => {
            if (error.response) {
              this.errorMsg =
                "Error modifying crust. Response received was " +
                error.response.statusText +
                ".";
            } else if (error.request) {
              this.errorMsg =
                "Error modifying crust. Server could not be reached";
            } else {
              this.errorMsg =
                "Error modifying crust.  Request could not be created";
            }
          });
      }
    },
    emptyMethod() {},
    setEdited() {
      this.edited = {
        toppingId: this.selected.toppingId,
        toppingName: this.selected.toppingName,
        available: this.selected.available,
        premium: this.selected.premium,
      };
    },
  },
  created() {
    this.getToppings();
  },
};
</script>

<style>
</style>