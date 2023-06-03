import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {getAuth, GoogleAuthProvider, signInWithPopup}
from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js'
import { getDatabase, ref, onValue, update, push,child }
from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js'


const firebaseConfig = {
  apiKey: "AIzaSyB-oR5hXL8D8rmieoPHx-Kf557Ra6ZnWdk",
  authDomain: "proyecto-final-introducc-ea84f.firebaseapp.com",
  projectId: "proyecto-final-introducc-ea84f",
  storageBucket: "proyecto-final-introducc-ea84f.appspot.com",
  messagingSenderId: "457635104437",
  appId: "1:457635104437:web:e35a26d5e9e8a87a5ca0fc",
  measurementId: "G-XGHPMWKK3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);