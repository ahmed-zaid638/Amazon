// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import { GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJTKojmvClJ7VKoICkxJQFPUf5ZaGMJDs",
  authDomain: "https://amazon-nextjs-theta.vercel.app/",
  projectId: "nextjs-809bb",
  storageBucket: "nextjs-809bb.appspot.com",
  messagingSenderId: "853193966611",
  appId: "1:853193966611:web:fc37abfabc326efe1a6be6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider(app)








