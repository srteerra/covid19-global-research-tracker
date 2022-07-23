/* eslint-disable no-undef */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName:"home" */ "../views/HomeView"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName:"about" */ "../views/AboutView"),
  },
  {
    path: "/analitics",
    name: "analitics",
    component: () =>
      import(/* webpackChunkName:"about" */ "../views/Analitics"),
  },
];

const router = new Router({
  linkExactActiveClass: "link-active",
  routes,
  // mode: "history",
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});

export default router;
