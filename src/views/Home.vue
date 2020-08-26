
<template>
  <v-app>
    <HelloWorld />
    <Cards />
  </v-app>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import Cards from "../components/Cards.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Cards,
  },
  data: () => ({}),
  computed: {},
};
</script>