// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFhsOqO4hr_uBy0Xl5EJU5D_I2Rk7mwzM",
  authDomain: "sakthibattries.firebaseapp.com",
  projectId: "sakthibattries",
  storageBucket: "sakthibattries.firebasestorage.app",
  messagingSenderId: "1063948478236",
  appId: "1:1063948478236:web:ccc335bca02e6589487cd9",
  measurementId: "G-97HG655BZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Google Sign-in function
export const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

export { auth, db, app };