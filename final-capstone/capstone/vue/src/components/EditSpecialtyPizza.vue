<template>
  <div class="edit-specialty-container" >
      <div class="edit-specialty-pizza">
        
        <div>
        <label for="specialty-pizzas">Select a Specialty Pizza to Edit: </label>
          <select name="specialty-pizza" specialtyId="specialty-edit-list" v-model="selected" v-on:change="setEdited()" >
            <option v-bind:value="specialty"  v-for="specialty in this.$store.state.specialties" :key="specialty.specialtyId">{{specialty.pizzaName}} </option>
            <option :value="edited">Create new specialty pizza</option>
          </select>
        </div>
      </div>
      <div >
        <form action=""    >
          <div class="specialty-form">
            <div class="specialty-options">
              <label for="">Pizza Name: </label>
              <input type="text"   v-model="edited.pizzaName">  
            </div>
            <div class="specialty-options">
              <label for="">Select Toppings:</label>
              <div v-for="topping in this.$store.state.toppings" :key="topping.toppingId">
                <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :value="topping"
                  v-model="edited.toppings"
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  {{ topping.toppingName }}
                </label>
                </div>
              </div>
            </div>
            <div class="specialty-options">
              <label for="">Select Crust: </label>
              <div v-for="crust in this.$store.state.crusts" :key="crust.id">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    :value="crust.crustId"
                    v-model="edited.crustId"
                    id="crust"
                  />
                  <label class="form-check-label" for="crust">
                    {{ crust.crustName }}
                  </label>
                </div>
              </div>
            </div>
            <div class="specialty-options">
              <label for="">Select Sauce:</label>
                <div v-for="sauce in this.$store.state.sauces" :key="sauce.id">
                  <div class="form-check">
                    <input
                      :value="sauce.sauceId"
                      v-model="edited.sauceId"
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault1"
                      id="sauce"
                    />
                    <label class="form-check-label" for="sauce">
                      {{ sauce.sauceName }}
                    </label>
                  </div>
                </div>
              
            </div>
            <div class="specialty-options">
              <label for="">Select Size:</label>
                <div v-for="size in this.$store.state.sizes" :key="size.id">
                  <div class="form-check">
                    <input
                      :value="size.pizzaSizeId"
                      v-model="edited.sizeId"
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault2"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      {{ size.sizeName }}
                    </label>
                  </div>
                </div>
              
            </div>
            <div class="specialty-options">
              <label for="">Select Availabilty:</label>
              <div>
                <input type="checkbox" v-model="edited.available" >
                <label for="">&nbsp; Available</label>
              </div>
              
            </div>
            <div class="specialty-options">
              <label for="specialty-price">Price: </label>
              <input name="specialty-price" type="text" v-model="edited.price" >
            </div>
            <div class="specialty-options specialty-description">
              <label for="specialty-description">Description: </label>
              <input name="specialty-description" type="textbox" v-model="edited.description" >
            </div>
            <div class="specialty-options">
              <label for="specialty-image">Image: </label>
              <input name="specialty-image" type="text" v-model="edited.image" value="">
              <!-- <input type="file"> -->
            </div>
          </div>
          <div class="specialty-button-group">
            <button type="submit" v-on:click="createSpecialty()">
              Create New Specialty Pizza
            </button>
            <button type="submit" v-on:click="putSpecialty()">Modify Specialty Pizza</button>
            <button type="submit" v-on:click="deleteSpecialty()">Delete Specialty Pizza</button>
          </div>
          

        </form>
      </div>

      <div>
        
      </div>
  </div>
</template>

<script>
import specialtyService from "../services/SpecialtyService.js";
import toppingService from "../services/ToppingService.js";
import crustService from "../services/CrustService.js";
import sauceService from "../services/SauceService.js";
import sizeService from "../services/SizeService.js";


