<template>
  <div class="cards">
    <v-card max-width="80%" class="mx-auto">
      <v-container>
        <v-row dense>
          <v-col cols="14">
            <v-card color="grey" @click.stop="dialog=true" dark>
              <v-card-title class="headline">むにょわBlogってなんだ</v-card-title>
              <v-card-subtitle>押しても何もねえから</v-card-subtitle>
              <v-card-subtitle>投稿日 2020/08/26</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="14">
            <v-card color="red" @click.stop="dialog=true" dark>
              <v-card-title class="headline">ここにいろんな記事</v-card-title>
              <v-card-subtitle>投稿していく</v-card-subtitle>
              <v-card-subtitle>投稿日 2020/08/26</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

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
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    twitterShare() {
      //シェアする画面を設定
      this.dialog = false;
      var shareURL =
        "https://twitter.com/intent/tweet?text=" +
        "@2a4g5j7p お兄ちゃん許して…😢" +
        "#あむのゴミ箱（開発中）" +
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