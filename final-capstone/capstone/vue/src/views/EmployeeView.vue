<template>
  <div class="employee-view">
    <h1 id="main-banner">EMPLOYEE HOME</h1>
       <div class="top-menu">
    <router-link class="top-links" v-bind:to="{ name: 'edit-crust' }">&#x2736; Edit Crust &#x2736;</router-link>
    <router-link class="top-links" v-bind:to="{ name: 'edit-sauce' }">&#x2736; Edit Sauce &#x2736;</router-link>
    <router-link class="top-links" v-bind:to="{ name: 'edit-size' }">&#x2736; Edit Size &#x2736;</router-link>
    <router-link class="top-links" v-bind:to="{ name: 'edit-toppings' }">&#x2736; Edit Toppings &#x2736;</router-link>
    <router-link class="top-links" v-bind:to="{ name: 'edit-specialties' }">&#x2736; Edit Specialty Pizza &#x2736;</router-link>
    </div>
    <sale-list />
    <div id="home-link">
    <router-link class="top-links" v-bind:to="{ name: 'home' }">&#x2736; Return To Customer Home &#x2736;</router-link>
    </div>
  </div>
</template>

<script>
import saleList from '../components/SaleList.vue';
export default {
    name: "employee-view",
    components: {
      saleList
    }

};
</script>

<style scoped>
h1{
  color:white;
  text-align: center;
}

.top-links{
  color:rgb(255, 0, 0);
  font-size: 25px;
  margin-left: 5px;
  margin-right: 5px;
  padding-left: 5px;
  padding-right: 5px;
  border: solid 5px rgb(179, 221, 242);
  border-radius: 15px;
  background-color: rgb(255, 255, 255);
  text-align: center;
  text-decoration: none;
}

#home-link {
  text-align: center;
  margin-top: 15px;
}

.top-menu{
  margin-bottom: 10px;
  text-align: center;
}

.employee-view {
  height: 100vh;
  width: 100vw;
  background: url("../assets/chicago-skyline-photo-dimmed.jpg") center;
  background-size: cover;
 
}

</style>
