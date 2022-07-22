<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="row align-items-center">
          <div class="col">
            <div class="row">
              <p>Order by</p>
              <input type="select" />
            </div>
          </div>
          <div class="col">
            <div class="row">
              <p>Results per page</p>
              <input type="select" />
            </div>
          </div>
          <div class="col">
            <div class="row">
              <input type="select" placeholder="Search" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 p-0">
        <div class="container p-5" id="filters__container">
          <div class="row">
            <h4>Filters</h4>
          </div>
          <div class="row">
            <div class="col p-0">
              <div>
                <p>Date range</p>
                <p>From</p>
                <input type="date" />
                <p>To</p>
                <input type="date" />
              </div>
              <div>
                <p>Study design</p>
                <input type="select" />
              </div>
              <div>
                <p>Study type</p>
                <input type="select" />
              </div>
            </div>
          </div>
          <div class="row"></div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="container-fluid" id="trail__container">
            <div class="row">
              <div class="col">
                <p>2022-08-21</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style lang="scss">
#filters__container {
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
#trail__container {
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
</style>
