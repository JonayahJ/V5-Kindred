import * as firebase from "firebase";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCqUGMNkEkBRVsdPaBHTPdPj2p99C0yq0w",
    authDomain: "kindred-companion-app.firebaseapp.com",
    databaseURL: "https://kindred-companion-app-default-rtdb.firebaseio.com",
    projectId: "kindred-companion-app",
    storageBucket: "kindred-companion-app.appspot.com",
    messagingSenderId: "690663033744",
    appId: "1:690663033744:web:670c09a6533710ec800115",
    measurementId: "G-B79MZ9KTXW"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
