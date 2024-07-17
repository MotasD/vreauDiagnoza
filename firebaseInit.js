import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCK5SjyFR_sZH7C7S_dQDjB4KHP5O6gYKs",
  authDomain: "vreaudiagnoza.firebaseapp.com",
  projectId: "vreaudiagnoza",
  storageBucket: "vreaudiagnoza.appspot.com",
  messagingSenderId: "207207976947",
  appId: "1:207207976947:web:7eb4d62ffd05aab92ecc86",
  measurementId: "G-9GKDD69XDS",
  databaseURL: "https://vreaudiagnoza-default-rtdb.europe-west1.firebasedatabase.app/"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const database = firebase.database();
