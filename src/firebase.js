import firebase from 'firebase'

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBknjkBBUm-L37NcPkOF31AM4WIUGm6Kec",
    authDomain: "youthoob-22fe6.firebaseapp.com",
    projectId: "youthoob-22fe6",
    storageBucket: "youthoob-22fe6.appspot.com",
    messagingSenderId: "55830231677",
    appId: "1:55830231677:web:91ac3d810e4075ccb98f14",
    measurementId: "G-07X6F8LL6S"
  };




  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;