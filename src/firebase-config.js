// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: "G-1DFZ26370N"
};

// Clabed Project Config (Storage)
const clabedFirebaseConfig = {
  apiKey: import.meta.env.CLABED_FIREBASE_API_KEY,
  authDomain: import.meta.env.CLABED_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.CLABED_FIREBASE_PROJECT_ID,
  storageBucket: "clabed-vehicle-images.appspot.com",
  messagingSenderId: import.meta.env.CLABED_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.CLABED_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, 'SwiftAid');
const clabedApp = initializeApp(clabedFirebaseConfig, 'SwiftAidStorage');
const analytics = getAnalytics(app);
export const auth = getAuth(app);

// Firestore from SwiftAid
export const db = getFirestore(app);

// Storage from Clabed
export const storage = getStorage(clabedApp);