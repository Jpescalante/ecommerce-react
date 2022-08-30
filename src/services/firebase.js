// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqO1oYeCcIXfWdk4ohO_qEm-E5iZGuQls",
  authDomain: "react-tp-01.firebaseapp.com",
  projectId: "react-tp-01",
  storageBucket: "react-tp-01.appspot.com",
  messagingSenderId: "205162232528",
  appId: "1:205162232528:web:9260f6eb1be88d0e0c3cd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestoreDB = getFirestore(app);

export default firestoreDB;