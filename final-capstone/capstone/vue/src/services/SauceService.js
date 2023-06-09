import axios from "axios";  

const http = axios.create({
    baseURL: "http://localhost:9000"
});

export default {

    listSauces(){
        return http.get('/sauce');
    },

    getSauceById(id) {
        return http.get(`/sauce/${id}`);
    },

    addSauce(sauce){
        return http.post('/sauce', sauce)
    },

    updateSauce(sauce){
        return http.put(`/sauce/${sauce.sauceId}`, sauce)
    },

    deleteSauce(id){
        return http.delete(`/sauce/${id}`)
    }
}