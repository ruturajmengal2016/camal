import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}
// Your web app's Firebase configuration
const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyD8RLSucfQSMAReQg6XRCkoz4VdVK2LW6s",
  authDomain: "camal-483ee.firebaseapp.com",
  projectId: "camal-483ee",
  storageBucket: "camal-483ee.appspot.com",
  messagingSenderId: "553843336942",
  appId: "1:553843336942:web:b5a1cf2995f70fcab835ff",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
