import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth, db } from "./config.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
  } else {
    window.location = "./index.html"
  }
});

const logout = document.querySelector("#logout")

logout.addEventListener("click", () => {

  signOut(auth).then(() => {
    console.log("logout successfully")
    window.location = "./index.html"

  }).catch((error) => {
    console.log(error);
  });


});


const form = document.querySelector("#form")
const title = document.querySelector("#title")
const description = document.querySelector("#description")
const card = document.querySelector("#card")

async function getDataFromFirestore() {
  let arr = []
  const querySnapshot = await getDocs(collection(db, "posts"));
  querySnapshot.forEach((doc) => {
    arr.push(doc.data())
  })
    console.log(arr);
    arr.map((item) => {

      card.innerHTML += `
      <div class="card">
        <div class="card-body">
          <p> <span class="h4">Title :</span> ${item.Title} </p>
          <p><span class="h4">Description :</span> ${item.Description} </p> 
        </div>
      </div>`
    })
};

getDataFromFirestore();

form.addEventListener("submit", async (event) => {
  event.preventDefault()
  card.innerHTML = ""
  // console.log(title.value)
  // console.log(description.value)
  
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      Title: title.value,
      Description: description.value,
      UID: auth.currentUser.uid
    });
      console.log("Document written with ID: ", docRef.id);
      getDataFromFirestore();
  } catch (e) {
    console.error("Error adding document: ", e);
  }
})


























