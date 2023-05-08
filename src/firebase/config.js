import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyDanxhovzCjDt8K0GdaAmngQsX_MsfCpEg",
    authDomain: "gallery-64590.firebaseapp.com",
    projectId: "gallery-64590",
    storageBucket: "gallery-64590.appspot.com",
    messagingSenderId: "45531961141",
    appId: "1:45531961141:web:4c538f9c402ebb0d90de7c"
  };
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp();
  
  
  export { projectStorage, projectFirestore, timestamp };