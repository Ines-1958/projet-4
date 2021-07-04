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

// vérification formulaire
const modalSubmitButton = document.querySelector("#modalSubmit");
modalSubmitButton.addEventListener("click", function(){
  const prenom = document.querySelector("#first")
  const nom = document.querySelector("#last")
  const newyork = document.querySelector("#location1")
  const sanfrancisco = document.querySelector("#location2")
  const seattle = document.querySelector("#location3")
  const chicago = document.querySelector("#location4")
  const boston = document.querySelector("#location5")
  const portland = document.querySelector("#location6")
  const conditions = document.getElementsByName("conditions")

  let errors = []

  if(prenom.value.length <= 2)
  {
    errors.push("prenom")
  }
  if(nom.value.length <=2)
  {
    errors.push("nom")
  }
  if(!newyork.checked && !sanfrancisco.checked && !seattle.checked && !chicago.checked && !boston.checked && !portland.checked) 
  {
    errors.push("villes")
  }
  
  if(!conditions.checked == true)
  {
    errors.push("conditions")
  }




  if(errors != [])
  {
    // si j'ai des erreurs
    console.log(errors)
  }
  else
  {
    // si je n'ai pas d'erreurs
  }
})

