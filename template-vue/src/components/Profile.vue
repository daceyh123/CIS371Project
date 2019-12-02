<template>
<body>
  <span id="email">Email: {{this.user.email}}</span>
  <span id="name">Name: {{this.user.displayName}}</span>
  <img v-bind:src="user.photoURL" height="120px" width="120px" ref="pic" />
</body>
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
  }
};
</script>

<style scoped>
body {
  display: flex;
  flex-direction: column;
}
</style>