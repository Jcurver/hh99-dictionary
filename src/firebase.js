// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrBs4bSfofP6_hZEVy1ca4zO4BVM82sAY",
  authDomain: "sparta-react-basic-dbd6e.firebaseapp.com",
  projectId: "sparta-react-basic-dbd6e",
  storageBucket: "sparta-react-basic-dbd6e.appspot.com",
  messagingSenderId: "877820314629",
  appId: "1:877820314629:web:43db78e82d98a6f798086c",
  measurementId: "G-ZHDLRL51SR",
};

// const firebaseApp = initializeApp({
//   apiKey: "AIzaSyBrBs4bSfofP6_hZEVy1ca4zO4BVM82sAY",
//   authDomain: "sparta-react-basic-dbd6e.firebaseapp.com",
//   projectId: "sparta-react-basic-dbd6e",
// });

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
