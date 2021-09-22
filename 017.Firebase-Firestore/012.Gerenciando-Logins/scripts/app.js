// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyBJxBxaxiK0na0Soxvfs-V4xrcUxIc-px0",
    authDomain: "colegio-ca811.firebaseapp.com",
    databaseURL: "https://colegio-ca811-default-rtdb.firebaseio.com",
    projectId: "colegio-ca811",
    storageBucket: "colegio-ca811.appspot.com",
    messagingSenderId: "64500748623",
    appId: "1:64500748623:web:cd8776b2e38c244443753a",
    measurementId: "G-BP6JP9JJFC"
};

firebase.initializeApp(config);

let db = firebase.firestore();
const auth = firebase.auth();

// function login(getEmail, getPassword){
//     auth.signInWithEmailAndPassword(getEmail, getPassword)
//         .then(loggedUser=>console.log("LOGADO!"))
//         .catch(error =>console.log("FALHA NO LOGIN!"));
//     console.log(auth.currentUser);
// }
// login('calango@gmail.com', 'calango123');

auth.onAuthStateChanged(user=> user? console.log("Login On"):console.log("Login Off"))

function logout(){
    auth.signOut()
        .then(()=>console.log("Logout"))
        .catch(err=>console.log(err))
}
setTimeout(logout(), 2000);