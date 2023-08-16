
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBelCkJGYDRxkCF9uw6W5fmex4ObdzcK1c",
  authDomain: "onlineblog-6a2d0.firebaseapp.com",
  projectId: "onlineblog-6a2d0",
  storageBucket: "onlineblog-6a2d0.appspot.com",
  messagingSenderId: "243906554838",
  appId: "1:243906554838:web:d07b43b7f878a7d3281277"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);