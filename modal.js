function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close")//déclaration variable modalClose pour fermer la modale

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//appel de la fonction close modal
modalClose.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal(création de la fonction closeModal pour fermer la modale)
function closeModal(){
  modalbg.style.display = "none";
}



