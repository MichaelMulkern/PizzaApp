import axios from "axios";  

const http = axios.create({
    baseURL: "http://localhost:9000"
});

export default {

    listSizes(){
        return http.get('/pizza-size');
    },

    getSizeById(id) {
        return http.get(`/pizza-size/${id}`);
    },

    addSize(size){
        return http.post('/pizza-size', size)
    },

    updateSize(size){
        return http.put(`/pizza-size/${size.pizzaSizeId}`, size)
    },

    deleteSize(id){
        return http.delete(`/pizza-size/${id}`)
    }
}