import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCReKWu24zMQycRQBjppli9gx6gYrevNmo",
  authDomain: "mern-tiktok-clone-17afa.firebaseapp.com",
  databaseURL: "https://mern-tiktok-clone-17afa.firebaseapp.com/",
  projectId: "mern-tiktok-clone-17afa",
  storageBucket: "mern-tiktok-clone-17afa.appspot.com",
  messagingSenderId: "25050827602",
  appId: "1:25050827602:web:a13b98e5b6cd607f2cc88b"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
