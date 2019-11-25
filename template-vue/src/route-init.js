//import Budget from "@/components/Budget.vue";
import Login from "@/components/Login.vue";
import Snake from "@/components/Snake.vue";
import Asteroid from "@/components/asteroid.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
/* Map path to component */
const routeTable = [
    { path: "/", component: Login },
    { path: "/snake", component: Snake},
    { path: "/asteroid", component: Asteroid}
    //{ path: "/budget", component: Budget }
];

const AppRouter = new VueRouter({ routes: routeTable, mode: "history" });
export { AppRouter };