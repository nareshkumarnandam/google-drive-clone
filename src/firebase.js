import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC2OOrpAlIYPmVB3YgFJpoDuG6Qk6tBFqQ",
    authDomain: "drive-clone-7c5f6.firebaseapp.com",
    projectId: "drive-clone-7c5f6",
    storageBucket: "drive-clone-7c5f6.appspot.com",
    messagingSenderId: "670556347805",
    appId: "1:670556347805:web:a2c641a7ec2c685eff2374",
    measurementId: "G-CB1L3WCLFG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { db, storage, auth, provider};
