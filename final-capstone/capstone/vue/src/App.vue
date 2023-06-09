<template>
  <!-- <v-app>
    <v-main>
      <v-app-bar :elevation="2"> </v-app-bar>
      <v-navigation drawer />
      
    </v-main>
  </v-app> -->
  <div id="router-view">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
/* #router-view {
  display: flex;
  flex-direction: column;
  align-items: center;
} */
</style>