<template>
  <!-- trial modal -->
  <div id="modal-trial">
    <b-container fluid class="p-5">
      <div class="row align-items-center justify-content-end">
        <b-button
          variant="light"
          size="md"
          class="float-right"
          @click="showTrialModal()"
        >
          <b-icon-x />
        </b-button>
      </div>
      <div class="row">
        <h5 class="font-weight-bold">
          In the general population, do specific forms of COVID-19 vaccine
          information, above simple information that they are safe and
          effective, increase willingness to be vaccinated?
        </h5>
        <h5 class="font-weight-bold" style="opacity: 50%">
          COVID-19 vaccination views: Oxford Coronavirus Explanations,
          Attitudes, and Narratives Survey (OCEANS III)
        </h5>
      </div>
      <hr />
      <div class="row mt-2 trial__content">
        <div class="col-12 col-xl-6">
          <div class="col">
            <div class="row">
              <div id="mapTrail"></div>
            </div>
            <div class="row py-4">
              <p class="mr-3 font-weight-bold">Countries:</p>
              <p class="font-weight-regular">United Kingdom</p>
            </div>
            <div class="row py-3">
              <p class="mr-3 font-weight-bold">Phases:</p>
              <p class="font-weight-regular">
                Human pharmacology (Phase I): no Therapeutic exploratory (Phase
                II): no Therapeutic confirmatory - (Phase III): no Therapeutic
                use (Phase IV): yes
              </p>
            </div>
            <div class="row py-4">
              <h4 class="mr-3 font-weight-bold">Contact details</h4>
            </div>
            <div class="row py-2">
              <p class="mr-3 font-weight-bold">Firstname:</p>
              <p class="font-weight-regular">Daniel</p>
            </div>
            <div class="row py-2">
              <p class="mr-3 font-weight-bold">Lastname:</p>
              <p class="font-weight-regular">Freeman</p>
            </div>
            <div class="row py-2">
              <p class="mr-3 font-weight-bold">Email:</p>
              <p class="font-weight-regular">daniel.freeman@psych.ox.ac.uk</p>
            </div>
            <div class="row py-2">
              <p class="mr-3 font-weight-bold">Phone number:</p>
              <p class="font-weight-regular">+44 (0)1865 613109</p>
            </div>
            <div class="row py-4">
              <p class="mr-3 font-weight-bold">Source:</p>
              <a
                href="http://clinicaltrials.gov/show/NCT00173563"
                class="font-weight-regular"
              >
                http://clinicaltrials.gov/show/NCT00173563
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 col-xl-6">
          <div class="col">
            <div class="row">
              <div class="trial__feature text-center m-2">
                <h5 class="font-weight-bold">ID</h5>
                <p>ISRCTN37254291</p>
              </div>
              <div class="trial__feature text-center m-2">
                <h5 class="font-weight-bold">Source</h5>
                <p>ISRCTN</p>
              </div>
              <div class="trial__feature text-center m-2">
                <h5 class="font-weight-bold">Study type</h5>
                <p>Interventional clinical trial of medicinal product</p>
              </div>
            </div>
            <div class="row py-5">
              <p class="mr-3 font-weight-bold">Status:</p>
              <p class="font-weight-regular text-danger">Not recruiting</p>
            </div>
            <div class="row py-2">
              <p class="mr-3 font-weight-bold">Registration Date:</p>
              <p class="font-weight-regular">2022-08-01</p>
            </div>
            <div class="row py-2">
              <p class="mr-3 font-weight-bold">Start Date:</p>
              <p class="font-weight-regular">2022-08-01</p>
            </div>
            <div class="row py-2">
              <p class="mr-3 font-weight-bold">End Date:</p>
              <p class="font-weight-regular">2023-03-01</p>
            </div>
            <div class="row py-5">
              <p class="mr-3 font-weight-bold pb-2">Abstract:</p>
              <p class="font-weight-regular">
                Brief summary: Subjects who have completed the primary mRNA
                vaccine immunizations and the 1st booster AZD1222 immunization
                for more than 6 months will be randomized to receive a 2nd
                booster dose of Ad5-nCoV/O, Ad5-nCoV/O-IH or mRNA-based COVID-19
                vaccine in a ratio of 2:2:1. Detailed descriptions: This is a
                multicenter, randomized, observer-blind, and parallel-controlled
                clinical study to evaluate the immune responses and safety
                profiles in adults (≥ 18 years) receiving investigational
                products (intramuscular injection or nebulized inhalation) ≥ 180
                days after the immunization of 2 doses of BNT162b2 vaccines plus
                one dose of booster AZD1222 vaccine. This study will enroll
                about 30% participants aged 60 years and above. Subjects who
                have completed the primary mRNA vaccine immunizations and the
                1st booster AZD1222 immunization for more than 6 months will be
                randomized to receive a 2nd booster dose of Ad5-nCoV/O,
                Ad5-nCoV/O-IH or mRNA-based COVID-19 vaccine in a ratio of
                2:2:1.
              </p>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic3J0ZWVycmEiLCJhIjoiY2w1eDg3anZlMHJkbDNlbGMxMHRsbGkwcyJ9.LLOJIDR-hgNSc9IZ1fY8Ig";

    const map = new mapboxgl.Map({
      container: "mapTrail", // container ID
      style: "mapbox://styles/srteerra/cl5xbvjc0004414o4quci1kdb", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      projection: "globe", // display the map as a 3D globe
    });
    const el = document.createElement("div");
    el.className = "marker";

    map.on("style.load", () => {
      map.setFog({}); // Set the default atmosphere style
    });
    // Add markers to the map.
    new mapboxgl.Marker(el).setLngLat([-61.21582, -15.971891]).addTo(map);
  },
  methods: {
    ...mapActions(["showTrialModal"]),
  },
};
</script>

<style lang="scss">
#mapTrail {
  width: 100%;
  height: 400px;
}
.marker {
  width: 50px;
  height: 50px;
  background-image: url("../assets/icons/marker-white.png");
  background-size: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
#modal-trial {
  width: 1100px;
  max-width: 100vw;
  background-color: white;
  border-radius: 30px;
  position: fixed;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 20;
}
.trial__content {
  max-height: 500px;
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    border: none;
    padding: 2px 0;
    background-color: #ffffff;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #737272;
    border: none;
  }

  .trial__feature {
    width: auto;
    background-color: white;
    border: 2px solid black;
    border-radius: 25px;
    padding: 10px 20px;
  }
}
</style>
