<template>
<body>
  <header>
    <v-btn dark color="success" id="pro" @click="proBtn">Profile</v-btn>
    <v-btn dark color="accent" id="lea" @click="leaBtn">Leaderboard</v-btn>
  </header>

  <div id="games">
    <v-row>
      <v-col>
        <img src="../components/img/asteroids.jpg" height="90px" width="90px"/>
      </v-col>
      <v-col>
        <img src="../components/img/snake.png" height="90px" width="90px"/>
      </v-col>
      <v-col>
        <img src="../components/img/flappyBat.png" height="90px" width="90px"/>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn id="ast" @click="astBtn">Asteroids</v-btn>
      </v-col>
      <v-col>
        <v-btn id="sna" @click="snaBtn">Snake</v-btn>
      </v-col>
      <v-col>
        <v-btn id="fla" @click="flaBtn">Flappy Bat</v-btn>
      </v-col>
    </v-row>

  </div>
</body>
</template>

<script>
export default {
  methods: {
    proBtn() {
      this.$router.push({ path: "/profile" });
    },
    leaBtn() {
      this.$router.push({ path: "/leaderboard" });
    },
    astBtn() {
      this.$router.push({ path: "/asteroid" });
    },
    snaBtn() {
      this.$router.push({ path: "/snake" });
    },
    flaBtn() {
      this.$router.push({ path: "/flappy" });
    }
  }
};
</script>

<style scoped>
body {
  display: flex;
  min-height: 87vh;
  flex-direction: column;
  margin: 0;
}
#games {
  display: flex;
  flex: 1;
  float: center;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
}
header {
  height: 30vh;
  padding-left: 2vh;
  padding-right: 2vh;
}
#ast {
  float: center;
  font-size: 200%;
  padding-top: 5%;
  padding-bottom: 8%;
}
#sna {
  float: center;
  font-size: 200%;
  padding-top: 5%;
  padding-bottom: 8%;
}
#fla {
  float: center;
  font-size: 200%;
  padding-top: 5%;
  padding-bottom: 8%;
}
#lea{
    float:right;
}
</style>