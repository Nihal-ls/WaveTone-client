// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn0UmQWZSxjxRcCgr6XCUMZhVp7VrHbeU",
  authDomain: "wave-tone.firebaseapp.com",
  projectId: "wave-tone",
  storageBucket: "wave-tone.firebasestorage.app",
  messagingSenderId: "274235505281",
  appId: "1:274235505281:web:0b2d8634885cae83542b80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)