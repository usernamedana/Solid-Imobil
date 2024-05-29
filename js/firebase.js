//cheia pt blog din firebase//

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6lYFz9ZKnvMBOgipQoR0k_vEd69HB1zY",
  authDomain: "solid-imobil.firebaseapp.com",
  projectId: "solid-imobil",
  storageBucket: "solid-imobil.appspot.com",
  messagingSenderId: "178123720385",
  appId: "1:178123720385:web:c631e175da84aedb2eb640"
};

const yearElement = document.getElementById('year');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const postareBtn = document.getElementById('postare-btn');
/* constanta pt a citi numele utilizatorului */
const salutare = document.getElementById('username'); 
let user = null;

/*  adaugam administratori*/
let admins = ["ENZt1nRcE8WOieT4rzztYlVZqFm2"];


//setam bazele firebase, ne conectam la serviciu
firebase.initializeApp(firebaseConfig);

//referinta la serviciul de autentificare
const auth = firebase.auth();


//referinta la baza de date
const db = firebase.firestore();


//referinta la colectia de postari din baza de date
const postariDb = db.collection('postari');

//aici alegem provider de logare prin google
const provider = new firebase.auth.GoogleAuthProvider();

///legatura cu butonul login
loginBtn.onclick = function(){
    console.log("logareeee.....");
    /*  logare si reimprospatare pagina - o operatie asincrona prin "then"*/
    auth.signInWithPopup(provider).then(function() { window.location.reload(); });

}

logoutBtn.onclick = function() {
    auth.signOut();
    window.location.reload();
}

///verificam daca e administrator cel logat

function isAdmin() {
    let admin;

    if (user == null)
        return false;
    
    admin = admins.includes(user.uid); // true or false

    return admin;
}

function formatDate(time) {
    let date = new Date(time);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let result = day + "-" + month + "-" + year;

    return result;


}

/* eveniment de autentificare si delogare, fuser este utilizatorul vazut in firebase*/
auth.onAuthStateChanged(function(fuser) {
    user = fuser;
    console.log(user);
    if (user != null) {

        /*logat in sistem */

        logoutBtn.style.display = "block";
        loginBtn.style.display = "none";
/* Adaugam salut cu utilizatorul*/
        salutare.innerHTML = "Salut, "+ user.displayName;
       
       
        if (isAdmin() == true) {
            postareBtn.style.display = "block";

        }
        else{
            postareBtn.style.display = "none";

        }
    }


    else{
        //nu este logat in sistem

        logoutBtn.style.display = "none";
        loginBtn.style.display = "block";
        postareBtn.style.display = "none";

    }
    document.querySelector('body').style.display = "block";
}) 


if (yearElement) {
    let date = new Date();
    
    yearElement.innerHTML = date.getFullYear() + " ©";
}

