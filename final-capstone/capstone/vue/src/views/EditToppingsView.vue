<template>
  <div class="edit-toppings-view">
    <h1>EDIT TOPPINGS</h1>
    <router-link id="home-link" v-bind:to="{ name: 'employee-view' }">&#x2736; Return to Employee Home &#x2736;</router-link>
    <edit-toppings/>
  </div>
</template>

<script>
import EditToppings from '../components/EditToppings.vue';
export default {
  components: { EditToppings },};
</script>

<style scoped>

.edit-toppings-view {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/pexels-yassir-abbas-12046655.jpg");
  
}

h1{
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.445);
  padding: 5px;
  border-radius: 15px;
}

#home-link {
  color:rgb(255, 0, 0);
  font-size: 25px;
  border: solid 5px rgb(179, 221, 242);
  border-radius: 15px;
  background-color: rgb(255, 255, 255);
  text-align: center;
  text-decoration: none;
  margin-bottom: 10px;
}
</style>