// Import the functions you need from the SDKs you need

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNoRQvVd2n70Mpd4h-faMMNYjPdRriErk",
  authDomain: "zoyaelegance-b2a29.firebaseapp.com",
  projectId: "zoyaelegance-b2a29",
  storageBucket: "zoyaelegance-b2a29.firebasestorage.app",
  messagingSenderId: "239615901164",
  appId: "1:239615901164:web:6b7ab36e6399979b8d94c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};

