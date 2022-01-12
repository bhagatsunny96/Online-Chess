import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBf8vyZPWYOh4e9QfuRDaoq7-fI9ihqOhU",
    authDomain: "chess-859fd.firebaseapp.com",
    projectId: "chess-859fd",
    storageBucket: "chess-859fd.appspot.com",
    messagingSenderId: "752033842581",
    appId: "1:752033842581:web:1b8320eeb94049a5bf629c",
    measurementId: "G-6ZJ9RL50TG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export const auth = firebase.auth()
export default firebase