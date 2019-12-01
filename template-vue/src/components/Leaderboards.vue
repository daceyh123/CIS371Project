<template>
    <div>
        <div>
            <h1>Snake</h1>
            <v-simple-table>
                <thead>
                    <tr>
                        <th>Score</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(snakeScores,pos) in snakeScores" :key="pos">
                        <td>{{snakeScores.Score}}</td>
                        <td>{{snakeScores.User}}</td>
                    </tr>
                </tbody>
            </v-simple-table>
        </div>
        <div>
            <h1>Flappy Bat</h1>
            <v-simple-table>
                <thead>
                    <tr>
                        <th>Ranking</th>
                        <th>Score</th>
                        <th>Username</th>
                    </tr>
                </thead>
            </v-simple-table>
        </div>
        <div>
            <h1>Asteroids</h1>
            <v-simple-table>
                <thead>
                    <tr>
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
                flapBatScores: []
            };
        },
        methods: {
            dataHandler(snapshot) {
                const item = snapshot.val();
                this.allScores.push({ ...item});
                if(item.Game == "Snake") {
                    this.snakeScores.push({...item});
                    this.snakeScores.sort((a, b) => (a.Score < b.Score) ? 1 : -1);
                    this.snakeScores = this.snakeScores.slice(0,3);
                }
                if(item.Game == "Asteroids") {
                    this.asteroidScores.push({...item});
                    this.asteroidScores.sort((a, b) => (a.Score < b.Score) ? 1 : -1)
                }
            }            
            //const result = words.filter(word => word.length > 6);
        },
        mounted() {
            AppDB.ref("Highscore").on("child_added", this.dataHandler);
            //alert("triggered");
            //this.gameSplit(this.allScores);
            //AppDB.ref("budget").on("child_removed", this.removeExpenseItem);
        }
    };
</script>