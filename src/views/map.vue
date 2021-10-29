<template>
  <div class="container-fluid mt--7">
    <div class="row">
      <div class="col-lg-7 col-md-10">
        <h1 class="text-gray-700 text-3xl font-medium">비콘 확인</h1>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="card shadow border-0">
          <div
            id="map"
            class="map-canvas"
            data-lat="40.748817"
            data-lng="-73.985428"
            style="height: 600px"
          ></div>
        </div>
      </div>
    </div>

    <div class = "row">
      <div class = "map_sw">
      </div>
    </div>
  </div>
</template>
<script>
import { Loader } from "@googlemaps/js-api-loader";
import app from '../firebase'

const loader = new Loader({
  apiKey: "AIzaSyAunelJKCBtSwYnJ84H7LD7_WvCbmVcrEc",
  version: "weekly"
});
const ref = app.database().ref("location");

export default {
  data() {
    return {
      nav: null,
    };
  },
  mounted() {
    loader.load().then(function () {
      const myLatlng = new google.maps.LatLng(
        36.4287668,
        127.3913109
      );
      const mapOptions = {
        zoom: 15,
        center: myLatlng,
        scrollwheel: false, 
        disableDefaultUI: true, 
        zoomControl: true,
        styles: [
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{ color: "#444444" }],
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#f2f2f2" }],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }, { lightness: 45 }],
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#5e72e4" }, { visibility: "on" }],
          },
        ],
      };
      const map = new google.maps.Map(document.getElementById("map"), mapOptions);

      ref.once("value").then((snapshot) => {
        // snapshot.forEach((childSnapshot) => {
        //   let childKey = childSnapshot.key;
        //   let childData = childSnapshot.val();
        // })
        const val = snapshot.val();
        let newMaker = { lat: val.lat, lng: val.lng };
        const marker = new google.maps.Marker({
          position: newMaker,
          title: "Lost Tag",
          icon: "https://cdn.glitch.com/37d9e42b-5b4d-4b17-9e77-c177a73cd5ec%2Fdasol.png?v=1621847826305",
          map: map
        });
      });
    });
  },
};
</script>
<style></style>