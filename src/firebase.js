
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCz8EJgQJ81EIuQ8aZnI6ZWaWd8FcyWsn4",
  authDomain: "react-auth-e033d.firebaseapp.com",
  projectId: "react-auth-e033d",
  storageBucket: "react-auth-e033d.appspot.com",
  messagingSenderId: "489500856079",
  appId: "1:489500856079:web:b0d65dd9778a066e44787a",
  measurementId: "G-Y2T3W7N3MX"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {app,auth,provider};