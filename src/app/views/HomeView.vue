<template>
  <div class="container-fluid">
    <div class="row justify-content-center justify-content-xl-end">
      <div class="col-12 col-xl-6">
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
      <div class="col-12 col-xl-4 p-0 order-2 order-xl-1">
        <div class="row">
          <div class="container-fluid p-5" id="filters__container">
            <div class="col px-4">
              <div class="row">
                <h4 class="mb-5 font-weight-bold">Filters</h4>
              </div>
              <div class="row">
                <div class="col p-0">
                  <b-form @submit="applyFilters">
                    <!-- date range -->
                    <b-form-group
                      id="inputDateGroup"
                      label="Date range:"
                      label-for="inputFrom"
                      class="mb-5 w-50"
                    >
                      <p>From:</p>
                      <b-form-input id="inputFrom" type="date"></b-form-input>
                      <p>To</p>
                      <b-form-input id="inputTo" type="date"></b-form-input>
                    </b-form-group>

                    <!-- study design -->
                    <b-form-group
                      id="inputSDGroup"
                      label="Study Design"
                      label-for="inputSD"
                    >
                      <b-form-select id="inputSD"></b-form-select>
                    </b-form-group>

                    <!-- study type -->
                    <b-form-group
                      id="inputSTGroup"
                      label="Study Type"
                      label-for="inputST"
                    >
                      <b-form-select id="inputST"></b-form-select>
                    </b-form-group>

                    <b-form-group id="inputStatusGroup" class="my-5">
                      <p>Status</p>
                      <b-form-radio
                        v-model="StatusSelection"
                        name="StatusSelection"
                        value="No"
                        >Not Recruiting</b-form-radio
                      >
                      <b-form-radio
                        v-model="StatusSelection"
                        name="StatusSelection"
                        value="Yes"
                        >Recruiting</b-form-radio
                      >
                    </b-form-group>

                    <div class="row justify-content-center">
                      <b-button id="secundary__btn" class="mr-3" type="reset"
                        >Reset all</b-button
                      >
                      <b-button id="primary__btn" type="submit"
                        >Apply filters</b-button
                      >
                    </div>
                  </b-form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-xl-8 p-0 pl-xl-5 order-1 order-xl-2">
        <div class="row my-5 my-xl-0 mb-xl-5">
          <div class="container-fluid" id="trail__container">
            <div class="row justify-content-center">
              <div class="col px-5 py-4">
                <div class="row">
                  <p class="font-weight-bold" style="opacity: 50%">
                    2022-08-21
                  </p>
                  <p class="font-weight-bold">
                    In the general population, do specific forms of COVID-19
                    vaccine information, above simple information that they are
                    safe and effective, increase willingness to be vaccinated?
                  </p>
                </div>
                <div class="row pt-5">
                  <p class="font-weight-bold mr-3">Study Type:</p>
                  <p>Observational</p>
                  <p class="font-weight-bold mr-3 ml-5">Study Design:</p>
                  <p>Cross-Sectional</p>
                  <p class="font-weight-bold mr-3 ml-5">Source:</p>
                  <p>clinicaltrials.gov</p>
                </div>
              </div>
              <div class="col-1">
                <div class="trail__container__aside">
                  <div class="d-flex justify-content-start align-items-center">
                    <b-icon
                      id="arr_aside"
                      icon="arrow-right-circle"
                      class="h3"
                    ></b-icon>
                    <div class="col trail__aside__content">
                      <div class="row trail__aside__abstract">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Repellendus, explicabo?Lorem ipsum dolor sit
                          amet consectetur adipisicing elit. Repellendus,
                          explicabo?Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Repellendus, explicabo?
                        </p>
                      </div>
                      <div class="row trail__aside__more">
                        <a href="#" class="pt-3">View more</a>
                      </div>
                    </div>
                  </div>
                </div>
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
  data() {
    return {
      StatusSelection: "",
    };
  },
  methods: {
    applyFilters() {
      console.log("applied!");
    },
  },
};
</script>

<style lang="scss">
#filters__container {
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 30px;
}
#trail__container {
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 30px;

  .trail__container__aside {
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #1e4760;
    border-radius: 30px;
    transition: ease-in-out 0.3s;
    cursor: pointer;
    z-index: 10;

    &:hover {
      width: 450%;

      #arr_aside {
        transform: rotate(180deg);
      }
    }

    div {
      width: 100%;
      height: 100%;
      color: white;
      padding-left: 35px;
    }

    .trail__aside__content {
      width: 100%;
      max-height: 100%;
      padding: 30px 50px;

      .trail__aside__abstract {
        max-height: 50%;
        overflow: hidden;
      }

      .trail__aside__more {
        max-height: 50%;
        overflow: hidden;
      }
    }
  }
}
</style>
