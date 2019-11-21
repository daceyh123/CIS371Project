//import Budget from "@/components/Budget.vue";
import Login from "@/components/Login.vue";
import Snake from "@/components/Snake.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
/* Map path to component */
const routeTable = [
    { path: "/", component: Login },
    { path: "/snake", component: Snake}
    //{ path: "/budget", component: Budget }
];

const AppRouter = new VueRouter({ routes: routeTable, mode: "history" });
export { AppRouter };