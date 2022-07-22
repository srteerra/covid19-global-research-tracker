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
      <ul class="ml-auto navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#"
            >Home <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item px-1">
          <a class="nav-link px-1" href="#">Analitics</a>
        </li>
        <li class="nav-item px-1">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item px-1">
          <a class="nav-link" href="#">Support</a>
        </li>
        <li class="nav-item px-1">
          <a class="nav-link" href="#">FAQ</a>
        </li>
        <li class="nav-item px-1">
          <button
            class="nav-item register-button px-4 py-2 rounded-pill font-weight-bold"
          >
            Register a trail
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss">
.logo img {
  width: 200px;
}
.register-button {
  background-color: #1e4760;
  color: white;
  outline: none;
  border: none;
}
</style>
