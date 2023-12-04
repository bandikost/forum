import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';




const firebaseConfig = {
    apiKey: "AIzaSyAMplRbS4kkCbjNMs-RQwMiBiB0O9lK66Y",
    authDomain: "catalog-e0fb9.firebaseapp.com",
    projectId: "catalog-e0fb9",
    storageBucket: "catalog-e0fb9.appspot.com",
    messagingSenderId: "584168373417",
    appId: "1:584168373417:web:348ab632c45af482333db8",
    measurementId: "G-QTG5XC4V0X"
  };
    firebase.initializeApp(firebaseConfig);
    export const auth = firebase.auth();
    export const storage = firebase.storage();
    export const db = firebase.firestore();
    export default firebase;