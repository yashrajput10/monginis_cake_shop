// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW9Uzo6IvsLrl7h78Ywbo-ZXljtMEO0d8",
  authDomain: "monginis-shop.firebaseapp.com",
  projectId: "monginis-shop",
  storageBucket: "monginis-shop.appspot.com",
  messagingSenderId: "265778253864",
  appId: "1:265778253864:web:f65930808ec974307fe51d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
