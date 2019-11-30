<template>
    <form>
        <v-btn id="ast" @click="astBtn">Asteroids</v-btn>
        <v-btn id="sna" @click="snaBtn">Snake</v-btn>
        <v-btn id="fla" @click="flaBtn">Flappy Bat</v-btn>
    </form>
</template>

<script>
export default {
    methods: {
        astBtn(){
            this.$router.push({path:"/asteroid"});
        },
        snaBtn(){
            this.$router.push({path:"/snake"});
        },
        flaBtn(){
            this.$router.push({path:"/flappy"});
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
#ast{
    float: left;
    font-size: 200%;
    padding-top: 5%;
    padding-bottom: 8%;
}
#sna{
    float: center;
    font-size: 200%;
    padding-top: 5%;
    padding-bottom: 8%;
}
#fla{
    float: right;
    font-size: 200%;
    padding-top: 5%;
    padding-bottom: 8%;
}
</style>