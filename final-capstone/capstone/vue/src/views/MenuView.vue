<template>
  <body>
    <NavBar />
    <header class="heading">
      <div class="container">
        <div class="ParallaxContainer">
          <slot />
          <div class="container-fluid py-5 text-center">
            <h1 class="display-5 fw-bold">PLACE YOUR CUSTOM ORDER HERE</h1>
            <div class="container text-center">
              <p class="col-md-8 fs-4" id="order-instructions">
                Use the checkboxes below to select what toppings you would like
                on your pizza. Our staff members will process your order, and it
                should be ready for pickup in the next thirty minutes.
              </p>
            </div>
            <div class="content-box">
              <div
                class="row justify-content-center align-items-center"
                id="wrapper"
              >
                <div
                  class="
                    row row-cols-2 row-cols-lg-5
                    g-2 g-lg-3
                    justify-content-center
                  "
                  id="wrapper1"
                >
                  <div
                    class="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingOne">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          Toppings
                        </button>
                        <p id="toppings-p-tag">
                          Choose Your Toppings ($1.00 Each, $1.50 Specialty)
                        </p>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          <div class="d-grid gap-2" id="toppings">
                            <div class="container-topping-button"></div>
                          </div>
                          <ToppingsList />
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingTwo">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          Sauce
                        </button>
                        <p id="toppings-p-tag">Choose Your Sauce</p>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          <div class="d-grid gap-2" id="toppings">
                            <div class="container-topping-button"></div>
                          </div>
                          <SauceList />
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          Crust
                        </button>
                        <p id="toppings-p-tag">Choose Your Crust</p>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          <div class="d-grid gap-2" id="toppings">
                            <div class="container-topping-button"></div>
                          </div>
                          <CrustList />
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingFour">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                        >
                          Size
                        </button>
                        <p id="size-p-tag">Choose Your Size (Pricing Varies)</p>
                      </h2>
                      <div
                        id="flush-collapseFour"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          <div class="d-grid gap-2" id="toppings">
                            <div class="container-topping-button"></div>
                          </div>
                          <SizeList />
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingFive">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFive"
                          aria-expanded="false"
                          aria-controls="flush-collapseFive"
                        >
                          Cut Style
                        </button>
                        <p id="size-p-tag">Choose Your Cut Style</p>
                      </h2>
                      <div
                        id="flush-collapseFive"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingFive"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          <div class="d-grid gap-2" id="toppings">
                            <div class="container-topping-button"></div>
                          </div>
                          <div class="cut-list">
                            <div class="toppings-container">
                              <div class="toppings-div">
                                <img
                                  src="../assets/square.jpg"
                                  class="pepperoni-pic"
                                />
                                <input
                                  type="radio"
                                  v-model="pizza.squareCut"
                                  value="true"
                                  id="square-cut"
                                  class="form-check-input5"
                                />
                                <label class="label" for="square-cut"
                                  >Square Cut</label
                                >
                              </div>
                            </div>
                            <div class="toppings-container">
                              <div class="toppings-div">
                                <img
                                  src="../assets/pie.jpg"
                                  class="pepperoni-pic"
                                />
                                <input
                                  type="radio"
                                  v-model="pizza.squareCut"
                                  value="false"
                                  id="pie-cut"
                                  class="form-check-input5"
                                />
                                <label class="label" for="pie-cut"
                                  >Pie Cut</label
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <strong class="add-to-order-price">{{
        formatPrice(totalPrice())
      }}</strong>
      <button
        @click="placeOrder"
        type="button"
        id="custom-menu-button"
        class="btn btn-primary btn-lg"
      >
        ADD TO ORDER
      </button>
    </header>
    <!-- Services-->
    <section class="page-section" id="order-a-specialty">
      <div class="container">
        <div class="p-5 mb-4 bg-body-tertiary rounded-3" id="specialty-box">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold" id="pizza-box">
              ORDER A SPECIALTY PIZZA
            </h1>
            <p class="col-md-8 fs-4" id="pizza-box">
              Select your specialty pizza below. Our staff members will process
              your order, and it should be ready for pickup in the next thirty
              minutes.
            </p>
            <div class="album py-5 bg-body-tertiary">
              <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  <div
                    class="col"
                    v-for="specialty in this.$store.state.specialties"
                    :key="specialty.specialtyId"
                  >
                    <div class="card shadow-sm" v-if="specialty.available">
                      <div></div>

                      <img
                        class=""
                        :src="require(`@/assets/${specialty.image}`)"
                        alt=""
                        width="100%"
                        height="225"
                        focusable="false"
                      />
                      <div class="card-body">
                        <h6>{{ specialty.pizzaName }}</h6>
                        <p class="card-text">
                          {{ specialty.description }}
                        </p>
                        <p>Price: ${{ Number(specialty.price).toFixed(2) }}</p>
                        <div
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                          "
                        >
                          <div class="btn-group">
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                              v-on:click="specialtyToPizza(specialty)"
                            >
                              CLICK TO ORDER
                            </button>
                          </div>
                          <div class="btn-group">
                            <div class="btn btn-sm btn-outline-secondary">
                              <input
                                type="checkbox"
                                v-model="specialty.squareCut"
                              />
                              <label for="square-cut">&nbsp; SQUARE CUT </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="specialty-menu">
      <div class="container py-4">
        <header class="pb-3 mb-4 border-bottom">
          <a
            href="/"
            class="
              d-flex
              align-items-center
              text-body-emphasis text-decoration-none
            "
          >
          </a>
        </header>
      </div>
    </div>
    <Footer :text="`Copyright © Pizza Pazza 2023`" />
  </body>
