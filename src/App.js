import React, { useState } from 'react';
import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import './App.css';



const firebaseConfig = {
  apiKey: "AIzaSyDanxhovzCjDt8K0GdaAmngQsX_MsfCpEg",
  authDomain: "gallery-64590.firebaseapp.com",
  projectId: "gallery-64590",
  storageBucket: "gallery-64590.appspot.com",
  messagingSenderId: "45531961141",
  appId: "1:45531961141:web:4c538f9c402ebb0d90de7c"
};

const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
