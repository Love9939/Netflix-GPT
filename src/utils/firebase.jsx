// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBXDZZbrhArcakJ1jpEAWMnhufAGXaRZw",
  authDomain: "netflixgpt-3cc52.firebaseapp.com",
  projectId: "netflixgpt-3cc52",
  storageBucket: "netflixgpt-3cc52.firebasestorage.app",
  messagingSenderId: "137339422183",
  appId: "1:137339422183:web:66e40df17630247d136942",
  measurementId: "G-5N8346JWS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();