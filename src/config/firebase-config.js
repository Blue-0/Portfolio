// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRJXOVYOTFi_-M1Upi6qXV0VH4Y0iTI1Y",
  authDomain: "porfolio-denis-fluteaux.firebaseapp.com",
  projectId: "porfolio-denis-fluteaux",
  storageBucket: "porfolio-denis-fluteaux.appspot.com",
  messagingSenderId: "580320044020",
  appId: "1:580320044020:web:08166c42cd8e3fb7124fa1",
  measurementId: "G-7V4WW9TM3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);