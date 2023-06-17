import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBvlETQUoK2JvLvWtnHOcz5vHRkvT32l88",
  authDomain: "scuttlebutt-3ef1a.firebaseapp.com",
  projectId: "scuttlebutt-3ef1a",
  storageBucket: "scuttlebutt-3ef1a.appspot.com",
  messagingSenderId: "713076872857",
  appId: "1:713076872857:web:9879f85801a104da180a08"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);