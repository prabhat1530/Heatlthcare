// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAhuS973-eBhWcQQVhYAl5qhZaBSFAXOKw",
  authDomain: "neuro-healthcare.firebaseapp.com",
  projectId: "neuro-healthcare",
  storageBucket: "neuro-healthcare.appspot.com",
  messagingSenderId: "317902053700",
  appId: "1:317902053700:web:cee078a405013abb60f711",
  measurementId: "G-DBK3R6JDFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();