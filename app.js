const form = document.querySelector("#form")
const email = document.querySelector("#email")
const password = document.querySelector("#password")

form.addEventListener("submit" , (e)=>{
e.preventDefault()
    console.log(email.value) 
    console.log(password.value) 
})