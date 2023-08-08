import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAaiMcysDZHjcdJknjEQHgVaanT2NUY3yg",
  authDomain: "el-palacio-del-sueno.firebaseapp.com",
  projectId: "el-palacio-del-sueno",
  storageBucket: "el-palacio-del-sueno.appspot.com",
  messagingSenderId: "105228438620",
  appId: "1:105228438620:web:f6d410fd26b7c2c0102a99",
  measurementId: "G-Q0FH3BKRZH"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);