<template>
  <div id="bar">
    <v-navigation-drawer app v-model="drawer">
      <v-card class="mx-auto" max-width="300" tile>
        <v-list shaped>
          <v-subheader>ゴミ漁り</v-subheader>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item v-bind:to="item.route" v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <!-- ここからバー -->

    <v-app-bar app v-bind:hide-on-scroll="{hideOn}" color="orange">
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-avatar @click="changeRoute(home)" style="cursor:pointer;">
          <v-img
            alt="munyowa-logo"
            class="shrink mr-2"
            contain
            src="../../src/assets/rpUlezkp_400x400.jpg"
            transition="scale-transition"
            width="40"
          />
        </v-avatar>
        <v-icon>fas fa-tachometer-alt</v-icon>
        <v-toolbar-title @click="changeRoute(home)" style="cursor:pointer;">そたろのゴミ箱</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-btn href="https://わああ" target="_blank" text>
        <span class="mr-2">Twitter</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-footer color="orange lighten-3" app>©︎そたろ</v-footer>
  </div>
</template>

<script>
import router from "../router";

export default {
  data() {
    return {
      drawer: null,
      item: 1,
      hideOn: true,
      home: "Home",
      items: [
        { text: "ゴミホームへ", icon: "mdi-home", route: "Home" },

        { text: "ゴミサイトについて", icon: "mdi-flag", route: "About" },
      ],
    };
  },
  methods: {
    changeRoute(route) {
      router.push(route);
    },
  },
  watch: {
    $route() {
      this.$forceUpdate();
    },
  },
};
</script>

<style>
</style>