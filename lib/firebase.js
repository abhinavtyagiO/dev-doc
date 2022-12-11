import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCJfhNSuMjXxOSCQLF8HWqdwbvH8D_TA_s",
  authDomain: "dev-doc-8abeb.firebaseapp.com",
  projectId: "dev-doc-8abeb",
  storageBucket: "dev-doc-8abeb.appspot.com",
  messagingSenderId: "1020650916023",
  appId: "1:1020650916023:web:3f19964258fa6c380aa532",
  measurementId: "G-R5TL1CHZBJ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
