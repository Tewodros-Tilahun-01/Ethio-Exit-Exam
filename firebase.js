// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, persistentLocalCache } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOaUt5vcapGAI4VAftQCyH4X_jiGPkMe0",
  authDomain: "ethio-exit-exam.firebaseapp.com",
  projectId: "ethio-exit-exam",
  storageBucket: "ethio-exit-exam.appspot.com",
  messagingSenderId: "43755534925",
  appId: "1:43755534925:web:6904bcb7704b581dfc7a04",
  measurementId: "G-LVRV1T0PYR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, {
  persistence: true,
});
const db = getFirestore(app);
export default db;
