import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Gallery from "../views/Gallery.vue";
import Uberuns from "../views/Uber-uns.vue";
import Kontakt from "../views/Kontakt.vue";
import Datenschutz from "../views/Datenschutz.vue";
import Impressum from "../views/Impressum.vue";
import Agb from "../views/Agb.vue";
import Verwaltung from "../views/Verwaltung.vue";
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
    path: "/verwaltung",
    name: "Verwaltung",
    component: Verwaltung
  },
  {
    path: "/uber-uns",
    name: "Uberuns",
    component: Uberuns
  },
  {
    path: "/impressum",
    name: "Impressum",
    component: Impressum
  },
  {
    path: "/agb",
    name: "Agb",
    component: Agb
  },
  {
    path: "/datenschutzerklaerung",
    name: "Datenschutz",
    component: Datenschutz
  },
  {
    path: "/kontakt",
    name: "Kontakt",
    component: Kontakt
  }
];

const router = new VueRouter({
  //mode: "history",
  base: process.env.BASE_URL,
  routes
});
// eslint-disable-next-line
router.afterEach((to, from) => {
  window.scrollTo(0, 0);
});

export default router;
