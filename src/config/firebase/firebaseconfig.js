import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiDYRksC_iE-2-sAuVxmlNR5-bHtkT8bQ",
  authDomain: "todo-app-using-firebase-e6bee.firebaseapp.com",
  projectId: "todo-app-using-firebase-e6bee",
  storageBucket: "todo-app-using-firebase-e6bee.firebasestorage.app",
  messagingSenderId: "70288857661",
  appId: "1:70288857661:web:989d87568eedd2ca122854",
  measurementId: "G-CS0YVZTCGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);