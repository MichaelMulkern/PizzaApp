<template>
  <div class="edit-crust">
    <div>
      <form action="" v-on:submit.prevent="emptyMethod()">
        <label for="crust">Select a crust to Edit: </label>
        <select name="crust" v-model="selected" v-on:change="setEdited()">
          <option>Select a crust to edit:</option>
          <option
            v-bind:value="crust"
            v-for="crust in this.$store.state.crusts"
            :key="crust.crustId"
          >
            {{ crust.crustName }}
          </option>
        </select>
        <div class="crust-options">
          <label for="">Pizza crust Name: </label>
          <input type="text" v-model="edited.crustName" />
        </div>
        <div class="crust-options">
          <label for="">Price: </label>
          <input type="text" v-model="edited.price" />
        </div>
        <div>
          <button type="submit" v-on:click="createCrust()">
            Create New Crust
          </button>
          <button type="submit" v-on:click="modifyCrust()">Modify Crust</button>
          <button type="submit" v-on:click="deleteCrust()">Delete Crust</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import CrustService from "../services/CrustService.js";

export default {
  name: "edit-crust",
  data() {
    return {
      crust: {
        crustId: 0,
        crustName: "",
        price: 0,
      },
      selected: {
        crustId: 0,
        crustName: "",
        price: 0,
      },

      edited: {
        crustId: 0,
        crustName: "",
        price: 0,
      },
    };
  },
  methods: {
    getCrusts() {
      CrustService.listCrusts().then((response) => {
        this.$store.commit("SET_CRUSTS", response.data);
      });
    },
    createCrust() {
      CrustService.addCrust(this.edited)
        .then((response) => {
          if (response.status === 201) {
            window.alert(`Created crust ${this.edited.crustName}`);
            this.$router.push({ name: "employee-view" });
          }
        })
        .catch((error) => {
          if (error.response) {
            this.errorMsg =
              "Error adding crust. Response received was " +
              error.response.statusText +
              ".";
          } else if (error.request) {
            this.errorMsg = "Error adding crust. Server could not be reached";
          } else {
            this.errorMsg = "Error adding crust.  Request could not be created";
          }
        });
    },

    deleteCrust() {
      if (confirm("Are you sure you want to delete this crust?")) {
        CrustService.deleteCrust(this.edited.crustId)
          .then((response) => {
            if (response.status === 200) {
              this.$router.push({ name: "employee-view" });
            }
          })
          .catch((error) => {
            if (error.response) {
              this.errorMsg =
                "Error deleting crust. Response received was " +
                error.response.statusText +
                ".";
            } else if (error.request) {
              this.errorMsg =
                "Error deleting crust. Server could not be reached";
            } else {
              this.errorMsg =
                "Error deleting crust.  Request could not be created";
            }
          });
      }
    },

    modifyCrust() {
      if (confirm("Are you sure you want to modify this crust?")) {
        CrustService.updateCrust(this.edited)
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
    emptyMethod() {

    },

    setEdited() {
      this.edited = {
        crustId: this.selected.crustId,
        crustName: this.selected.crustName,
        price: this.selected.price,
      };
    },
  },
  created() {
    this.getCrusts();
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