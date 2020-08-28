
<template>
  <div id="home">
    <HelloWorld />
    <Cards />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import Cards from "../components/Cards.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Cards,
  },
  data: () => ({}),
  computed: {},
};
</script>