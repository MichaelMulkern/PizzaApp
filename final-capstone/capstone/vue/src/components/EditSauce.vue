<template>
  <div class="edit-sauce">
    <div>
      <form action="" v-on:submit.prevent="emptyMethod()">
        <label for="sauce">Select a sauce to Edit: </label>
        <select name="sauce" v-model="selected" v-on:change="setEdited()">
          <option>Select a sauce to edit:</option>
          <option
            v-bind:value="sauce"
            v-for="sauce in this.$store.state.sauces"
            :key="sauce.sauceId"
          >
            {{ sauce.sauceName }}
          </option>
        </select>
        <div class="sauce-options">
          <label for="">Pizza sauce Name: </label>
          <input type="text" v-model="edited.sauceName" />
        </div>
        <div class="sauce-options">
          <label for="">Price: </label>
          <input type="text" v-model="edited.price" />
        </div>
        <div>
          <button type="submit" v-on:click="createSauce()">
            Create New Sauce
          </button>
          <button type="submit" v-on:click="modifySauce()">Modify Sauce</button>
          <button type="submit" v-on:click="deleteSauce()">Delete Sauce</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import SauceService from "../services/SauceService.js";

export default {
  name: "edit-sauce",
  data() {
    return {
      sauce: {
        sauceId: 0,
        sauceName: "",
        price: 0,
      },
      selected: {
        sauceId: 0,
        sauceName: "",
        price: 0,
      },

      edited: {
        sauceId: 0,
        sauceName: "",
        price: 0,
      },
    };
  },

  methods: {
    getSauces() {
      SauceService.listSauces().then((response) => {
        this.$store.commit("SET_SAUCES", response.data);
      });
    },
    createSauce() {
      SauceService.addSauce(this.edited)
        .then((response) => {
          if (response.status === 201) {
            window.alert(`Created sauce ${this.edited.sauceName}`);
            this.$router.push({ name: "employee-view" });
          }
        })
        .catch((error) => {
          if (error.response) {
            this.errorMsg =
              "Error adding sauce. Response received was " +
              error.response.statusText +
              ".";
          } else if (error.request) {
            this.errorMsg = "Error adding sauce. Server could not be reached";
          } else {
            this.errorMsg = "Error adding sauce.  Request could not be created";
          }
        });
    },

    deleteSauce() {
      if (confirm("Are you sure you want to delete this sauce?")) {
        SauceService.deleteSauce(this.edited.sauceId)
          .then((response) => {
            if (response.status === 200) {
              this.$router.push({ name: "employee-view" });
            }
          })
          .catch((error) => {
            if (error.response) {
              this.errorMsg =
                "Error deleting sauce. Response received was " +
                error.response.statusText +
                ".";
            } else if (error.request) {
              this.errorMsg =
                "Error deleting sauce. Server could not be reached";
            } else {
              this.errorMsg =
                "Error deleting sauce.  Request could not be created";
            }
          });
      }
    },
    modifySauce() {
      if (confirm("Are you sure you want to modify this sauce?")) {
        SauceService.updateSauce(this.edited)
          .then((response) => {
            if (response.status === 200) {
              this.$router.push({ name: "employee-view" });
            }
          })
          .catch((error) => {
            if (error.response) {
              this.errorMsg =
                "Error modifying sauce. Response received was " +
                error.response.statusText +
                ".";
            } else if (error.request) {
              this.errorMsg =
                "Error modifying sauce. Server could not be reached";
            } else {
              this.errorMsg =
                "Error modifying sauce.  Request could not be created";
            }
          });
      }
    },
    setEdited() {
      this.edited = {
        sauceId: this.selected.sauceId,
        sauceName: this.selected.sauceName,
        price: this.selected.price,
      };
    },
    emptyMethod() {},
  },

  created() {
    this.getSauces();
  },
};
</script>

<style>
form {
  background: rgba(0, 0, 0, 0.452);
  height: 100%;
  border-radius: 10px;
  padding: 5px;
  color: rgb(197, 193, 193);
}
</style>