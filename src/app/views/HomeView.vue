<template>
  <div class="container-fluid">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 my-4">
          <div class="row justify-content-center justify-content-xl-end">
            <div class="col-12 col-xl-8 p-0 pl-xl-5">
              <div class="row align-items-center justify-content-end">
                <div class="col-12 col-xs-6 col-lg-4 col-xl-4">
                  <div
                    class="row justify-content-center justify-content-xl-start align-items-center"
                  >
                    <p class="mr-2">Order by</p>
                    <b-form-select
                      id="rounded__input"
                      class="w-50"
                      v-model="selected"
                      :options="options"
                    />
                  </div>
                </div>
                <div class="col-12 col-xs-6 col-lg-4 col-xl-3">
                  <div
                    class="row justify-content-center justify-content-xl-start align-items-center"
                  >
                    <p class="mr-2">Results per page</p>
                    <b-form-input
                      v-model="ItemsPerPage"
                      id="rounded__input"
                      class="w-50"
                    />
                  </div>
                </div>
                <div class="col-12 col-xs-6 col-lg-4 col-xl-5">
                  <div
                    class="row justify-content-center align-items-center justify-content-xl-end"
                  >
                    <b-form-input
                      id="rounded__input"
                      class="w-50"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                </div>
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
                        <b-form-datepicker id="inputFrom"></b-form-datepicker>
                        <p>To</p>
                        <b-form-datepicker id="inputTo"></b-form-datepicker>
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
            <div class="container-fluid mb-4" id="trail__container">
              <div class="row justify-content-center">
                <div class="col px-5 py-4">
                  <div class="row">
                    <p class="font-weight-bold" style="opacity: 50%">
                      2022-08-21
                    </p>
                    <p class="font-weight-bold">
                      In the general population, do specific forms of COVID-19
                      vaccine information, above simple information that they
                      are safe and effective, increase willingness to be
                      vaccinated?
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
                <div class="col-1" v-if="windowWidth > 1050">
                  <div class="trail__container__aside">
                    <div
                      class="d-flex justify-content-start align-items-center"
                    >
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
                          <b-button
                            variant="outline-light"
                            class="py-2 px-3 mt-3"
                            @click="showTrialModal()"
                            >View more</b-button
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-fluid mb-4" id="trail__container">
              <div class="row justify-content-center">
                <div class="col px-5 py-4">
                  <div class="row">
                    <p class="font-weight-bold" style="opacity: 50%">
                      2022-08-21
                    </p>
                    <p class="font-weight-bold">
                      In the general population, do specific forms of COVID-19
                      vaccine information, above simple information that they
                      are safe and effective, increase willingness to be
                      vaccinated?
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
                <div class="col-1" v-if="windowWidth > 1050">
                  <div class="trail__container__aside">
                    <div
                      class="d-flex justify-content-start align-items-center"
                    >
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
                          <b-button
                            variant="outline-light"
                            class="py-2 px-3 mt-3"
                            @click="showTrialModal()"
                            >View more</b-button
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-fluid mb-4" id="trail__container">
              <div class="row justify-content-center">
                <div class="col px-5 py-4">
                  <div class="row">
                    <p class="font-weight-bold" style="opacity: 50%">
                      2022-08-21
                    </p>
                    <p class="font-weight-bold">
                      In the general population, do specific forms of COVID-19
                      vaccine information, above simple information that they
                      are safe and effective, increase willingness to be
                      vaccinated?
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
                <div class="col-1" v-if="windowWidth > 1050">
                  <div class="trail__container__aside">
                    <div
                      class="d-flex justify-content-start align-items-center"
                    >
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
                          <b-button
                            variant="outline-light"
                            class="py-2 px-3 mt-3"
                            @click="showTrialModal()"
                            >View more</b-button
                          >
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
    <TrialModal v-if="TrialModalView" />
    <RegisterTrialVue v-if="RegisterTrialView" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import TrialModal from "../components/TrialModal.vue";
import RegisterTrialVue from "../components/RegisterTrial.vue";

export default {
  name: "HomeView",
  components: {
    TrialModal,
    RegisterTrialVue,
  },
  data() {
    return {
      StatusSelection: "",
      OrderBy: "",
      ItemsPerPage: 3,
      options: ["Newest First", "Oldest First", "A-Z", "Z-A"],
      selected: "Newest First",
    };
  },
  methods: {
    applyFilters() {
      console.log("applied!");
    },
    ...mapActions(["showTrialModal"]),
  },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth;
    },
    ...mapState(["TrialModalView", "RegisterTrialView"]),
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
      width: 500%;

      #arr_aside {
        transform: rotate(180deg);
      }

      .trail__aside__content {
        display: initial;
      }
    }

    div {
      width: 100%;
      height: 100%;
      color: white;
      padding-left: 35px;
    }

    .trail__aside__content {
      max-width: 100%;
      max-height: 100%;
      padding: 30px 50px;
      display: none;

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
