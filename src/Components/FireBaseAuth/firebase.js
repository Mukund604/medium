import { initializeApp } from "firebase/app";
import { getAuth } from    'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCA2osbloddDUgt9IFxji5tF0yc_2QsyQU",
  authDomain: "medium-clone-71caa.firebaseapp.com",
  projectId: "medium-clone-71caa",
  storageBucket: "medium-clone-71caa.appspot.com",
  messagingSenderId: "897788449943",
  appId: "1:897788449943:web:338d1236f5944cc19985d2",
  measurementId: "G-RX4FG828FT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth}; 