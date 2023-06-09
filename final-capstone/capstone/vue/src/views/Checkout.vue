<template>
  <div class="checkout" id="checkout-background">
    <NavBar />
    <div class="container py-4">
      <div class="header-container">
        <header
          class="
            d-flex
            flex-wrap
            align-items-center
            justify-content-center justify-content-md-between
            py-3
            mb-4
            border-bottom
          "
        ></header>
      </div>
      <div class="checkout-container1">
        <body class="bg-body-tertiary">
          <div class="checkout-container checkout-background">
            <main class="checkout-container2">
              <div class="py-5 text-center">
                <h2>CHECKOUT</h2>
              </div>
              <div class="row g-5" style="padding: 1rem">
                <div class="col-md-5 col-lg-4 order-md-last cart-container">
                  <h4
                    class="
                      d-flex
                      justify-content-between
                      align-items-center
                      mb-3
                    "
                  >
                    <span class="text-primary cart-button">YOUR CART</span>
                    <span class="badge bg-primary rounded-pill">{{
                      this.$store.state.checkout.pizzas.length
                    }}</span>
                  </h4>
                  <ul class="list-group mb-3">
                    <h4>Pizzas</h4>
                    <div
                      v-for="(pizza, index) in this.$store.state.checkout
                        .pizzas"
                      :key="pizza.id"
                      class="
                        list-group-item
                        d-flex
                        justify-content-between
                        lh-sm
                      "
                    >
                      <ul>
                        <h2>Pizza {{ index + 1 }}</h2>
                        <h4>Toppings</h4>
                        <li
                          v-for="topping in pizza.toppings"
                          :key="topping.toppingId"
                          class="
                            list-group-item
                            d-flex
                            justify-content-between
                            lh-sm
                          "
                        >
                          <div>
                            <h6 class="my-0">{{ topping.toppingName }}</h6>
                          </div>
                          <span class="text-body-secondary"
                            >${{ topping.premium ? "1.50" : "1.00" }}</span
                          >
                        </li>
                        <h4>Sauce</h4>
                        <li
                          class="
                            list-group-item
                            d-flex
                            justify-content-between
                            lh-sm
                          "
                        >
                          <div>
                            <h6 class="my-0">
                              {{ getSauceName(pizza.sauceId) }}
                            </h6>
                          </div>
                        </li>
                        <h4>Crust</h4>
                        <li
                          class="
                            list-group-item
                            d-flex
                            justify-content-between
                            lh-sm
                          "
                        >
                          <div>
                            <h6 class="my-0">
                              {{ getCrustName(pizza.crustId) }}
                            </h6>
                          </div>
                        </li>
                        <h4>Size</h4>
                        <li
                          class="
                            list-group-item
                            d-flex
                            justify-content-between
                            bg-body-tertiary
                          "
                        >
                          <div>
                            <h6 class="my-0">
                              {{ getSizeName(pizza.sizeId) }}
                            </h6>
                          </div>
                          <!-- <span>{{
                          formatPrice(this.$store.state.pizza.size.price)
                        }}</span> -->
                        </li>
                        <h4>Cut</h4>
                        <li
                          class="
                            list-group-item
                            d-flex
                            justify-content-between
                            bg-body-tertiary
                          "
                        >
                          <div>
                            <h6 class="my-0">
                              {{ pizza.squareCut ? "Square Cut" : "Pie Cut" }}
                            </h6>
                          </div>
                          <!-- <span>{{
                          formatPrice(this.$store.state.pizza.size.price)
                        }}</span> -->
                        </li>
                        <h4>Pizza Price</h4>
                        <li
                          class="
                            list-group-item
                            d-flex
                            justify-content-between
                            bg-body-tertiary
                          "
                        >
                          <div>
                            <h6 class="my-0">
                              {{ formatPrice(pizza.price) }}
                            </h6>
                          </div>
                          <!-- <span>{{
                          formatPrice(this.$store.state.pizza.size.price)
                        }}</span> -->
                        </li>
                      </ul>
                    </div>
                    <h4>Total Price</h4>
                    <li
                      class="
                        list-group-item
                        d-flex
                        justify-content-between
                        bg-body-tertiary
                      "
                    >
                      <div>
                        <h6 class="my-0">Total (USD)</h6>
                      </div>
                      <strong>{{ formatPrice(totalPrice) }}</strong>
                    </li>
                  </ul>
                </div>
                <div class="col-md-7 col-lg-8">
                  <h4 class="mb-3">Billing address</h4>
                  <form class="needs-validation" novalidate>
                    <div class="row g-3">
                      <div class="col-sm-6">
                        <label
                          for="firstName"
                          class="form-label"
                          style="color: white"
                          >First name</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="firstName"
                          placeholder=""
                          value=""
                          required
                        />
                        <div class="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>

                      <div class="col-sm-6">
                        <label
                          for="lastName"
                          class="form-label"
                          style="color: white"
                          >Last name</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="lastName"
                          placeholder=""
                          value=""
                          required
                        />
                        <div class="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>

                      <div class="col-12">
                        <label
                          for="email"
                          class="form-label"
                          style="color: white"
                          >Email
                          <span class="text-body-secondary" style="color: white"
                            >(Optional)</span
                          ></label
                        >
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="you@example.com"
                        />
                        <div class="invalid-feedback">
                          Please enter a valid email address for shipping
                          updates.
                        </div>
                      </div>

                      <div class="col-12">
                        <label
                          for="address"
                          style="color: white"
                          class="form-label"
                          >Address</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="address"
                          placeholder="1234 Main St"
                          v-model="addressOne"
                          required
                        />
                        <div class="invalid-feedback">
                          Please enter your address.
                        </div>
                      </div>

                      <div class="col-12">
                        <label
                          for="address2"
                          style="color: white"
                          class="form-label"
                          >Address 2
                          <span class="text-body-secondary"
                            >(Optional)</span
                          ></label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="address2"
                          placeholder="Apartment or suite"
                          v-model="addressTwo"
                        />
                      </div>

                      <div class="col-md-3">
                        <label for="zip" style="color: white" class="form-label"
                          >Zip</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="zip"
                          placeholder=""
                          v-model="zipCode"
                          required
                        />
                        <div class="invalid-feedback">Zip code required.</div>
                      </div>
                    </div>

                    <hr class="my-4" />

                    <div class="col-md-4">
                      <label
                        for="delivery"
                        style="color: white"
                        class="form-label"
                        >Delivery Options</label
                      >
                      <select
                        class="form-select"
                        id="delivery"
                        v-model="isDelivery"
                        required
                      >
                        <option value="">Choose...</option>
                        <option value="true">Delivery</option>
                        <option value="false">Pickup</option>
                      </select>
                      <div class="invalid-feedback">
                        Please select delivery or pickup.
                      </div>
                    </div>

                    <hr class="my-4" />

                    <h4 class="mb-3" style="color: white">Payment</h4>

                    <div class="my-3">
                      <div class="form-check">
                        <input
                          id="credit"
                          name="paymentMethod"
                          type="radio"
                          class="form-check-input"
                          checked
                          required
                        />
                        <label
                          class="form-check-label"
                          for="credit"
                          style="color: white"
                          >Credit card</label
                        >
                      </div>
                      <div class="form-check">
                        <input
                          id="debit"
                          name="paymentMethod"
                          type="radio"
                          class="form-check-input"
                          required
                        />
                        <label
                          class="form-check-label"
                          for="debit"
                          style="color: white"
                          >Debit card</label
                        >
                      </div>
                    </div>

                    <div class="row gy-3">
                      <div class="col-md-6">
                        <label
                          for="cc-name"
                          class="form-label"
                          style="color: white"
                          >Name on card</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="cc-name"
                          placeholder=""
                          required
                        />
                        <small class="text-body-secondary" style="color: white"
                          >Full name as displayed on card</small
                        >
                        <div class="invalid-feedback">
                          Name on card is required
                        </div>
                      </div>

                      <div class="col-md-6">
                        <label
                          for="cc-number"
                          style="color: white"
                          class="form-label"
                          >Credit card number</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="cc-number"
                          placeholder=""
                          v-model="cardNumber"
                          required
                        />
                        <div class="invalid-feedback">
                          Credit card number is required
                        </div>
                      </div>

                      <div class="col-md-3">
                        <label
                          for="cc-expiration"
                          style="color: white"
                          class="form-label"
                          >Expiration</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="cc-expiration"
                          placeholder=""
                          required
                        />
                        <div class="invalid-feedback">
                          Expiration date required
                        </div>
                      </div>

                      <div class="col-md-3">
                        <label
                          for="cc-cvv"
                          style="color: white"
                          class="form-label"
                          >CVV</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="cc-cvv"
                          placeholder=""
                          required
                        />
                        <div class="invalid-feedback">
                          Security code required
                        </div>
                      </div>
                    </div>
                    <hr class="my-4" />
                    <button
                      class="w-50 btn btn-primary btn-lg text-uppercase"
                      type="button"
                      v-on:click="createSale()"
                    >
                      Place Order
                    </button>
                  </form>
                </div>
              </div>
            </main>
            <footer
              class="my-5 pt-5 text-body-secondary text-center text-small"
            >
              <p class="mb-1">&copy; 2023 Pizza Pazza</p>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Privacy</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Support</a></li>
              </ul>
            </footer>
          </div>
        </body>
      </div>
    </div>
    <Footer :text="`Copyright © Pizza Pazza 2023`" />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import saleService from "../services/SaleService.js";
