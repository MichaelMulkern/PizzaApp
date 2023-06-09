<template>
  <div id="main-element">
    <h1>EDIT SAUCE</h1>
    <div id="link-wrapper">
    <router-link id="home-link" v-bind:to="{ name: 'employee-view' }">&#x2736; Return to Employee Home &#x2736;</router-link>
    </div>
    <div id="edit-crust">
      
    <edit-sauce/>
    </div>
    
  </div>
</template>

<script>
import EditSauce from '../components/EditSauce.vue';
export default {
  components: { EditSauce },};
</script>

<style scoped>
h1{
  color: white;
}

#main-element {
  background: url("../assets/sauce1.jpeg");
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#edit-crust {
  margin-top: 10px;
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


h1 {
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.445);
  padding: 5px;
  border-radius: 15px;
}


</style>