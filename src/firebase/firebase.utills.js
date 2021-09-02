import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyASqnfo_ANpqLUiL1wPwE3ksIXsUOBvGIA",
  authDomain: "crwn-db-5e59f.firebaseapp.com",
  projectId: "crwn-db-5e59f",
  storageBucket: "crwn-db-5e59f.appspot.com",
  messagingSenderId: "719433470203",
  appId: "1:719433470203:web:3ae17a7361d3d6da7b605e",
  measurementId: "G-1Q420XD6SG",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
};


export const createUserProfileDocument = async (userAuth,addtionData={}) => { 
 if (!userAuth) {
   return ; 
 }

  const userRef = await firestore.doc(`users/${userAuth.uid}`) ; 
  const snapShot = await userRef.get() ; 

  if (snapShot) {  
    const {displayName , email} = userAuth; 
    const createdAt = new Date () ;
    console.log(displayName , email)

    try {
       await userRef.set({
         displayName:displayName , 
         email:email ,
         createdAt: createdAt,
         ...addtionData 
       })
    }

    catch (err){ 
    console.log('something wrong')
    }

  }

  return userRef  ;
}


export default firebase;