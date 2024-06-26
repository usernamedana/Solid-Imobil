import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyD6lYFz9ZKnvMBOgipQoR0k_vEd69HB1zY",
    authDomain: "solid-imobil.firebaseapp.com",
    projectId: "solid-imobil",
    storageBucket: "solid-imobil.appspot.com",
    messagingSenderId: "178123720385",
    appId: "1:178123720385:web:c631e175da84aedb2eb640"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const postareBtn = document.getElementById('postare-btn'); 
let user = null;

let admins = ["ENZt1nRcE8WOieT4rzztYlVZqFm2"];

loginBtn.addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user;
        updateUI();
    })
    .catch((error) => {
        console.error("Error during login:", error);
    });
});

logoutBtn.addEventListener('click', () => {
    signOut(auth).then(() => {
    user = null;
    updateUI();
    }).catch((error) => {
    console.error("Error during logout:", error);
    });
});

postareBtn.addEventListener('click', () => {
    if (user && admins.includes(user.uid)) {
    alert("Admin access granted. You can post.");
    } else {
    alert("Access denied. You are not an admin.");
    }
});

onAuthStateChanged(auth, (currentUser) => {
    user = currentUser;
    updateUI();
});

function updateUI() {
    if (user) {
    logoutBtn.style.display = 'block';
    loginBtn.style.display = 'none';
    } else {
    logoutBtn.style.display = 'none';
    loginBtn.style.display = 'block';
    }
}