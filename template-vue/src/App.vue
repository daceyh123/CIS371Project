<template>
  <v-app>
    <v-content>
      <div id="base">
        <body id="borderT">The Dundies Arcade</body>
        <body id="borderR"></body>
        <v-layout row wrap align-center space-around>
          <v-flex>
            <router-view id="screen"/>
          </v-flex>
        </v-layout>
        <body id="borderL"></body>
        <body id="borderB"></body>
      </div>
    </v-content>
  </v-app>
</template>

<script>
//import Login from './components/Login';
import { AppAUTH } from "./db-init.js";
export default {
  name: 'App',
  data: function() {
    return {
      isLoggedIn: false,
      dialog: false
    };
  }, 
  methods: {
    signOutBtn(){
      AppAUTH.signOut().then(() => {
      this.$router.back(); 
      });
    }
  },
  mounted() {
      AppAUTH.onAuthStateChanged((u) => {
      this.isLoggedIn = u !== null;
      });
    }
};
</script>

<style scoped>
@font-face {
  font-family: "Astron";
  src: url("./assets/fonts/Pixellari.ttf");
  font-size: 50em;
}

#base{
  min-width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: auto 87vh auto;
  grid-template-rows: 8vh 87vh 5vh;

  font-family: "Astron";
}
#screen{
  grid-area: 2 / 2 / 2 / 2;
  padding: 10vh;
}
#borderT{
  grid-area: 1 / 1 / 1 / 4;
  font-size: 250%;
  text-align: center;
  background-color:rgb(22, 22, 22);
}
#borderR{
  grid-area: 2 / 3 / 2 / 3;
  background-color:rgb(22, 22, 22);
}
#borderL{
  grid-area: 2 / 1 / 2 / 1;
  background-color:rgb(22, 22, 22);
}
#borderB{
  grid-area: 3 / 1 / 3 / 4;
  background-color:rgb(22, 22, 22);
}
</style>
