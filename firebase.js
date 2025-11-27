// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCljDyPD5uwROmILzfE4DMNJCnzv34pO-4",
  authDomain: "apif-ec2b6.firebaseapp.com",
  projectId: "apif-ec2b6",
  storageBucket: "apif-ec2b6.firebasestorage.app",
  messagingSenderId: "29742254602",
  appId: "1:29742254602:web:ce1d95fb4a7c51227f2df3",
  measurementId: "G-QVQ1C2121R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);