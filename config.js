import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDHWzwed4aBGByI5oUjCXAYFB4fslycxJM",
    authDomain: "social-app-321.firebaseapp.com",
    projectId: "social-app-321",
    storageBucket: "social-app-321.appspot.com",
    messagingSenderId: "471448896532",
    appId: "1:471448896532:web:78e57beb7cee9d8b6c9301",
    measurementId: "G-C4DELZ1LE8"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);