</template>

<script>
import ToppingsList from "../components/ToppingsList.vue";
import SauceList from "../components/SauceList.vue";
import CrustList from "../components/CrustList.vue";
import SizeList from "../components/SizeList.vue";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import SpecialtyService from "../services/SpecialtyService.js";
// import CrustService from "../services/CrustService.js";
// import SauceService from "../services/SauceService.js";
// import SizeService from '../services/SizeService';
// import PizzaService from '../services/PizzaService.js'

export default {
  components: { ToppingsList, SauceList, CrustList, SizeList, NavBar, Footer },
  name: "menu-view",
  data() {
    return {
      pizza: {
        pizzaId: 0,
        saleId: 0,
        crustId: 0,
        sauceId: 0,
        sizeId: 0,
        toppings: [],
        price: 0,
        squareCut: false,
      },
      specialty: {
        specialtyId: "",
        pizzaName: "",
        crustId: 0,
        sauceId: 0,
        sizeId: 0,
        toppings: [],
        price: 0,
        available: "",
      },
      data: {
        height: 0,
        width: 0,
        scrollFactor: 0,
      },
    };
  },
  computed: {
    totalCheckoutPrice() {
      let totalCheckoutPrice = 0;

      this.$store.state.checkout.pizzas.forEach((pizza) => {
        totalCheckoutPrice += pizza.price;
      });

      return totalCheckoutPrice;
    },
  },
  methods: {
    formatPrice(value) {
      if (value == 0) {
        return "$" + value;
      }
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
      return formatter.format(value);
    },
    addPizza() {
      this.pizza.crustId = this.$store.state.pizza.crust.crustId;
      this.pizza.sauceId = this.$store.state.pizza.sauce.sauceId;
      this.pizza.sizeId = this.$store.state.pizza.size.pizzaSizeId;
      this.pizza.toppings = this.$store.state.pizza.toppings;
      this.pizza.price = this.totalPrice();

      this.$store.commit("PUSH_PIZZAS", this.pizza);

      this.$router.push({ name: "checkout" });
      // PizzaService.addPizza(this.$store.state.pizza)
      //   .then((response) => {
      //     if (response.status === 201) {
      //       this.router.push({ name: "checkout" });
      //     }
      //   })
      //   .catch((error) => {
      //     if (error.response) {
      //       this.errorMsg =
      //         "Error adding Pizza. Response received was " +
      //         error.response.statusText +
      //         ".";
      //     } else if (error.request) {
      //       this.errorMsg = "Error adding Pizza. Server could not be reached";
      //     } else {
      //       this.errorMsg = "Error adding Pizza. Request could not be created";
      //     }
      //   });
    },
    placeOrder() {
      this.addPizza();
    },
    specialtyToPizza(specialty) {
      this.pizza.crustId = specialty.crustId;
      this.pizza.sauceId = specialty.sauceId;
      this.pizza.sizeId = specialty.sizeId;
      this.pizza.toppings = specialty.toppings;
      this.pizza.price = specialty.price;
      this.pizza.squareCut = specialty.squareCut;
      this.$store.commit("PUSH_PIZZAS", this.pizza);

      this.$router.push({ name: "checkout" });
    },
    getSpecialties() {
      SpecialtyService.listSpecialties().then((response) => {
        this.$store.commit("SET_SPECIALTIES", response.data);
      });
    },
    totalPrice() {
      let totalPrice =
        this.$store.state.pizza.sauce.price +
        this.$store.state.pizza.crust.price +
        this.$store.state.pizza.size.price;

      this.$store.state.pizza.toppings.forEach((topping) => {
        if (topping.premium) {
          totalPrice += 1.5;
        } else {
          totalPrice += 1;
        }
      });
      return totalPrice;
    },
  },
  created() {
    this.getSpecialties();
  },
};
</script>

