<template>
  <div class="p-0 px-lg-5">
    <router-view />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  mounted() {
    axios.get("/api/v1/trials").then((res) => {
      console.log(res);
    });
  },
};
</script>

<style></style>
