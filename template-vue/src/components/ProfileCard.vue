<template>
    <canvas ref="cnvs" id="profileCardCan" width="100px" height="100px"/>
</template>

<script>
    import { AppAUTH } from "../db-init.js";

    export default {
        data: function() {
            return {
            user: [],
            componentKey: 0
            };
        },

        mounted() {
            //this.user.push(AppAUTH.currentUser);
            let userinfo = AppAUTH.currentUser;
            this.user = userinfo;
            //this.pic = userinfo.photoURL;
            if (this.user.displayName == null) {
            AppAUTH.currentUser
                .updateProfile({
                displayName: this.user.email,
                photoURL:
                    "https://www.scirra.com/images/articles/windows-8-user-account.jpg"
                })
                .then(
                function() {},
                function(err) {
                    // An error happened.
                    alert("Error " + err);
                }
                );
            }
            var cnv = this.$refs.cnvs;
            var ctx = cnv.getContext("2d");

            var bg = new Image();
            bg.src = require("../assets/profileCard.png");

            ctx.drawImage(bg,0,0,bg.width *.13, bg.height*.13);

            ctx.fillStyle = "#000";
            ctx.font = "20px Astron";
            ctx.fillText("Score: " + 10, 10, (cnv.height * .90));
        }
    };
</script>

<style scoped>
    canvas {
        background-color: bisque;
    }
</style>