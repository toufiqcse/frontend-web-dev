// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjK5fEzAF3r-0AujqlYsK4y-L23xrPI6k",
  authDomain: "toufiq-portfolio.firebaseapp.com",
  projectId: "toufiq-portfolio",
  storageBucket: "toufiq-portfolio.appspot.com",
  messagingSenderId: "1097202868174",
  appId: "1:1097202868174:web:987479c5c3aa8cd3df159f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;