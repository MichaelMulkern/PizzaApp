import axios from "axios";  

const http = axios.create({
    baseURL: "http://localhost:9000"
});

export default {

    getPizzas(){
        return http.get('/pizza');
    },

    getPizzaToppings(pizza){
        return http.get('/pizza-toppings', pizza);
    }

}