import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9ciB9Uqv49XhoRXon5gxWNJICvQF8yz0",
  authDomain: "readingbook-6f0e8.firebaseapp.com",
  projectId: "readingbook-6f0e8",
  storageBucket: "readingbook-6f0e8.appspot.com",
  messagingSenderId: "28564897536",
  appId: "1:28564897536:web:40f676423494eacef37de5",
  measurementId: "G-WX7SCBN43N",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
