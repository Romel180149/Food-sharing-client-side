import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuwqndajRwCpmX4W1Arycw_U5JjDRaCT8",
  authDomain: "food-sharing-d03a5.firebaseapp.com",
  projectId: "food-sharing-d03a5",
  storageBucket: "food-sharing-d03a5.appspot.com",
  messagingSenderId: "371095465956",
  appId: "1:371095465956:web:47ef94bb0afa381fede1f1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
