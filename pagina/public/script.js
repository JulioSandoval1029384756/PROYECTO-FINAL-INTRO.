
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {getAuth, GoogleAuthProvider, signInWithPopup}
from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js'
import { getDatabase, ref, onValue, update, push,child }
from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js'

const firebaseConfig = {
    apiKey: "AIzaSyCYedeGLS7LuVu8zHn1dYqQ-az8VBW4Op0",
    authDomain: "estilos-javascript.firebaseapp.com",
    projectId: "estilos-javascript",
    storageBucket: "estilos-javascript.appspot.com",
    messagingSenderId: "529761217675",
    appId: "1:529761217675:web:8b5b05692c7b530856388e",
    measurementId: "G-BWKLRHXHWR"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);



$(document).ready(function() { 
  $('.azul').click(function(event) { 
    $('body').css('background', '#08c'); 
  });
  
  
  $('.blanco').click(function(event) { 
    $('body').css('background', '#ff6347'); 
  });

  $('.rojo').click(function(event) { 
    $('body').css('background', '#800000'); 
  });


});

