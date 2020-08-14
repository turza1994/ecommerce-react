import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBkS5NfRMtDFR4Ix5PUzUQfWrD-ahZpv70",
    authDomain: "ecommerce-db-e6796.firebaseapp.com",
    databaseURL: "https://ecommerce-db-e6796.firebaseio.com",
    projectId: "ecommerce-db-e6796",
    storageBucket: "ecommerce-db-e6796.appspot.com",
    messagingSenderId: "1082360787502",
    appId: "1:1082360787502:web:f63b50fb386d5a7c5ee5bf",
    measurementId: "G-1GQ8MRY90R"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  export const createUserProfile = async (user, additionalData)=>{

    // if(!user) return
    const {uid, displayName, email} = user;
    const createdAt = new Date();
    const userRef = firestore.doc(`users/${uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }

    return userRef
  }

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;