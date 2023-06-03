import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {getAuth, GoogleAuthProvider, signInWithPopup}
from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js'
import { getDatabase, ref, onValue, update, push,child }
from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGyaHgAousZnak8x6z5ljQT-p9wqb4S3w",
  authDomain: "curriculum-8fcfa.firebaseapp.com",
  projectId: "curriculum-8fcfa",
  storageBucket: "curriculum-8fcfa.appspot.com",
  messagingSenderId: "569897842299",
  appId: "1:569897842299:web:ab7921c8fb4ff2d63594de",
  measurementId: "G-DNRNDZNT2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);