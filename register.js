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

                confirm.value = ""
                email.value = ""
                password.value = ""
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
               setTimeout(() => {
                
                   window.location = "index.html"
               }, 2500); 
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: `<a href="register.html" >Maybe invalid email or password?</a>`
                });
            });

    } else {
        Swal.fire({
            title: "Password does not match!",
            icon: "error"
        });
    }
})
