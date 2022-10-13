import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCJfM1kl-IB7wUrSz6r3W1NvZC_cDNZx7Q",
  authDomain: "fbclone-4ae93.firebaseapp.com",
  projectId: "fbclone-4ae93",
  storageBucket: "fbclone-4ae93.appspot.com",
  messagingSenderId: "615816614593",
  appId: "1:615816614593:web:b96cece7a1f2a1f44e7a40",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebase.firestore();
const storage = getStorage(app);

export { db, storage };
