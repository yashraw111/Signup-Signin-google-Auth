import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDaqKeTGQ4UmaKGls3C2s0d4jfAYF9HRM",
  authDomain: "thunk-user.firebaseapp.com",
  projectId: "thunk-user",
  storageBucket: "thunk-user.firebasestorage.app",
  messagingSenderId: "688985601743",
  appId: "1:688985601743:web:da0d74ab437dc2ff9169ba",
  measurementId: "G-9DKXFJS4P6",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
