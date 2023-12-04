import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAMplRbS4kkCbjNMs-RQwMiBiB0O9lK66Y",
    authDomain: "catalog-e0fb9.firebaseapp.com",
    projectId: "catalog-e0fb9",
    storageBucket: "catalog-e0fb9.appspot.com",
    messagingSenderId: "584168373417",
    appId: "1:584168373417:web:348ab632c45af482333db8",
    measurementId: "G-QTG5XC4V0X"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default firebase;