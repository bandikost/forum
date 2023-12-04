import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';




const firebaseConfig = {
    apiKey: "AIzaSyAGuhCv6SRtGvfSBjAzRMzkubwHp_-sI5Q",
    authDomain: "forum-db93c.firebaseapp.com",
    databaseURL: "https://forum-db93c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "forum-db93c",
    storageBucket: "forum-db93c.appspot.com",
    messagingSenderId: "19249672480",
    appId: "1:19249672480:web:95b8651fd03eddffabe745",
    measurementId: "G-YZ67H6BT9K"
  };


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const storage = firebase.storage();
export const db = firebase.firestore();
export default firebase;