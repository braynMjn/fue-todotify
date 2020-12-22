import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCtgRQZNekVsfLZywrmnC8X2Foi8DrltAw",
    authDomain: "fue-todotify.firebaseapp.com",
    projectId: "fue-todotify",
    storageBucket: "fue-todotify.appspot.com",
    messagingSenderId: "697283154602",
    appId: "1:697283154602:web:45e6fad097c0e4dfe7b6d3"
  };
  // Initialize Firebase
 export const db = firebase.initializeApp(firebaseConfig).firestore();