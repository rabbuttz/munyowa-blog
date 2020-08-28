<template>
  <v-main>
    <v-container>
      <v-row dense>
        <v-col>
          <v-card outlined>
            <v-card-title>むにょわBlogってなんだよ</v-card-title>
            <v-card-text>
              むにょわBlogはむにょわなBlogです。
              <br />
              <strong>めっちゃむにょわ</strong>
              Wow
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col>
          <v-btn @click="KeishichouShare">
            <v-icon v-text="icon"></v-icon>あなたの意見をお寄せください
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      icon: "mdi-assistant",
    };
  },
  methods: {
    twitterShare() {
      //シェアする画面を設定
      var shareURL =
        "https://twitter.com/intent/tweet?text=" +
        "@2a4g5j7p 控えめに言って神だと思いました。応援しています。これからも頑張ってください。 " +
        "#あむのゴミ箱（開発中） " +
        "&url=" +
        "https://relaxed-bassi-cfd91c.netlify.app/";
      //シェア用の画面へ移行
      location.href = shareURL;
    },
    KeishichouShare() {
      location.href = "http://www.internethotline.jp/";
    },
  },
};
</script>

<style scoped>
</style>