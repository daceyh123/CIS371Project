import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB2dKOd7KLsmhCF9EXKPSiz5v8ptX00C6w",
    authDomain: "cis371-32cbb.firebaseapp.com",
    databaseURL: "https://cis371-32cbb.firebaseio.com",
    projectId: "cis371-32cbb",
    storageBucket: "",
    messagingSenderId: "676695324661",
    appId: "1:676695324661:web:266686822b22bc032b12bc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppDB = firebase.database();
const AppAUTH = firebase.auth();
export { AppDB, AppAUTH }; // Make it available to other modules