export default {
  components: {   },
  name: "edit-specialty",
  props: ["parentToppings"],
  
  data()  {
    return {
        selected : {
        specialtyId: 0,
        pizzaName: "",
        crustId: "",
        sauceId: "",
        sizeId: "",
        toppings: [],
        price: "",
        available: "",
        description: "",
        image: ""

        },
        edited : {
          specialtyId: 1,
          pizzaName: "",
          crustId: "",
          sauceId: "",
          sizeId: "",
          toppings: [],
          price: "",
          available: "",
          description: "",
          image: "veggie-pizza.jpg"
        }
    }
  },
  methods: {
    updateToppings(toppings){
      this.edited.toppings = toppings;
    },
    getSpecialties() {
      specialtyService.listSpecialties().then((response) => {
        this.$store.commit("SET_SPECIALTIES", response.data);
      });
    },
    getToppings() {
      toppingService.listToppings().then((response) => {
        this.$store.commit("SET_TOPPINGS", response.data);
      });
    },
    getCrusts() {
      crustService.listCrusts().then((response) => {
        this.$store.commit("SET_CRUSTS", response.data);
      });
    },
    getSauces() {
      sauceService.listSauces().then((response) => {
        this.$store.commit("SET_SAUCES", response.data);
      });
    },
    getSizes() {
      sizeService.listSizes().then((response) => {
        this.$store.commit("SET_SIZES", response.data);
      });
    },
    putSpecialty() {
      const updatedSpecialty = {
        specialtyId: this.edited.specialtyId,
        pizzaName: this.edited.pizzaName,
        crustId: this.edited.crustId,
        sauceId: this.edited.sauceId,
        sizeId: this.edited.sizeId,
        toppings: this.edited.toppings,
        price : this.edited.price,
        available : this.edited.available,
        description : this.edited.description,
        image : this.edited.image

      };
      specialtyService.updateSpecialty(updatedSpecialty).then(response => {
        if(response.status===202){
          this.selected = {};
          this.edited = {};
          this.$router.go(0);
        }
      }).catch((error) => {
          if (error.response) {
            this.errorMsg =
              "Error adding specialty pizza. Response received was " +
              error.response.statusText +
              ".";
          } else if (error.request) {
            this.errorMsg = "Error adding specialty. Server could not be reached";
          } else {
            this.errorMsg = "Error adding specialty.  Request could not be created";
          }
        });
    },
    createSpecialty() {
      specialtyService.addSpecialty(this.edited)
        .then((response) => {
          if (response.status === 201) {
            window.alert(`Created specialty ${this.edited.pizzaName}`);
            this.selected = {};
            this.edited = {};
            this.$router.go(0);
          }
        })
        .catch((error) => {
          if (error.response) {
            this.errorMsg =
              "Error adding specialty. Response received was " +
              error.response.statusText +
              ".";
          } else if (error.request) {
            this.errorMsg = "Error adding specialty. Server could not be reached";
          } else {
            this.errorMsg = "Error adding specialty.  Request could not be created";
          }
        });
    },
    deleteSpecialty() {
      if (confirm("Are you sure you want to delete this specialty?")) {
        specialtyService.deleteSpecialty(this.edited.specialtyId)
          .then((response) => {
            if (response.status === 200) {
              this.selected = {};
              this.edited = {};
              this.$router.go(0);
            }
          })
          .catch((error) => {
            if (error.response) {
              this.errorMsg =
                "Error deleting specialty. Response received was " +
                error.response.statusText +
                ".";
            } else if (error.request) {
              this.errorMsg =
                "Error deleting specialty. Server could not be reached";
            } else {
              this.errorMsg =
                "Error deleting specialty.  Request could not be created";
            }
          });
      }
    },
    setEdited(){
      this.edited = {
        specialtyId: this.selected.specialtyId,
        pizzaName: this.selected.pizzaName,
        crustId: this.selected.crustId,
        sauceId: this.selected.sauceId,
        sizeId: this.selected.sizeId,
        toppings: this.selected.toppings,
        price : this.selected.price,
        available : this.selected.available,
        description : this.selected.description,
        image : this.selected.image

      };
      
      
    },
  
    
  },
  created() {
    this.getSpecialties();
    this.getToppings();
    this.getCrusts();
    this.getSauces();
    this.getSizes();
  },
  
};
</script>

<style scoped>

div {
  color : rgb(197, 193, 193);
  
}

h2 {
  font-size: 3rem;
}

.specialty-description {
  
  width: 400px
}
.edit-specialty-container {
  width: 100vw;
  height: 100vh;
}

.edit-specialty-pizza {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.8rem;
  

}

div.specialty-options {
background: rgba(0, 0, 0, 0.452);
height: 100%;
border-radius: 10px;
padding: 5px;

}

.specialty-options {
  display: flex;
  flex-direction: column;
  align-items: top;
}

.specialty-options label {
  
}

.specialty-form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 5%;
}

.specialty-form input {
  
}

.specialty-form button {
  height: 30px;
  width: auto;
}
form button {
  /* margin-left: 50%; */
  border-radius: 5px;
}

.specialty-button-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin-left: 25%;
}
</style>