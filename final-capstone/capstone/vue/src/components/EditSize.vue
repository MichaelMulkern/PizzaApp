<template>
  <div class="edit-size">
    <div>
      <form action="" v-on:submit.prevent="emptyMethod()">
        <label for="size">Select a size to Edit: </label>
        <select name="size" v-model="selected" v-on:change="setEdited()">
          <option>Select a size to edit:</option>
          <option
            v-bind:value="size"
            v-for="size in this.$store.state.sizes"
            :key="size.sizeId"
          >
            {{ size.sizeName }}
          </option>
        </select>
        <div class="size-options">
          <label for="">Pizza Size Name: </label>
          <input type="text" v-model="edited.sizeName" />
        </div>
        <div class="size-options">
          <label for="">Price: </label>
          <input type="text" v-model="edited.price" />
        </div>
        <div>
          <button type="submit" v-on:click="createSize()">
            Create New Size
          </button>
          <button type="submit" v-on:click="modifySize()">Modify Size</button>
          <button type="submit" v-on:click="deleteSize()">Delete Size</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import SizeService from "../services/SizeService.js";

export default {
  name: "edit-size",
  data() {
    return {
      selected: {
        pizzaSizeId: 0,
        sizeName: "",
        price: 0,
      },

      edited: {
        pizzaSizeId: 0,
        sizeName: "",
        price: 0,
      },
      size: {
        pizzaSizeId: 0,
        sizeName: "",
        price: 0,
      },
    };
  },

  methods: {
    getSizes() {
      SizeService.listSizes().then((response) => {
        this.$store.commit("SET_SIZES", response.data);
      });
    },
    createSize() {
      SizeService.addSize(this.edited)
        .then((response) => {
          if (response.status === 201) {
            window.alert(`Created size ${this.edited.sizeName}`);
            this.$router.push({ name: "employee-view" });
          }
        })
        .catch((error) => {
          if (error.response) {
            this.errorMsg =
              "Error adding size. Response received was " +
              error.response.statusText +
              ".";
          } else if (error.request) {
            this.errorMsg = "Error adding size. Server could not be reached";
          } else {
            this.errorMsg = "Error adding size.  Request could not be created";
          }
        });
    },

    deleteSize() {
      if (confirm("Are you sure you want to delete this size?")) {
        SizeService.deleteSize(this.edited.pizzaSizeId)
          .then((response) => {
            if (response.status === 200) {
              this.$router.push({ name: "employee-view" });
            }
          })
          .catch((error) => {
            if (error.response) {
              this.errorMsg =
                "Error deleting size. Response received was " +
                error.response.statusText +
                ".";
            } else if (error.request) {
              this.errorMsg =
                "Error deleting size. Server could not be reached";
            } else {
              this.errorMsg =
                "Error deleting size.  Request could not be created";
            }
          });
      }
    },
    modifySize() {
      if (confirm("Are you sure you want to modify this size?")) {
        SizeService.updateSize(this.edited)
          .then((response) => {
            if (response.status === 200) {
              this.$router.push({ name: "employee-view" });
            }
          })
          .catch((error) => {
            if (error.response) {
              this.errorMsg =
                "Error modifying size. Response received was " +
                error.response.statusText +
                ".";
            } else if (error.request) {
              this.errorMsg =
                "Error modifying size. Server could not be reached";
            } else {
              this.errorMsg =
                "Error modifying size.  Request could not be created";
            }
          });
      }
    },
    emptyMethod() {},
    setEdited() {
      this.edited = {
        pizzaSizeId: this.selected.pizzaSizeId,
        sizeName: this.selected.sizeName,
        price: this.selected.price
      };
    },
  },
  created() {
    this.getSizes();
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