import axios from "axios";

// const http = axios.create({
//     baseURL: "http://localhost:9000"

const baseURL = "http://localhost:9000"; // Define the baseURL variable

const http = axios.create({
    baseURL: baseURL

});

export default {

    listToppings() {
        // return http.get('/toppings');
        return axios.get(`${baseURL}/toppings`);
    },

    getToppingById(toppingId) {
        return http.get(`/toppings/${toppingId}`);
    },

    addTopping(topping) {
        return http.post('/toppings', topping)
    },

    updateTopping(topping) {
        return http.put(`/toppings/${topping.toppingId}`, topping)
    },

    deleteTopping(toppingId) {
        return http.delete(`/toppings/${toppingId}`)
    }
}