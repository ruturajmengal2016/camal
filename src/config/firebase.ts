// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  Auth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIytYZS5_VjVnVdeA6R06wY0Lb8pTayTc",
  authDomain: "camal-b7b55.firebaseapp.com",
  projectId: "camal-b7b55",
  storageBucket: "camal-b7b55.appspot.com",
  messagingSenderId: "626899458865",
  appId: "1:626899458865:web:c3b48adf6682723eb6ae10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