import crustService from "../services/CrustService.js";
import sauceService from "../services/SauceService.js";
import sizeService from "../services/SizeService";

export default {
  components: { NavBar, Footer },
  name: "checkout",
  data() {
    return {
      isDelivery: true,
      addressOne: "",
      addressTwo: "",
      zipCode: 0,
      cardNumber: 0,
      pizzas: [],
      sizes: [],
      crusts: [],
      sauces: [],
      saleId: 0,
    };
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;

      this.$store.state.checkout.pizzas.forEach((pizza) => {
        totalPrice += pizza.price;
      });

      return totalPrice;
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
    createSale() {
      let fullAddress =
        this.addressOne + " " + this.addressTwo + " " + this.zipCode;
      let cardString = String(this.cardNumber).substr(-4);
      let lastFour = Number(cardString);

      this.$store.state.checkout.sale = {
        saleStatus: "pending",
        saleTotal: 0,
        delivery: this.isDelivery,
        customerAddress: fullAddress,
        ccLastFour: lastFour,
      };

      console.log(this.$store.state.checkout);

      saleService
        .sendPayloadWrapper(this.$store.state.checkout)
        .then((response) => {
          if (response.status == 201) {
            this.saleId = response.data;
          }
          window.alert("Your order has been placed. Order: #" + this.saleId);
          this.$store.state.checkout = {
            sale: {},
            pizzas: [],
          };
          this.$router.push({ name: "home" });
        });
    },
    listCheckoutPizzas() {
      this.pizzas = this.$store.state.checkout.pizzas;
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
    getSauceName(id) {
      let sauceName = "";
      for (let sauce of this.sauces) {
        if (id == sauce.sauceId) {
          sauceName = sauce.sauceName;
        }
      }
      return sauceName;
    },
    getSizeName(id) {
      let sizeName = "";
      for (let size of this.sizes) {
        if (id == size.pizzaSizeId) {
          sizeName = size.sizeName;
        }
      }
      return sizeName;
    },
    getCrustName(id) {
      let crustName = "";
      for (let crust of this.crusts) {
        if (id == crust.crustId) {
          crustName = crust.crustName;
        }
      }
      return crustName;
    },
  },
  created() {
    this.getSizes();
    this.getCrusts();
    this.getSauces();
  },
};
</script>

<style>
.text-body-secondary {
  color: rgb(207, 207, 207) !important;
}
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  width: 100%;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.btn-bd-primary {
  --bd-violet-bg: #712cf9;
  --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

  --bs-btn-font-weight: 600;
  --bs-btn-color: var(--bs-white);
  --bs-btn-bg: var(--bd-violet-bg);
  --bs-btn-border-color: var(--bd-violet-bg);
  --bs-btn-hover-color: var(--bs-white);
  --bs-btn-hover-bg: #6528e0;
  --bs-btn-hover-border-color: #6528e0;
  --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
  --bs-btn-active-color: var(--bs-btn-hover-color);
  --bs-btn-active-bg: #5a23c8;
  --bs-btn-active-border-color: #5a23c8;
}
.bd-mode-toggle {
  z-index: 1500;
}
.py-5 text-center {
  color: black;
}
.checkout-container {
  color: white;
  /* background-color: white; */
  padding: 1rem;
  margin-top: 6rem;
}
.header-container {
  background-color: black;
  text-transform: uppercase;
  margin-top: -5rem;
}
.checkout-background {
  margin-top: 14rem;
  background-image: url("https://images.unsplash.com/photo-1604950692765-2775b1a6c020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80");
  background-size: 100%;
  background-repeat: no-repeat;
}
.checkout-container h2 {
  background: rgba(99, 99, 99, 0.562);
  border-radius: 10px;
  padding: 1rem;
}
#checkout-background {
  background-image: url("https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80");
}
form {
  background: rgba(126, 126, 126, 0.562) !important;
}
.text-primary.cart-button {
  color: #ffc800 !important;
}
.badge.bg-primary {
  background-color: #ffc800 !important;
}
.btn.btn-secondary {
  background-color: #ffc800 !important;
  border-color: #ffc800 !important;
}
.cart-container {
  color: white;
  background: rgba(63, 63, 63, 0.562);
  border-radius: 10px;
  margin-top: 5.7rem;
}
.toppings-container {
  width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  margin: 1rem;
  width: 95%;
}
.sauce-container {
  width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  margin: 1rem;
  width: 95%;
}

.crust-container {
  width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  margin: 1rem;
  width: 95%;
}

.size-container {
  width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  margin: 1rem;
  width: 95%;
}
.element.style {
  padding: 1rem;
}
</style>
