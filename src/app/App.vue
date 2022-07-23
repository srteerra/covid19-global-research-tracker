<template>
  <div>
    <div class="modal-shadow" v-if="showingModal"></div>
    <Nav />
    <router-view class="p-0 px-lg-5" />
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },
  mounted() {
    axios.get("/api/v1/trials").then((res) => {
      console.log(res);
    });
  },
  computed: {
    ...mapState(["showingModal"]),
  },
};
</script>

<style lang="scss">
.modal-shadow {
  position: fixed;
  background-color: black;
  opacity: 40%;
  width: 100vw;
  height: 100vh;
  z-index: 15;
}
</style>
