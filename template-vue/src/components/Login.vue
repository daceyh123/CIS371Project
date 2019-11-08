<template>
    <form id="signin">
        <v-text-field label="Username/Email" v-model="userEmail"></v-text-field>
        <v-text-field type="password" label="Password" v-model="userPassword"></v-text-field>
        <v-container v-show="isLoggedIn === false">
        <v-row justify="end">        
        <v-btn dark color="red darken-2" @click="doSignUp">Sign Up</v-btn>
                <v-snackbar v-model="snackbar" :timeout="timeout">
                    {{ text }}
                    <v-btn color="red" text  @click="doSignUp; snackbar = false">
                    Close
                    </v-btn>
                </v-snackbar>
                <v-btn @click="doSignIn">Sign In</v-btn>
        </v-row>
        </v-container>
    </form>
</template>
<script>
import { AppAUTH } from "../db-init.js";
    export default {
        data: function() {
            return {
                userEmail: "",
                userPassword: "",
                isLoggedIn: false,
                timeout: 2000,
                snackbar: false,
                text: 'Must be a valid email address.'
            }
        },
        methods: {
            doSignUp() {
                AppAUTH.createUserWithEmailAndPassword(this.userEmail, this.userPassword)
                .then((u) => {
                alert("User created with UID " + u.user.uid);
                this.$router.push({path:"/budget"});
                })
                .catch(() => {
                //alert("Error " + err);
                this.snackbar=true;
                });
            },

            doSignIn() {
                AppAUTH.signInWithEmailAndPassword(this.userEmail, this.userPassword)
                .then((u) => {
                alert("You logged in as " + u.user.email);
                this.$router.push({ path: "/budget" });
                })
                .catch(() => {
                //alert("Error " + err);
                this.snackbar=true;
                this.text="Must have an active account to login."
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
<style>
#signin {
  width: 50vw;
  /* other styles go here */
}
</style>