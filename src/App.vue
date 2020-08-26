<template>
  <div id="App">
    <v-app>
      <Bar />
      <v-main>
        <router-link to="/KijiIchiran">kijiへ</router-link>
        <router-link to="/Test">Testへ</router-link>
        <router-link to="/Home">Homeへ</router-link>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
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