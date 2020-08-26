<template>
  <div id="kiji">
    <v-app>
      <v-main>
        <Kiji />
      </v-main>
    </v-app>
  </div>
</template>
<script>
import Kiji from "../components/Kiji";

export default {
  components: {
    Kiji,
  },
  created() {
    console.log("KijiIchiran");
  },
};
</script>