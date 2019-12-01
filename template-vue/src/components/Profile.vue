<template>
    <body>
        <v-btn @click=addInfo>Add Info</v-btn>
        <span id="email">Email: {{this.user.email}}</span>
        <span id="name">Name: {{this.user.userName}}</span>
        <image id="pic"></image>
    </body>
</template>

<script>
import { AppAUTH } from "../db-init.js";
export default {
    data: function() {
        return {
         user: AppAUTH.currentUser
        };
    }, 
    mounted(){
        
    },
    methods:{
        addInfo(){
            AppAUTH.currentUser.updateProfile({
                    displayName: "Dwight Schrute",
                    photoURL: "https://theofficeanalytics.files.wordpress.com/2017/11/dwight.jpeg?w=1200"
                }).then(function() {

                }, function(err) {
                    // An error happened.
                    alert("Error " + err);
                });
            document.getElementById("pic").src = this.user.photoURL;
        }
    }
}
</script>

<style scoped>
body{
    display: flex;
    flex-direction: column;
}
</style>