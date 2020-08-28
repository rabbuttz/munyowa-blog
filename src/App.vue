<template>
  <v-app>
    <div id="App">
      <Bar />
      <v-main>
        <router-view></router-view>
      </v-main>
    </div>
  </v-app>
</template>
<script>
import Bar from "./components/BarAndFooter";

export default {
  components: {
    Bar,
  },
};
</script>
<style scoped>
</style>