<style>
.toppings-div {
  display: flex;
  align-items: center;
}
.form-check-input5 {
  margin-left: 2rem;
}
.toppings-container {
  border: 1px solid black;
  display: flex;
  justify-content: left;
  align-items: center;
  white-space: nowrap;
}
.pepperoni-pic {
  width: 50px;
  height: 50px;
  float: left;
}
#click-to-order-button {
}
#specialty-box {
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/6/6d/The_Chicago_Theatre_at_night_%2849606398196%29.jpg);
  background-size: 1400px;
  color: white;
  background-attachment: fixed;
  color: black;
}
.ParallaxContainer {
  overflow: hidden;
}
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
#pizza-box {
  padding-bottom: 2rem;
}
@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
@media (min-width: 1200px) {
  .display-5 {
    font-size: 3rem;
    text-align: center;
    color: white;
  }
}
@media (min-width: 1200px) {
  .fs-4 {
    text-align: center;
    margin: 0 auto;
    max-width: 800px;
    text-shadow: 2px 4px 4px rgba(46, 91, 173, 0.6);
    color: white;
  }
}
.btn-group {
  background-color: #ffc800;
  /* color: white !important; */
  display: flex;
  flex-direction: row;
}
.b-example-divider {
  width: 100%;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.1rem 0.1rem rgba(0, 0, 0, 0.05);
}
.custom-menu {
  width: 100%;
  max-width: 68rem;
}
.specialty-menu {
  width: 100%;
  max-width: 68rem;
}
.container-fluid {
  box-sizing: content-box;
}

.toppings-div {
  display: flex;
  align-items: center;
}

#wrapper {
  padding-right: 15rem;
  padding-bottom: 2.5rem;
  padding-left: 15rem;
}

#wrapper1 {
  background-color: #d6a802d8;
  padding: 1.5rem;
  padding-top: 0.2rem;
}

#custom-menu-button {
  margin-top: 3rem;
}
#order-instructions {
  text-align: center;
  margin: 0 auto;
  padding-bottom: 2.4rem;
  padding-top: 1rem;
}
.btn-primary {
  --bs-btn-color: #fff !important;
  --bs-btn-bg: #ffc800 !important;
  --bs-btn-border-color: #ffc800 !important;
  --bs-btn-hover-color: #fff !important;
  --bs-btn-hover-bg: #d9aa00 !important;
  --bs-btn-hover-border-color: #cca000 !important;
  --bs-btn-focus-shadow-rgb: 255, 208, 38 !important;
  --bs-btn-active-color: #fff !important;
  --bs-btn-active-bg: #cca000 !important;
  --bs-btn-active-border-color: #bf9600 !important;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125) !important;
  --bs-btn-disabled-color: #fff !important;
  --bs-btn-disabled-bg: #ffc800 !important;
  --bs-btn-disabled-border-color: #ffc800 !important;
  font-size: 1.5rem !important;
  font-weight: 700 !important;
}
#order-a-specialty {
  background-image: url("https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80");
}
.options-container {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
}

.option {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  padding-bottom: 1rem;
}

.option img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
}

.option p {
  margin-top: 0.5rem;
}

#custom-menu-button {
  margin-top: -0.5rem;
}

.container-topping-button {
  display: flex;
  padding: 16px;
  align-items: center;
  box-sizing: inherit;
}
#accordionFlushExample {
  width: 100%;
  padding-top: 1.3rem;
}

.label {
  float: left;
  padding-left: 2rem;
}
.collapsed {
  font-weight: 900 !important;
  text-transform: uppercase !important;
  display: flex;
  align-items: center;
  width: 100%;
}
.collapse {
  font-weight: 900;
  text-transform: uppercase;
  display: flex;
  align-items: center;
}
#toppings-p-tag {
  display: flex;
  padding-left: 1.2rem;
  font-size: 1rem;
  margin-top: -0.5rem;
  font-weight: normal;
  font-weight: 200;
}
#size-p-tag {
  display: flex;
  padding-left: 1.2rem;
  padding-bottom: 1rem;
  font-size: 1rem;
  margin-top: -0.5rem;
  font-weight: 200;
}
.add-to-order-price {
  padding-right: 1rem;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 1.5rem !important;
}
.cut-container {
  display: flex;
  flex-direction: column;
}

.cut-div {
  display: flex;
  align-items: center;
}

.accordion-button:not(.collapsed) {
  padding-bottom: 1rem;
  font-size: 1rem;
  font-weight: 900;
  text-transform: uppercase;
  color: black;
  background-color: var(--bs-accordion-active-bg);
}
</style>
