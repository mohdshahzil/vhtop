// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH3ZOC5qNpOIibwsV4vc0gYPqqTiHwOes",
  authDomain: "vhtop-8f95b.firebaseapp.com",
  projectId: "vhtop-8f95b",
  storageBucket: "vhtop-8f95b.appspot.com",
  messagingSenderId: "167988790706",
  appId: "1:167988790706:web:7fd374089d367909f390ab",
  measurementId: "G-613QS9SRRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;