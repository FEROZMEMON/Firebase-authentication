import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";

const form = document.querySelector("#form")
const email = document.querySelector("#email")
const password = document.querySelector("#password")


  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => { 
      const user = userCredential.user;
      console.log(user);
      window.location = "home.html"
    })
    .catch((error) => { 

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="register.html">Do you have an account?</a>'
      });
    });
    
    
  })