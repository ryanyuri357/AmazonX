// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBMJBBh4DQjGIshlLyBPMpU6yUi0FP2Y7c",
    authDomain: "x-96655.firebaseapp.com",
    projectId: "x-96655",
    storageBucket: "x-96655.appspot.com",
    messagingSenderId: "588737365858",
    appId: "1:588737365858:web:b109424e0643d56a6cce3b",
    measurementId: "G-1T85NQV36D"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
