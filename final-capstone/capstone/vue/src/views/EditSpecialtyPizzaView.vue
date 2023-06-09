<template>
  <div class="edit-specialty-view">
    <h2>Modify Specialty Pizzas</h2>
    <router-link id="home-link" v-bind:to="{ name: 'employee-view' }">&#x2736; Return to Employee Home &#x2736;</router-link>
    <edit-specialty-pizza/>
  </div>
</template>

<script>
import EditSpecialtyPizza from '../components/EditSpecialtyPizza.vue';
export default {
  components: { EditSpecialtyPizza },};
</script>

<style scoped>

.edit-specialty-view {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('../assets/pexels-tarek-fathy-12234385.jpg');
  background-size: 100%;
  padding-top: 100px;
  
}

h2{
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
}
</style>