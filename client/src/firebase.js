// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "propertydeals-ae42e.firebaseapp.com",
  projectId: "propertydeals-ae42e",
  storageBucket: "propertydeals-ae42e.firebasestorage.app",
  messagingSenderId: "1004251305940",
  appId: "1:1004251305940:web:5a8d8337507105c4c36841"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);