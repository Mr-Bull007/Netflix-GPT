// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVrNf--Y3cvzwJ6DAdYlrCJkux7oLe73k",
  authDomain: "netflixgpt-16367.firebaseapp.com",
  projectId: "netflixgpt-16367",
  storageBucket: "netflixgpt-16367.firebasestorage.app",
  messagingSenderId: "919107563447",
  appId: "1:919107563447:web:31407638a66ea9e86f8232",
  measurementId: "G-N88CFHEWNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();