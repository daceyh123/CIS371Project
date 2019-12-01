//import Budget from "@/components/Budget.vue";
import Login from "@/components/Login.vue";
import Snake from "@/components/Snake.vue";
import Asteroid from "@/components/asteroid.vue";
import FlappyBat from "@/components/FlappyBat.vue";
import MainMenu from "@/components/mainMenu.vue";
import Leaderboard from "@/components/Leaderboards.vue";
//import Flap from "@/components/Flap.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
/* Map path to component */
const routeTable = [
    { path: "/", component: Login },
    { path: "/snake", component: Snake},
    { path: "/asteroid", component: Asteroid},
    { path: "/flappy", component: FlappyBat},
    { path: "/main", component: MainMenu},
    { path: "/leaderboard", component: Leaderboard}
    //{ path: "/test", component: Flap}
    //{ path: "/budget", component: Budget }
];

const AppRouter = new VueRouter({ routes: routeTable, mode: "history" });
export { AppRouter };