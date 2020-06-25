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
export const createUserProfileDocument=async (userAuth,additionalUserInfo)=>{
    if(!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot=await userRef.get();
    if(!snapShot.exists){
        const {displayName,email}=userAuth;
        const createdAt=new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalUserInfo
            })
            
        }catch (err) {
            console.log("user creation error",err.message);
        }
    }
    return userRef;
}
firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore=firebase.firestore();
const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;