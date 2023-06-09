<template>
  <div class="edit-size-view">
    <h1>EDIT PIZZA SIZES</h1>
    <router-link id="home-link" v-bind:to="{ name: 'employee-view' }">&#x2736; Return to Employee Home &#x2736;</router-link>
    <edit-size/>
  </div>
</template>

<script>
import EditSize from '../components/EditSize.vue';
export default {
  components: { EditSize },};
</script>

<style scoped>
.edit-size-view {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/size2.jpeg");
  background-size: cover;
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