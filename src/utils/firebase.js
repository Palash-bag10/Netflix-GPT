// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiHbU1SvoeobxVY0-nsv2kuuDwEvh2ta4",
  authDomain: "netflixgpt-5b62f.firebaseapp.com",
  projectId: "netflixgpt-5b62f",
  storageBucket: "netflixgpt-5b62f.appspot.com",
  messagingSenderId: "965318618654",
  appId: "1:965318618654:web:11c4b1d218cde2f448c80f",
  measurementId: "G-F8HKBXZHDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);