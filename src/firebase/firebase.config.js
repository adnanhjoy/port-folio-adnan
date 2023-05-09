// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDufjoJjvEBbRytCuucUKGEg7NTbhDXX8",
  authDomain: "adnanio.firebaseapp.com",
  projectId: "adnanio",
  storageBucket: "adnanio.appspot.com",
  messagingSenderId: "787806958734",
  appId: "1:787806958734:web:a5c0da549efa9fb23585df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;