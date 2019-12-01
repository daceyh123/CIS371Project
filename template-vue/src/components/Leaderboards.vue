<template>
  <div>
    <div>
      <h1>Snake</h1>
      <v-simple-table id="scoretable">
        <thead>
          <tr id="snake">
            <th>Ranking</th>
            <th>Score</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(snakeScores,pos) in snakeScores" :key="pos">
            <td v-bind:ref="pos">{{pos +1 }}</td>
            <td>{{snakeScores.Score}}</td>
            <td>{{snakeScores.User}}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
    <div>
      <h1>Asteroids</h1>
      <v-simple-table id="scoretable">
        <thead>
          <tr id="asteroids">
            <th>Ranking</th>
            <th>Score</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(asteroidScores,pos) in asteroidScores" :key="pos">
            <td v-bind:ref="pos">{{pos +1 }}</td>
            <td>{{asteroidScores.Score}}</td>
            <td>{{asteroidScores.User}}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
    <div>
      <h1>Flappy Bat</h1>
      <v-simple-table id="scoretable">
        <thead>
          <tr id="flap">
            <th>Ranking</th>
            <th>Score</th>
            <th>Username</th>
          </tr>
        </thead>
      </v-simple-table>
    </div>
  </div>
</template>
<script>
import { AppDB } from "../db-init.js";
//import { AppAUTH } from "../db-init.js";
export default {
  data: function() {
    return {
      allScores: [],
      snakeScores: [],
      asteroidScores: [],
      flapBatScores: [],
      fullLoad: false,
      refsman: [],
      testobj: []
    };
  },
  methods: {
    dataHandler(snapshot) {
      const item = snapshot.val();
      this.allScores.push({ ...item });
      if (item.Game == "Snake") {
        this.snakeScores.push({ ...item });
        this.snakeScores.sort((a, b) => (a.Score < b.Score ? 1 : -1));
        this.snakeScores = this.snakeScores.slice(0, 3);
      }
      if (item.Game == "Asteroids") {
        this.asteroidScores.push({ ...item });
        this.asteroidScores.sort((a, b) => (a.Score < b.Score ? 1 : -1));
        this.asteroidScores = this.asteroidScores.slice(0, 3);
      }
    }
    // getRank() {
    //   alert(this.$refs);
    // }
    //const result = words.filter(word => word.length > 6);
  },
  mounted() {
    AppDB.ref("Highscore").on("child_added", this.dataHandler);
    //setTimeout(
    //this.findPos();
    //this.getPos();
    //alert("triggered");
    //this.gameSplit(this.allScores);
    //AppDB.ref("budget").on("child_removed", this.removeExpenseItem);
  }
};
</script>
<style>
#snake {
  background-image: url("../assets/img/ground.png");
  background-size: 100%;
}
#asteroids {
  background-image: url("../assets/img/galaxy.jpg");
  background-size: 100%;
}
#flap {
  background-image: url("../assets/FlappyBat/images/bgClose.png");
  background-size: 100%;
}
#scoretable tr:nth-child(1) td {
  background: rgb(194, 165, 2);
}
#scoretable tr:nth-child(2) td {
  background: rgb(153, 151, 151);
}
#scoretable tr:nth-child(3) td {
  background: #cd7f32;
}
</style>