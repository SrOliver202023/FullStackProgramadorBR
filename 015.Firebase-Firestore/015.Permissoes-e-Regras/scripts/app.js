const config = {
    apiKey: "AIzaSyAEyfxX9pGlg0gMJU5gymAy_nmW-TVWAUs",
    authDomain: "compras-662ed.firebaseapp.com",
    projectId: "compras-662ed",
    storageBucket: "compras-662ed.appspot.com",
    messagingSenderId: "372804499836",
    appId: "1:372804499836:web:85fdfc701d267eedf44cf9",
    measurementId: "G-9M4V0Z0ZKE"
};
firebase.initializeApp(config);

let db = firebase.firestore();
const auth = firebase.auth();

// setTimeout(logout(), 2000);
// login('calango@gmail.com', 'calango123');



auth.onAuthStateChanged(user=> user? console.log("Login On"):console.log("Login Off"))

// createUser('teste1@gmail.com', 'teste1');
// logout()
// login('teste1@gmail.com', 'teste1')
viewItems()

function login(getEmail, getPassword){
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(()=>{
        auth.signInWithEmailAndPassword(getEmail, getPassword)
        .then(loggedUser=>console.log("LOGADO!"))
        .catch(error =>console.log("FALHA NO LOGIN!"));
        // console.log(auth.currentUser);
    }).catch(err=>console.log(err))
}
function logout(){
    auth.signOut()
    .then() //()=>console.log("Logout")
    .catch(err=>console.log(err))
}
function createUser(getEmail, getPassword){
    auth.createUserWithEmailAndPassword(getEmail, getPassword)
    .then(user=>console.log("Registrado!"))
    .catch(error=>console.log(error));
}
function viewItems(){
    db.collection("compras").get()
    .then(snapshot=> snapshot.forEach(item =>console.log(item.data())))
    .catch(err=>console.log(err))
}