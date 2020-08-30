import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyByAwUvM7t-IImrEyON7eXNoGXLduZYElE",
    authDomain: "fir-react-crud-4577e.firebaseapp.com",
    databaseURL: "https://fir-react-crud-4577e.firebaseio.com",
    projectId: "fir-react-crud-4577e",
    storageBucket: "fir-react-crud-4577e.appspot.com",
    messagingSenderId: "516242997256",
    appId: "1:516242997256:web:3085a8d3fbd1b5c48191bd",
    measurementId: "G-0JPLRM4MVG",
};
// Initialize Firebase
const firebaseDB = firebase.initializeApp(firebaseConfig);

export default firebaseDB.database().ref();
