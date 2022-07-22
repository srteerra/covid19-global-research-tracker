<template>
  <div>
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import axios from "axios";

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
};
</script>

<style></style>
