<template>
  <div id="bar">
    <v-navigation-drawer app v-model="drawer">
      <v-card class="mx-auto" max-width="300" tile>
        <v-list shaped>
          <v-subheader>ゴミ漁り</v-subheader>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i">
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
    <v-app-bar app v-bind:hide-on-scroll="{hideOn}" color="orange">
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-avatar>
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
        <v-toolbar-title>あむのゴミ箱</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-btn href="https://twitter.com/2a4g5j7p" target="_blank" text>
        <span class="mr-2">Twitter</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-footer color="orange lighten-3" app>©︎あむさん</v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      item: 1,
      hideOn: true,
      items: [
        { text: "りんごのゴミ", icon: "mdi-assistant" },
        { text: "パイナップルのヘタ", icon: "mdi-account" },
        { text: "ゴキブリの死骸", icon: "mdi-flag" },
      ],
    };
  },
};
</script>

<style scoped>
</style>