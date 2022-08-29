import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "devtube-6c9f6.firebaseapp.com",
  projectId: "devtube-6c9f6",
  storageBucket: "devtube-6c9f6.appspot.com",
  messagingSenderId: "316605514652",
  appId: "1:316605514652:web:f38286654a4a4a099abe59"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
