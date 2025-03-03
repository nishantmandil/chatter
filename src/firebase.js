import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsvpymCArDFncOVFHp_3cUsNaHR8ceGjY",
    authDomain: "chatter-111n.firebaseapp.com",
    projectId: "chatter-111n",
    storageBucket: "chatter-111n.appspot.com",
    messagingSenderId: "298396011302",
    appId: "1:298396011302:web:3fce9ff2bf06cfb6998fe7",
    measurementId: "G-Z3MPTH5GND"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;