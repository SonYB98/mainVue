<template>
  <div class="container-fluid mt--7">
    <div class="row">
      <div class="col-lg-7 col-md-10">
        <h1 class="text-gray-700 text-3xl font-medium">지도 마킹</h1>
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
import { Loader } from "google-maps";
const loader = new Loader("AIzaSyDDXDdoYwn-bRRX0LseKP0C0EpRnIxa0M4");
import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBEvDOks4bxG5eBoNHVttkhG4PewsrMVBs",
  authDomain: "lost-smart-teg.firebaseapp.com",
  databaseURL: "https://lostag.firebaseio.com",
  projectId: "lost-smart-teg",
  storageBucket: "lost-smart-teg.appspot.com",
  messagingSenderId: "174840217",
  appId: "1:174840217:web:a8cfab5d351ba625f21b08",
  measurementId: "G-ZC75GTZLK4",
};
let app = Firebase.initializeApp(firebaseConfig);
let db = app.database();
let locationRef = db.ref("location");
let map, marker;
export default {
  data() {
    return {
      nav: null,
    };
  },
  mounted() {
    loader.load().then(function (google) {
      const myLatlng = new google.maps.LatLng(
        37.28928696370265,
        127.2048022021344
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
      map = new google.maps.Map(document.getElementById("map"), mapOptions);
      locationRef.on("value", (snapshot) => {
        let newMaker = { lat: snapshot.val().lat, lng: snapshot.val().lng };
        console.log(newMaker.lat);
        console.log(newMaker.lng);
        if (marker != null) marker.setMap(null);
        marker = new google.maps.Marker({
          position: newMaker,
          title: "Lost Tag",
          icon: "https://cdn.glitch.com/37d9e42b-5b4d-4b17-9e77-c177a73cd5ec%2Fdasol.png?v=1621847826305",
        });
        marker.setMap(map);
      });
    });
  },
};
</script>
<style></style>