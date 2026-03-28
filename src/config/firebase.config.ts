import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"



const firebaseConfig = {
    apiKey: "AIzaSyCY500m5M54XTK7ZcaBKoTTZC8ffe6ybV0",
    authDomain: "ecommerce-my-56ea8.firebaseapp.com",
    projectId: "ecommerce-my-56ea8",
    storageBucket: "ecommerce-my-56ea8.firebasestorage.app",
    messagingSenderId: "665394247766",
    appId: "1:665394247766:web:f7d72f33eb1b70576a23f7"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

