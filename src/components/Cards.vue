<template>
  <div class="cards">
    <v-app>
      <br />
      <v-card color="yellow" max-width="80%" class="mx-auto">
        <v-container>
          <v-row class="text-center">
            <v-col class="mb-2" dark>
              <h1 class="display-2 font-weight-bold mb-3">むにょわBlog</h1>
            </v-col>
          </v-row>
          <v-row dense v-for="article in articles" v-bind:key="article.id">
            <v-col cols="14">
              <v-card color="white" @click="gotoarticle">
                <v-card-title class="headline">{{article.title}}</v-card-title>
                <v-card-subtitle>{{article.description}}</v-card-subtitle>
                <v-card-subtitle>投稿日{{article.date}}</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-app>

    <!-- ダイアログ表示 -->
    <v-dialog v-model="dialog" scrollable max-width="80%">
      <v-card>
        <v-card-title>なんもないっつってんだろ</v-card-title>
        <v-card-subtitle>投稿するまで我慢しろ（イケボ）</v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="twitterShare" right="true" text>許しを請う</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import router from "../router";

export default {
  data() {
    return {
      dialog: false,
      articles: [
        {
          id: 1,
          title: "むにょわBlogってなんだよ",
          description:
            "令和2年現在、人類の持続的な進化に於いてむにょわは欠かせない概念となってお…",
          date: "2020/08/27",
        },
        {
          id: 2,
          title: "あむさん is 誰",
          description:
            "あむさんはポスト安倍晋三の第一候補として知られており、人望が厚く、とてもずっちーことが知ら…",
          date: "2020/08/27",
        },
        {
          id: 3,
          title: "aaaaaaaaaaaaaaaa",
          description:
            "令和2年現在、人類の持続的な進化に於いてむにょわは欠かせない概念となってお…",
          date: "2020/08/27",
        },
      ],
    };
  },
  methods: {
    gotoarticle() {
      router.push("Article");
    },
    twitterShare() {
      //シェアする画面を設定
      this.dialog = false;
      var shareURL =
        "https://twitter.com/intent/tweet?text=" +
        "&url=" +
        "https://relaxed-bassi-cfd91c.netlify.app/";
      //シェア用の画面へ移行
      location.href = shareURL;
    },
  },
};
</script>

<style scoped>
</style>