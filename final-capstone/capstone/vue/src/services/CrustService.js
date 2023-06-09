import axios from "axios";  

const http = axios.create({
    baseURL: "http://localhost:9000"
});

export default {

    listCrusts(){
        return http.get('/crusts');
    },

    getCrustById(id) {
        return http.get(`/crusts/${id}`);
    },

    addCrust(crust){
        return http.post('/crusts', crust)
    },

    updateCrust(crust){
        return http.put(`/crusts/${crust.crustId}`, crust)
    },

    deleteCrust(id){
        return http.delete(`/crusts/${id}`)
    }
}