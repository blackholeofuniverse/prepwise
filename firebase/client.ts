import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getApp, getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA64Ol1ShmMWWV-Q2E_JGGVC-jYV02v5wM",
    authDomain: "prepwise-a5d6e.firebaseapp.com",
    projectId: "prepwise-a5d6e",
    storageBucket: "prepwise-a5d6e.firebasestorage.app",
    messagingSenderId: "304221254092",
    appId: "1:304221254092:web:f7a9a05e93cd611c2ded69",
    measurementId: "G-6BLXZJTV8S"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp() ;

export const auth = getAuth(app)
export const db = getFirestore(app)