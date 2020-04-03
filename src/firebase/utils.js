import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyD_J0poq1MRY-_apO03q6wdeMRXW5k5EuI",
    authDomain: "sevakart-db.firebaseapp.com",
    databaseURL: "https://sevakart-db.firebaseio.com",
    projectId: "sevakart-db",
    storageBucket: "sevakart-db.appspot.com",
    messagingSenderId: "128793140837",
    appId: "1:128793140837:web:9e266169089b4f0416308c",
    measurementId: "G-E7ZPP9M0YL"
};


export const createUserProfileDocument =  (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot =  userRef.get();
    console.log(snapshot);
    if(!snapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.error('error creating user', error);
        }
    }

    return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

