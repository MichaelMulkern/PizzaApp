<template>
  <div>
    <Modal :open="isOpen" @close="isOpen= !isOpen">
      <h3 class="pizza-title">Items on order# {{modalSaleId}}</h3>
      <hr>
      <ul v-for="pizza in filteredPizzas" :key="pizza.id" class="order-list">
        <p><span class="pizza-title">Pizza ID:</span> {{pizza.pizzaId}}</p>
        <p><span class="pizza-title">Size:</span> {{sizeNamer(pizza.sizeId)}}</p>
        <p><span class="pizza-title">Crust:</span> {{crustNamer(pizza.crustId)}}</p>
        <p><span class="pizza-title">Sauce:</span> {{sauceNamer(pizza.sauceId)}}</p>
        <p><span class="pizza-title">Toppings:</span></p>
          <ul v-for="topping in pizza.toppings" :key="topping.id" class="order-list">
            <p>{{topping.toppingName}}</p>
          </ul>
          <hr>
      </ul>

      </Modal>
    <div class="main-area">
      <button class="statusdrop" id="reset-button" v-on:click="getSales()">Reset List</button>
      <br>
      <span id="top-span">Filter List By:</span>
      <select
        @change="updateList()"
        name="category"
        class="statusdrop"
        v-model="selectedCategory"
      >
        <option class="statusdrop" value="all">All</option>
        <option class="statusdrop" value="pending">Pending</option>
        <option class="statusdrop" value="canceled">Canceled</option>
        <option class="statusdrop" value="ready">Ready</option>
        <option class="statusdrop" value="complete">Complete</option>
      </select>

      <div class="input-area" id="search-area">
        <label for="search">Search:</label>
        <input
          class="statusdrop"
          type="text"
          id="search"
          name="search"
          v-model="searchKey"
        />

        <select class="statusdrop" v-model="searchCategory" >
          <option class="statusdrop" value="saleId">Sale Id</option>
          <option class="statusdrop" value="customerAddress">Address</option>
          <option class="statusdrop" value="delivery">Delivery</option>
        </select>

        <button class="statusdrop" @click="searchSorter()">
          Search Category
        </button>
      </div>

      <div class>
        <table id="sale-table">
          <thead>
            <tr class="table-headers">
              <th scope="col">Sale Id</th>
              <th scope="col">Sale Status</th>
              <th scope="col">Sale Total</th>
              <th scope="col">Is Delivery</th>
              <th scope="col">Address</th>
              <th scope="col">CC Last Four</th>
            </tr>
          </thead>
          <tbody>
            <!--v-on:click="getPizzasBySaleId(sale.saleId)" -->
            <tr
              class="row-dark"
              id="sale-table"
              v-for="sale in filteredSales"
              :key="sale.id"
              v-on:click="isOpen = true; getPizzasBySaleId(sale.saleId)"
            >
              <td scope="row" >{{ sale.saleId }}</td>
              <td scope="row">{{ sale.saleStatus }}</td>
              <td scope="row">{{ sale.saleTotal.toFixed(2) }}</td>
              <td scope="row">{{ deliveryConverter(sale.delivery) }}</td>
              <td scope="row">{{ sale.customerAddress }}</td>
              <td scope="row">{{ numberChecker(sale.ccLastFour) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="input-area" id="status-update">
        <label for="oname">Order#:</label>
        <input class="statusdrop" type="number" id="oname" v-model="saleId" />

        <select class="statusdrop" v-model="statusToUpdate">
          <option class="statusdrop" value="pending">Pending</option>
          <option class="statusdrop" value="canceled">Canceled</option>
          <option class="statusdrop" value="ready">Ready</option>
          <option class="statusdrop" value="complete">Complete</option>
        </select>
        <button
          class="statusdrop"
          @click="changeSaleById(saleId, statusToUpdate)"
        >
          Update Status
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import saleService from "../services/SaleService.js";
import pizzaService from "../services/PizzaService.js";
import sizeService from "../services/SizeService.js";
import crustService from "../services/CrustService.js";
import sauceService from "../services/SauceService.js";
import Modal from ".//PizzaModal.vue";
import {ref} from "vue";

export default {
  name: "sale-list",
  data() {
    return {
      filteredSales: [],
      fullSales: [],
      selectedCategory: "all",
      saleToChange: {},
      statusToUpdate: {},
      saleId: 0,
      searchKey: "",
      searchCategory: "",
      filteredPizzas: [],
      allPizzas: [],
      sizes: [],
      crusts: [],
      sauces: [],
      toppings: [],
      modalSaleId: "",

    };
  },
  components: {Modal},
  setup () {
    const isOpen = ref(false)
    return {isOpen}
  },
  methods: {
    //METHODS TO IMPORT FROM DATABASE
    getSales() {
      saleService.listSales().then((response) => {
        this.$store.commit("SET_SALES", response.data);
        this.populateSales();
      });
    },
    getPizzas() {
      pizzaService.getPizzas().then((response) => {
        this.$store.commit("SET_PIZZAS", response.data);
        this.populatePizzas();
      });
    },
    getSizes() {
      sizeService.listSizes().then((response) => {
        this.$store.commit("SET_SIZES", response.data);
        this.populateSizes();
      });
    },
    getCrusts() {
      crustService.listCrusts().then((response) => {
        this.$store.commit("SET_CRUSTS", response.data);
        this.populateCrusts();
      });
    },
    getSauces() {
      sauceService.listSauces().then((response) => {
        this.$store.commit("SET_SAUCES", response.data);
        this.populateSauces();
      });
    },
    //===NOT CURRENTLY USED===
    getToppings(pizza) {
      pizzaService.getPizzaToppings(pizza).then((response) => {
        this.$store.commit("SET_TOPPINGS", response.data);
        this.populateToppings();
      });
    },
    
    // POPULATE LISTS
    populateSales() {
      this.filteredSales = this.$store.state.sales;
      this.fullSales = this.$store.state.sales;
      this.sortList();
    },
    populatePizzas() {
      this.filteredPizzas = this.$store.state.pizzas;
      this.allPizzas = this.$store.state.pizzas;
    },

    populateSizes() {
      this.sizes = this.$store.state.sizes;
    },
    populateCrusts() {
      this.crusts = this.$store.state.crusts;
    },
    populateSauces() {
      this.sauces = this.$store.state.sauces;
    },
    //===NOT CURRENTLY USED====
    populateToppings() {
      this.toppings = this.$store.state.toppings;
    },

    //MODIFIERS
    updateList() {
      this.filteredSales = [];
      this.filteredSales =
        this.selectedCategory == "all"
          ? (this.filteredSales = this.fullSales)
          : this.fullSales.filter(
              (sale) => sale.saleStatus == this.selectedCategory
            );
    },
    changeStatus(sale) {
      this.saleToChange = sale;
      saleService.updateSale(this.saleToChange);
      setTimeout(() => {
        this.getSales();
      }, 1000);
    },
    changeSaleById(saleId, saleStatus) {
      let newSale = null;
      for (let sale of this.fullSales) {
        if (sale.saleId == saleId) {
          newSale = sale;
        }
      }
      newSale.saleStatus = saleStatus;
      this.changeStatus(newSale);
    },
    //SEARCH SECTION METHODS
    searchById() {
      this.filteredSales = [];
      this.filteredSales = this.fullSales.filter(
        (sale) => sale.saleId == this.searchKey
      );
    },
    searchByAddress() {
      this.filteredSales = [];
      this.filteredSales = this.fullSales.filter(
        (sale) => sale.customerAddress == this.searchKey
      );
    },
    searchByDelivery() {
      this.searchKey = this.searchKey == "true" ? true : false;
      this.filteredSales = [];
      this.filteredSales = this.fullSales.filter(
        (sale) => sale.delivery == this.searchKey
      );
    },
    searchSorter() {
      if (this.searchCategory == "saleId") {
        this.searchById();
      } else if (this.searchCategory == "customerAddress") {
        this.searchByAddress();
      } else if (this.searchCategory == "delivery") {
        this.searchByDelivery();
      }
    },
    //END SEARCH SECTION METHODS

    //A METHOD TO SORT LIST IN ASCENDING ORDER
    sortList() {
      return this.fullSales.sort((a, b) => {
        if (a.saleId < b.saleId) return -1;
        if (a.saleId > b.saleId) return 1;
        return 0;
      });
    },
    //GET PIZZAS BY SALE ID
    getPizzasBySaleId(saleId){
        this.filteredPizzas = this.allPizzas.filter(
        (pizza) => pizza.saleId == saleId
      );
      this.formattedForModal();

    },
    formattedForModal(){
      for(let pizza of this.filteredPizzas){
        this.modalSaleId = pizza.saleId;
      }
    },
    // THIS FUNCTION FORMATS A STRING WITH PIZZA ORDER INFO, NOT CURRENTLY USED
    formatPizzaList(){
        //let saleId = 0;
        let pizzaId = 0;
        let size = 0;
        let crust = 0;
        let sauce = 0;
        let toppings = [];
        let formattedToppings = "";
        let finalOrder = "";
        for(let pizza of this.filteredPizzas){
          //saleId = pizza.saleId;
          pizzaId = pizza.pizzaId;
          size = pizza.sizeId;
          crust = pizza.crustId;
          sauce = pizza.sauceId;
          toppings = pizza.toppings;
          this.toppings = pizza.toppings;
           for(let topping of toppings){
            formattedToppings = formattedToppings + topping.toppingName + "\n";
        }
        let compiledPizza = "Pizza ID: " + pizzaId + "\n" + "Size: " + this.sizeNamer(size) + "\n" + "Crust: " + this.crustNamer(crust) + "\n" + "Sauce: " + this.sauceNamer(sauce) + "\n\n" + "Toppings:\n" + formattedToppings;
        finalOrder = finalOrder + compiledPizza + "============\n";
        }
        return finalOrder;
    },
  
  //ASSIGNING NAMES TO INGREDIENT ID'S
    sizeNamer(sizeId){
      let sizeName = "";
      for(let size of this.sizes){
        if (sizeId == size.pizzaSizeId){
         sizeName = size.sizeName;
       }
      }
      return sizeName;
    },
    crustNamer(crustId){
      let crustName = "";
      for(let crust of this.crusts){
        if (crustId == crust.crustId){
         crustName = crust.crustName;
       }
      } 
      return crustName;
    },
    sauceNamer(sauceId){
      let sauceName = "";
      for(let sauce of this.sauces){
        if (sauceId == sauce.sauceId){
         sauceName = sauce.sauceName;
       }
      } 
      return sauceName;
    },
    //FORMATTING FUNCTIONS
    numberChecker(num){
      let numString = String(num);
      if (numString.length < 4){
        let missingNums = 4 - numString.length;
        for (let i = 0; i < missingNums; i++) {
          numString = "0" + numString; 
          
        }
      }
      return numString;
    },
    deliveryConverter(bool) {
      return bool == true? "Yes" : "No";
    }
},
  created() {
    this.getSales();
    this.getPizzas();
    this.getSizes();
    this.getCrusts();
    this.getSauces();
  },
};
</script>

<style scoped>
* {
  color: white;
}

#show-pending {
  color: black;
}

.main-area{
  margin-left: 20vw;
  margin-right: 20vw;
  background: rgba(0, 0, 0, 0.397);
  border-radius: 20px;
}

table {
  display: block;
  border: 2px solid rgb(255, 255, 255);
  margin-top: 20px;
  margin-left: 2em;
  margin-right: 2em;
  
  
}

tbody {
  display: block;
  overflow-y: scroll;
  height: 400px;
  width: auto;
  
  
}

.row-dark {
  background-color: rgb(94, 94, 94);
}

.row-light {
  background-color: rgb(160, 160, 160);
  color: black;
}

th {
  padding-left: 1vw;
  padding-right: 1vw;
  text-align: center;
  font-size: 18px;
  background-color: rgb(58, 58, 58);
  width: 100em;
}



td {
  padding-left: 1vw;
  padding-right: 1vw;
  text-align: center;
  font-size: 17px;
  border-bottom: solid 2px black;
  width: 100em;
  
}

.statusdrop {
  color: black;
}

#reset-button {
  margin-left: 2em;
}

#status-update {
  padding-top: 10px;
  margin-left: 2em;
}

#top-span{
  margin-left: 2em;
  margin-top: 3px;
}

#search-area {
  margin-left: 2em;
  margin-top: 3px;
}

.pizza-title {
   font-weight: bold;
   color:hotpink;
}






</style>