/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
"use-strict";
import Vue from "vue";
import App from "./App.vue";
import router from "./routes";

import "bootstrap";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "./assets/style.scss";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
