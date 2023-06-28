// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcHLJGC9Xm8bz9RW94i2AH_meD_8MZWfw",
  authDomain: "huracan-carbono.firebaseapp.com",
  projectId: "huracan-carbono",
  storageBucket: "huracan-carbono.appspot.com",
  messagingSenderId: "967444382414",
  appId: "1:967444382414:web:6d4f774900a300b893469f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
};
