import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

/*
 * The authorization header is set for axios when you login but what happens when you come back or
 * the page is refreshed. When that happens you need to check for the token in local storage and if it
 * exists you should set the header so that it will be attached to each request
 */
const currentToken = localStorage.getItem('token')
const currentUser = JSON.parse(localStorage.getItem('user'));

if (currentToken != null) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
}

export default new Vuex.Store({
  state: {
    checkout :
    { sale : {},
      pizzas : []

    },
    pizza: {
      pizzaId: "",
      saleId: "",
      crust: {price : 0},
      sauce: {price : 0},
      size: {price : 0},
      toppings: [],
      price: ""
    },
    toppings: [],
    specialties: [],
    sizes: [],
    sauces: [],
    crusts: [],
    sales: [],
    token: currentToken || '',
    user: currentUser || {},
    pizzas: []
  },
  mutations: {
    SET_PIZZAS(state, data) {
      state.pizzas = data;
    },
    SET_SALES(state, data) {
      state.sales = data;
    },

    SET_TOPPINGS(state, data) {
      state.toppings = data;
    },

    SET_SPECIALTIES(state, data) {
      state.specialties = data;
    },

    SET_SIZES(state, data) {
      state.sizes = data;
    },

    SET_SAUCES(state, data) {
      state.sauces = data;
    },

    SET_CRUSTS(state, data) {
      state.crusts = data;
    },

    SET_AUTH_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    },
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    LOGOUT(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.token = '';
      state.user = {};
      axios.defaults.headers.common = {};
    },
    ADD_TOPPINGS(state, data) {
      state.pizza.toppings = data;
    },
    ADD_SAUCE(state, data) {
      state.pizza.sauce = data;
    },
    ADD_CRUST(state, data) {
      state.pizza.crust = data;
    },
    ADD_SIZE(state, data) {
      state.pizza.size = data;
    },
    PUSH_PIZZAS(state, data) {
      state.checkout.pizzas.push(data);
    },
    
  }
})
