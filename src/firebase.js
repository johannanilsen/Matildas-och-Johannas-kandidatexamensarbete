 import firebase from "firebase"
 
 var firebaseApp = firebase.initializeApp({
 // Your web app's Firebase configuration
    apiKey: "AIzaSyDTBYokNJtJ6IEFc7bKEaM4D8KG-xZa1HY",
    authDomain: "kexarbete-d133f.firebaseapp.com",
    projectId: "kexarbete-d133f",
    storageBucket: "kexarbete-d133f.appspot.com",
    messagingSenderId: "971922008565",
    appId: "1:971922008565:web:e42e15b6722fa30316d8bc"
 });

var db = firebaseApp.firestore()

export{ db };
