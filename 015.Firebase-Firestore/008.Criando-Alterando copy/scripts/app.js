
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

const TURMA = "turmaA";

let db = firebase.firestore();

// db.collection(TURMA).add({
//     name: "Marcos",
//     midleName: "Santos",
//     notes: {
//         note1: 9.6,
//         note2: 6.7
//     }
// }).then((doc)=>{
//     console.log("Documento inserido com sucesso!", doc);
// }).catch(err =>{
//     console.log(err);
// })

// db.collection(TURMA).doc("NewStudent").set(
db.collection(TURMA).doc("NewStudent").update(
    {
        // city: firebase.firestore.FieldValue.arrayRemove("ilheus")
        // "notes.note1": firebase.firestore.FieldValue.increment(4)
        // city: firebase.firestore.FieldValue.delete()
        
        // name: "Clebinho",
        // midleName: "Toim",
        // notes:{ 
        //     note1: 6.4,
        //     note2: 9.6,
        // }
    }
    // {

    //     midleName: "Sweteer",

    // }, { merge: true}
).then(()=>{
    console.log("Documento inserido com sucesso!");
}).catch(err=>{
    console.log(err);
})