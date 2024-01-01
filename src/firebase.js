
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwNIXjZmFWgGaUTNbJIF0hexMND2mO2qs",
  authDomain: "zella-real-state.firebaseapp.com",
  projectId: "zella-real-state",
  storageBucket: "zella-real-state.appspot.com",
  messagingSenderId: "126414227906",
  appId: "1:126414227906:web:e8957a5c13f24a17d9ee5b"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore();