import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config={
    apiKey: "AIzaSyBMXiw7fufExjp59eBDBMI8iHhMeAJtnbc",
    authDomain: "ecommerce-3ad24.firebaseapp.com",
    databaseURL: "https://ecommerce-3ad24.firebaseio.com",
    projectId: "ecommerce-3ad24",
    storageBucket: "ecommerce-3ad24.appspot.com",
    messagingSenderId: "539395544447",
    appId: "1:539395544447:web:fa21ea1202677fc481b64a",
    measurementId: "G-1VSJJWTTDJ"
};
firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore=firebase.firestore();
const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;