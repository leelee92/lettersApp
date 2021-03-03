import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Game from "../views/Game.vue";
import Resultat from "../views/Resultat.vue";
import store from "../store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/game",
    name: "Game",
    component: Game,
  },
  {
    path: "/resultat",
    name: "Resultat",
    component: Resultat,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    (to.name == "Game" || to.name == "Resultat") &&
    !store.getters.isAuthentified
  ) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
