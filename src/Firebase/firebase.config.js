// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuwqndajRwCpmX4W1Arycw_U5JjDRaCT8",
  authDomain: "food-sharing-d03a5.firebaseapp.com",
  projectId: "food-sharing-d03a5",
  storageBucket: "food-sharing-d03a5.appspot.com",
  messagingSenderId: "371095465956",
  appId: "1:371095465956:web:47ef94bb0afa381fede1f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default auth;