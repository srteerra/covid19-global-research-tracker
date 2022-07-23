<template>
  <!-- trial modal -->
  <div id="modal-trial">
    <b-container fluid class="p-5">
      <div class="row align-items-center justify-content-end">
        <b-button
          variant="light"
          size="md"
          class="float-right"
          @click="showRegisterTrial()"
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
        <div class="col-12">
          <div class="col">
            <div class="row py-3">
              <p class="mr-3 font-weight-bold">Title</p>
              <b-form-input
                id="inputTitle"
                placeholder="Enter a title..."
              ></b-form-input>
              <p class="mr-3 mt-3 font-weight-bold">About</p>
              <b-form-textarea
                id="inputAbout"
                placeholder="Explain it here..."
              ></b-form-textarea>
            </div>
            <div class="row py-3">
              <p class="mr-3 font-weight-bold">Start Date:</p>
              <b-form-datepicker id="inputStartDate"></b-form-datepicker>
              <p class="mr-3 mt-3 font-weight-bold">End Date:</p>
              <b-form-datepicker id="inputStartDate"></b-form-datepicker>
            </div>
            <div class="row">
              <p class="mr-3 my-3 font-weight-bold">Location:</p>
              <div id="mapRegTrail"></div>
            </div>
            <div class="row py-3">
              <p class="mr-3 mt-3 font-weight-bold">Countries</p>
              <b-form-input
                id="inputCountries"
                placeholder="Mexico / USA / China..."
              ></b-form-input>
            </div>
            <div class="row py-3">
              <p class="mr-3 mt-2 font-weight-bold">Phases</p>
              <b-form-textarea
                id="inputCountries"
                placeholder="Your phases..."
              ></b-form-textarea>
            </div>
            <div class="row py-4">
              <h4 class="mr-3 font-weight-bold">Contact details</h4>
            </div>
            <div class="row py-2">
              <p class="mr-3 font-weight-bold">Firstname:</p>
              <b-form-input
                id="inputCountries"
                placeholder="Enter your firstname..."
              ></b-form-input>
            </div>
            <div class="row py-2">
              <p class="mr-3 font-weight-bold">Lastname:</p>
              <b-form-input
                id="inputCountries"
                placeholder="Enter your lastname..."
              ></b-form-input>
            </div>
            <div class="row py-2">
              <p class="mr-3 font-weight-bold">Email:</p>
              <b-form-input
                id="inputCountries"
                placeholder="email@example.com"
              ></b-form-input>
            </div>
            <div class="row py-2">
              <p class="mr-3 font-weight-bold">Phone number:</p>
              <b-form-input
                id="inputCountries"
                placeholder="+00 0 000 0000"
              ></b-form-input>
            </div>
            <div class="row py-4">
              <p class="mr-3 font-weight-bold">Source:</p>
              <b-form-input
                id="inputCountries"
                placeholder="URL, Website, etc..."
              ></b-form-input>
            </div>
            <div class="row justify-content-center">
              <b-button
                id="secundary__btn"
                class="mr-3"
                @click="showRegisterTrial()"
                >Cancel</b-button
              >
              <b-button id="primary__btn" type="submit">Submit</b-button>
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
      registerAddress: {
        lng: "-106.38637615250745",
        lat: "31.639019891376226",
      },
    };
  },
  mounted() {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic3J0ZWVycmEiLCJhIjoiY2w1eDg3anZlMHJkbDNlbGMxMHRsbGkwcyJ9.LLOJIDR-hgNSc9IZ1fY8Ig";

    const map = new mapboxgl.Map({
      container: "mapRegTrail", // container ID
      style: "mapbox://styles/srteerra/cl5xbvjc0004414o4quci1kdb", // style URL
      center: this.registerAddress, // starting position [lng, lat]
      zoom: 3, // starting zoom
      projection: "equirectangular", // display the map as a 3D globe
    });
    const el = document.createElement("div");
    el.className = "marker";

    map.on("style.load", () => {
      map.setFog({}); // Set the default atmosphere style
    });

    const marker = new mapboxgl.Marker({
      draggable: true,
    })
      .setLngLat(this.registerAddress)
      .addTo(map);

    marker.on("dragend", function () {
      const lngLat = marker.getLngLat();
      this.registerAddress1 = lngLat;
      console.log(lngLat);
    });
  },
  computed: {
    registerAddress1() {
      return this.lngLat;
    },
  },
  methods: {
    ...mapActions(["showRegisterTrial"]),
  },
};
</script>

<style lang="scss">
#mapRegTrail {
  width: 100%;
  height: 400px;
}
</style>
