// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJv5hNYz1-UfKi25kY0kMlHs1yd2voeu0",
  authDomain: "eco-adventure-experience-d8e4a.firebaseapp.com",
  projectId: "eco-adventure-experience-d8e4a",
  storageBucket: "eco-adventure-experience-d8e4a.firebasestorage.app",
  messagingSenderId: "746014740870",
  appId: "1:746014740870:web:63831f0314cee3b6b41c07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
