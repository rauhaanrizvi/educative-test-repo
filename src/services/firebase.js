// Import the functions you need from the SDKs you need
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNv524ovAVcTzN8ZsKc5hFkGp0-krGF8E",
  authDomain: "educative-test-cfceb.firebaseapp.com",
  projectId: "educative-test-cfceb",
  storageBucket: "educative-test-cfceb.appspot.com",
  messagingSenderId: "302171592594",
  appId: "1:302171592594:web:8e17ea99e18ac710e7934b",
  measurementId: "G-XGJ6GT9NPX",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth;
export const db = firebase.database();
export const store = firebase.firestore();
