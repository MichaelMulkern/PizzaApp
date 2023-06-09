import axios from "axios";  

const http = axios.create({
    baseURL: "http://localhost:9000"
});

export default {

    listSales(){
        return http.get('/sale');
    },

    getSaleById(id) {
        return http.get(`/sale/${id}`);
    },

    addSale(sale){
        return http.post('/sale', sale)
    },

    updateSale(sale){
        return http.put(`/sale/${sale.saleId}`, sale)
    },

    deleteSale(id){
        return http.delete(`/sale/${id}`)
    },

    sendPayloadWrapper(order){
        return http.post('/order', order)
    }
}