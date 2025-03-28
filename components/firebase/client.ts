// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA64Ol1ShmMWWV-Q2E_JGGVC-jYV02v5wM",
  authDomain: "prepwise-a5d6e.firebaseapp.com",
  projectId: "prepwise-a5d6e",
  storageBucket: "prepwise-a5d6e.firebasestorage.app",
  messagingSenderId: "304221254092",
  appId: "1:304221254092:web:f7a9a05e93cd611c2ded69",
  measurementId: "G-6BLXZJTV8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);