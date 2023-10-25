import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAMg066b8vpLjC6RXhJ6wtiEq669EWmon0",
  authDomain: "fir-1-df1fb.firebaseapp.com",
  projectId: "fir-1-df1fb",
  storageBucket: "fir-1-df1fb.appspot.com",
  messagingSenderId: "1073708996537",
  appId: "1:1073708996537:web:8e95dcffd616883fc48868"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Access Firestore service from the app instance
export const storage = getStorage(app); // Access Storage service from the app instance
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
