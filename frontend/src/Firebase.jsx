// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};