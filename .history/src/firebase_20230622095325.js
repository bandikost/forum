// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMplRbS4kkCbjNMs-RQwMiBiB0O9lK66Y",
  authDomain: "catalog-e0fb9.firebaseapp.com",
  projectId: "catalog-e0fb9",
  storageBucket: "catalog-e0fb9.appspot.com",
  messagingSenderId: "584168373417",
  appId: "1:584168373417:web:348ab632c45af482333db8",
  measurementId: "G-QTG5XC4V0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);