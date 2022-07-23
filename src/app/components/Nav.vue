<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
    <a class="navbar-brand logo" href="#"
      ><img src="../assets/logos/horizontal-color.png" alt="CGRT"
    /></a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="ml-auto navbar-nav align-items-center">
        <li class="nav-item active">
          <router-link class="nav-link" to="/"
            >Home <span class="sr-only">(current)</span></router-link
          >
        </li>
        <li class="nav-item px-1">
          <router-link class="nav-link px-1" to="/analitics"
            >Analitics</router-link
          >
        </li>
        <li class="nav-item px-1">
          <router-link class="nav-link" to="/">About</router-link>
        </li>
        <li class="nav-item px-1">
          <router-link class="nav-link" to="/">Support</router-link>
        </li>
        <li class="nav-item px-1">
          <router-link class="nav-link" to="/">FAQ</router-link>
        </li>
        <li class="nav-item px-1 ml-3">
          <b-button
            id="primary__btn"
            class="nav-item font-weight-bold"
            @click="showRegisterTrial()"
          >
            Register a trial
          </b-button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Nav",
  methods: {
    ...mapActions(["showRegisterTrial"]),
  },
};
</script>

<style lang="scss">
.logo img {
  width: 250px;
}
</style>
