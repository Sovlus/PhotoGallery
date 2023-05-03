import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDanxhovzCjDt8K0GdaAmngQsX_MsfCpEg",
    authDomain: "gallery-64590.firebaseapp.com",
    projectId: "gallery-64590",
    storageBucket: "gallery-64590.appspot.com",
    messagingSenderId: "45531961141",
    appId: "1:45531961141:web:4c538f9c402ebb0d90de7c"
  };
  firebase.initializeApp(firebaseConfig);

  const projectStoreage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStoreage, projectFirestore };