// Import the functions you need from the SDKs you need
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0dvd74bRCkeAH3gFqxAk6fLq5hdDznp0",
  authDomain: "hello-test-7f4c1.firebaseapp.com",
  databaseURL: "https://hello-test-7f4c1.firebaseio.com",
  projectId: "hello-test-7f4c1",
  storageBucket: "hello-test-7f4c1.appspot.com",
  messagingSenderId: "882210228974",
  appId: "1:882210228974:web:0aab8ef0dbf1f010"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth;
export const db = firebase.database();
export const store = firebase.firestore();
