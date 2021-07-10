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
  console.log("Début")
  const prenomSelector = document.querySelector("#first")
  const nomSelector = document.querySelector("#last")
  /*const newyork = document.querySelector("#location1")
  const sanfrancisco = document.querySelector("#location2")
  const seattle = document.querySelector("#location3")
  const chicago = document.querySelector("#location4")
  const boston = document.querySelector("#location5")
  const portland = document.querySelector("#location6")
  const conditions = document.getElementsByName("conditions")*/
  const locationSelector = document.querySelector("input[name='location']");
  const location = document.querySelector("input[name='location']:checked");
  const conditions = document.querySelector("input[name='conditions']");
  const nombreTournois = document.querySelector("input[name='quantity']").value;

  const emailRegex = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const email = document.querySelector("input[name='email']").value;
  
  console.log("Remise à zéro des erreurs")
   document.getElementById('erreurPrenom').innerHTML = ""

  let errors = []

  console.log("Vérification des erreurs")
  if(prenomSelector.value.length < 2)
  {
    errors.push("prenom")
  }
  if(nomSelector.value.length < 2)
  {
    errors.push("nom")
  }
  //if(!newyork.checked && !sanfrancisco.checked && !seattle.checked && !chicago.checked && !boston.checked && !portland.checked) 
  if(location == null)
  {
    errors.push("villes")
  }
  if(!nombreTournois.match(/^([0-9]+)/)) {
    errors.push("sélectionner nombre")
    console.log("OK")
  }
  if(!email.match(emailRegex)){
    errors.push("email")
    console.log("compléter mail")
  }
  
  if(!conditions.checked)
  {
    errors.push("conditions")
  }




  if(errors != [])
  {
    // si j'ai des erreurs
    console.log("Affichage des erreurs")
    console.log(errors)
    if(errors.includes("prenom"))
    {
      document.getElementById('erreurPrenom').innerHTML = "Veuillez entrer un prénom !"
    }
    if(errors.includes("nom"))
    {
      document.getElementById('erreurNom').innerHTML = "Veuillez entrer un nom !"
    }
  }
  else
  {
    // si je n'ai pas d'erreurs
  }
})

