// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW-dUa5YlxN2eImDvitAMpAg43Rx5r9P4",
  authDomain: "swiftaid-aff1f.firebaseapp.com",
  projectId: "swiftaid-aff1f",
  storageBucket: "swiftaid-aff1f.firebasestorage.app",
  messagingSenderId: "691669912846",
  appId: "1:691669912846:web:3b334271dcf719a8669b5f",
  measurementId: "G-1DFZ26370N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);