import axios from "axios";  

const http = axios.create({
    baseURL: "http://localhost:9000"
});

export default {

    listSpecialties(){
        return http.get('/specialty-pizza');
    },

    getSpecialtyById(specialtyId) {
        return http.get(`/specialty-pizza/${specialtyId}`);
    },

    addSpecialty(specialty){
        return http.post('/specialty-pizza', specialty)
    },

    updateSpecialty(specialty){
        return http.put(`/specialty-pizza/${specialty.specialtyId}`, specialty)
    },

    deleteSpecialty(specialtyId){
        return http.delete(`/specialty-pizza/${specialtyId}`)
    }
}