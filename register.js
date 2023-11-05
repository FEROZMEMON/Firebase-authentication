import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";

const form = document.querySelector("#form")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const confirm = document.querySelector("#confirm")
 

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if (password.value === confirm.value) {
        createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            
            email.value = ""
            password.value = ""
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
    console.log(errorMessage)
        });

    }else{
        console.log("password donot match");
    }
    })
        
