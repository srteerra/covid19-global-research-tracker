<template>
  <footer class="p-5">
    <div class="container-fluid text-center text-md-left p-5">
      <div class="row">
        <div class="col-md-5 my-3 logo text-center">
          <img src="../assets/logos/horizontal-white.png" alt="CGRT" />
        </div>

        <div class="col-md-2 my-3">
          <ul class="list-unstyled">
            <p class="font-weight-bold">Explore</p>
            <li>
              <a href="#">Back to top</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Help & support</a>
            </li>
          </ul>
        </div>

        <div class="col-md-2 my-3">
          <p class="font-weight-bold">Database</p>

          <ul class="list-unstyled">
            <li>
              <a href="#">List all tracks</a>
            </li>
            <li>
              <a href="#">Register a clinical trial</a>
            </li>
          </ul>
        </div>
        <div class="col-md-2 my-3">
          <p class="font-weight-bold">Others</p>

          <ul class="list-unstyled">
            <li>
              <a href="#">Report a bug</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {},
};
</script>

<style lang="scss">
footer {
  padding: auto 0;
  background-color: #1e4760;
  color: white;
  margin-top: 50px;
  .logo img {
    width: 200px;
  }
}
</style>
