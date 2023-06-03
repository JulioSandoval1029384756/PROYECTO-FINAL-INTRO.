 // Import the functions you need from the SDKs you need
	
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
 import {getAuth, GoogleAuthProvider, signInWithPopup}
 from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js'
 import { getDatabase, ref, onValue, update, push,child }
 from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js'
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJre4fv5YaAPI9tpH9xSaIPwIuYNIzk_I",
    authDomain: "julio-0907-23-19529.firebaseapp.com",
    projectId: "julio-0907-23-19529",
    storageBucket: "julio-0907-23-19529.appspot.com",
    messagingSenderId: "281637928685",
    appId: "1:281637928685:web:c6d39460b9c53b9eef16e4",
    measurementId: "G-Z1VZJE04Q1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  c
 
         var numpantalla="0";
         var pantallaconnumero="si"; //Si o No
         var usarpunto="no"; //Si o No
         var numespera=0;
         var operapendiente="";
         var solucion="";
         
         function ingresarnumero(x)
         {
         if(x!=".")
         {
         
             if(numpantalla=="0" || pantallaconnumero=="si")
                 {
                     document.Calculadora.txtboxnros.value=x;
                     numpantalla=x;
                 }
             else if(x!=".")
                 {
                     document.Calculadora.txtboxnros.value+=x;
                     numpantalla+=x;
                 }
         }
         
         if(x=="." && usarpunto=="no" && numpantalla=="0")
             {
                 document.Calculadora.txtboxnros.value="0.";
                 numpantalla=x;
                 usarpunto="si";
             }	
         else if(x=="." && usarpunto=="no")
             {
         
                 document.Calculadora.txtboxnros.value +=x;
                 numpantalla +=x;
                 usarpunto="si";
             }
         else if(x=="." && usarpunto=="si")
         {
         
         }
             pantallaconnumero="no";
         }
         
         function ingresaoperacion(y)
         {
         if(operapendiente =="")
         {
         
         numespera=document.Calculadora.txtboxnros.value;
         document.Calculadora.txtboxnros.value +=y;
         operapendiente = y;
         pantallaconnumero = "no";
         numpantalla = "";
         usarpunto = "no";
         _
         }
         
         }
         
         function resultado()
         {
         
         if(operapendiente != "") 
         {
         solucion=numespera+operapendiente+numpantalla;
         document.Calculadora.txtboxnros.value=eval(solucion);
         numpantalla=eval(solucion);
         pantallaconnumero="si";
         operapendiente = "";
         usarpunto = "no";
         
         }
         
         }
         
         function raiz()
         {
         
         if(operapendiente == "")
         {
         document.Calculadora.txtboxnros.value=Math.sqrt(numpantalla);
         pantallaconnumero = "no";
         operapendiente = "";
         usarpunto = "no";
         }
         }
         
         function limpiar()
         {
         
          numpantalla="0";
          pantallaconnumero="si";
          usarpunto="no"; 
          numespera=0;
          operapendiente="";
          solucion="";
         document.Calculadora.txtboxnros.value="0";
         }