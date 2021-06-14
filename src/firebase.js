import firebase from "firebase";

//?Authentication //auth
import "firebase/auth";
//?realTime database =>just like mongodb
import "firebase/database";
// //?Storage //you can store files , images , videos , pdf on remote storage
// import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBX1Fhphe2updy5xhDkivU3Bo_UCOhJ9dQ",
  authDomain: "zee5clone.firebaseapp.com",
  projectId: "zee5clone",
  storageBucket: "zee5clone.appspot.com",
  messagingSenderId: "840159000492",
  appId: "1:840159000492:web:8cf70180f64d83b83eac09",
};
//!initialize firebase app and communicate with react app
firebase.initializeApp(firebaseConfig);
export default firebase;
