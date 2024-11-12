import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVjFoCXTJ85m-X6wgaAisvpGdqQxUxKWo",
  authDomain: "seattlebestsmiles.firebaseapp.com",
  projectId: "seattlebestsmiles",
  storageBucket: "seattlebestsmiles.firebasestorage.app",
  messagingSenderId: "547103767964",
  appId: "1:547103767964:web:329559da6eef3c1ca2dc59",
  measurementId: "G-3RGWLG6B3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
//used to sign in
export const googleProvider = new GoogleAuthProvider();