import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyCmDDnolaA9RquI4rTeSTd_5LpdP4Qnwew",
   authDomain: "vue-js-firebase-c4be2.firebaseapp.com",
   projectId: "vue-js-firebase-c4be2",
   storageBucket: "vue-js-firebase-c4be2.appspot.com",
   messagingSenderId: "106489747609",
   appId: "1:106489747609:web:4310a73821137563d34008",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
