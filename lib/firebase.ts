import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore';



const  firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MSG_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

  

  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig)
  }


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

//Auth

const signInWithGoogle = () => (
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
)

const signOut = () => auth.signOut();

const addUser = (id, user) => firestore.collection('users').doc(id).set(user);

const getUser = (id) => firestore.collection('users').doc(id).get();
