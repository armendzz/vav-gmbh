import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Gallery from "../views/Gallery.vue";
import Uberuns from "../views/Uber-uns.vue";
import Kontakt from "../views/Kontakt.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery
  },
  {
    path: "/uber-uns",
    name: "Uberuns",
    component: Uberuns
  },
  {
    path: "/kontakt",
    name: "Kontakt",
    component: Kontakt
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
