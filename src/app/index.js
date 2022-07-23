/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
"use-strict";
import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./routes";

import "bootstrap";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "./assets/style.scss";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// On resize change
window.addEventListener("resize", () => {
  store.commit("WINDOW_WIDTH");
});
