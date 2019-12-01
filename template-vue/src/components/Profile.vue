<template>
    <body>
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
        if(this.user.photoURL == null) alert("Did not find Picture");
        document.getElementById("pic").src = this.user.photoURL;
    }
}
</script>

<style scoped>
body{
    display: flex;
    flex-direction: column;
}
</style>