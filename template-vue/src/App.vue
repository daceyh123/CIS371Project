<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on" v-show="isLoggedIn === true" @click="signOutBtn" v-model="signOut">Sign Out</v-btn>
        </template>
        <v-card>
          <v-card-title class="headline">User Sign Out</v-card-title>
          <v-card-text>You have successfully been signed out</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog> 
    </v-app-bar>

    <v-content>
      <router-view />
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
