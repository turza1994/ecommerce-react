import firebase from 'firebase/app'
import './firebase/firestore'
import './firebase/auth'

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

  firebase.initializeApp(cofig);

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;