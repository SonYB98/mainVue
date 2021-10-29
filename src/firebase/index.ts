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

const App = Firebase.initializeApp(firebaseConfig);

export default App;