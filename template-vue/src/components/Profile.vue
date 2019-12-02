<template>
    <div>
        <header>
            <img id="profPic" v-bind:src="user.photoURL" height="120px" width="120px" ref="pic" />
            <span id="name">{{this.user.displayName}}</span>
        </header>
        <v-tabs color="primary">
            <v-tab>Asteroids</v-tab>
            <v-tab>Snake</v-tab>
            <v-tab>Flappy Bat</v-tab>
            <v-tab-item>
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
                        <td>{{asteroidScores.User.substring(0, asteroidScores.User.indexOf('@'))}}</td>
                    </tr>
                    </tbody>
                </v-simple-table>
            </v-tab-item>
            <v-tab-item>
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
                        <td>{{snakeScores.User.substring(0, snakeScores.User.indexOf('@'))}}</td>
                    </tr>
                    </tbody>
                </v-simple-table>
            </v-tab-item>
            <v-tab-item>
                <v-simple-table id="scoretable">
                    <thead>
                    <tr id="flap">
                        <th>Ranking</th>
                        <th>Score</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(flapBatScores,pos) in flapBatScores" :key="pos">
                        <td v-bind:ref="pos">{{pos +1 }}</td>
                        <td>{{flapBatScores.Score}}</td>
                        <td>{{flapBatScores.User.substring(0, flapBatScores.User.indexOf('@'))}}</td>
                    </tr>
                    </tbody>
                </v-simple-table>
            </v-tab-item>
        </v-tabs>
        <v-bottom-sheet v-model="sheet">
      <template v-slot:activator="{ on }">
        <v-btn color="accent" dark v-on="on">Update Info</v-btn>
      </template>
      <v-sheet class="text-center" height="200px">
        <v-btn class="mt-6" flat color="red" @click="sheet = !sheet">cancel</v-btn>
        <v-btn class="mt-6" flat color="success" @click="sheet = !sheet">submit</v-btn>
        <div>The basic usage of v-bottom-sheet. Almost any content can be placed inside this component</div>
      </v-sheet>
    </v-bottom-sheet>
    </div>
</template>

<script>
import { AppAUTH } from "../db-init.js";
import { AppDB } from "../db-init.js";

export default {
    data: function() {
        return {
            user: [],
            componentKey: 0,
            sheet: false,
            allScores: [],
            snakeScores: [],
            asteroidScores: [],
            flapBatScores: [],
            fullLoad: false,
            refsman: [],
            testobj: []
        };
    },
    beforeMount(){
        let userinfo = AppAUTH.currentUser;
        this.user = userinfo;
    },
    mounted() {
        //this.user.push(AppAUTH.currentUser);
        
        AppDB.ref("Highscore").on("child_added", this.dataHandler);
        //this.pic = userinfo.photoURL;
    },
    methods:{
        update(){

        },
        dataHandler(snapshot) {
            const item = snapshot.val();
            this.allScores.push({ ...item });
            if (item.Game == "Snake") {
                if(item.User == this.user.email)
                {    
                    this.snakeScores.push({ ...item });
                    this.snakeScores.sort((a, b) => (a.Score < b.Score ? 1 : -1));
                    this.snakeScores = this.snakeScores.slice(0, 5);
                }
            }
            if (item.Game == "Asteroids") {
                if(item.User == this.user.email)
                {    
                    this.asteroidScores.push({ ...item });
                    this.asteroidScores.sort((a, b) => (a.Score < b.Score ? 1 : -1));
                    this.asteroidScores = this.asteroidScores.slice(0, 5);
                }
            }
            if (item.Game == "FlappyBat") {
                if(item.User == this.user.email)
                {    
                    this.flapBatScores.push({ ...item });
                    this.flapBatScores.sort((a, b) => (a.Score < b.Score ? 1 : -1));
                    this.flapBatScores = this.flapBatScores.slice(0, 5);
                }
            }
        }
    }
    };
</script>

<style scoped>
    div{
        height: 100%;
    }
    header{
        display: flex;
        flex-direction: row;
        justify-content:center;
        padding-bottom: 5vh;
    }
    #name{
        font-size: 400%;
        padding-top: 2vh;
        float: right;
    }
    #uBtn{
        justify-self: baseline;
    }
</style>