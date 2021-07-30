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
modalSubmitButton.addEventListener("click", function(e){
  e.preventDefault()
  //Début
  const prenomSelector = document.querySelector("input[name='first']").value;
  const nomSelector = document.querySelector("input[name='last']").value;
  const locationSelector = document.querySelector("input[name='location']");
  const location = document.querySelector("input[name='location']:checked");
  const emailRegex = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const email = document.querySelector("input[name='email']").value;
  const birthdate = document.querySelector("input[name='birthdate']").value;
  const nombreTournois = document.querySelector("input[name='quantity']").value;
  const conditions = document.querySelector("input[name='conditions']");
  const formulaire = document.querySelector(".formulaire");
  
  //Remise à zéro des erreurs
   document.getElementById('erreurPrenom').innerHTML = ""
   document.getElementById('erreurNom').innerHTML = ""
   document.getElementById('erreurMail').innerHTML = ""
   document.getElementById('erreurBirthdate').innerHTML = ""
   document.getElementById('erreurTournois').innerHTML = ""
   document.getElementById('erreurVille').innerHTML = ""
   document.getElementById('erreurConditions').innerHTML = ""


  let errors = []

  //Vérification des erreurs
  if(!prenomSelector.match(/^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ'._-\s]{2,30}$/))
  {
    errors.push("prenom")
  }
  if(!nomSelector.match(/^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ'._-\s]{2,30}$/))
  {
    errors.push("nom")
  } 
  if(location == null)
  {
    errors.push("villes")
  }
  if(!birthdate.match(/^[0-9]{4}\-[0-9]{1,2}\-[0-9]{1,2}$/)){
    errors.push("birthdate")  
  }
  if(!nombreTournois.match(/^([0-9]+)/)) {
    errors.push("tournois")  
  }
  if(!email.match(emailRegex)){
    errors.push("email")  
  }
  if(!conditions.checked)
  {
    errors.push("conditions")
  }




  if(errors.length > 0)
  {
    // si j'ai des erreurs
    //Affichage des erreurs 
    
    if(errors.includes("prenom"))
    {
      document.getElementById('erreurPrenom').innerHTML = "Veuillez entrer un prénom !"
    }
    if(errors.includes("nom"))
    {
      document.getElementById('erreurNom').innerHTML = "Veuillez entrer un nom !"
    }
    if(errors.includes("email"))
    {
      document.getElementById('erreurMail').innerHTML = "Veuillez saisir une adresse mail !"
    }
    if(errors.includes("birthdate"))
    {
      document.getElementById('erreurBirthdate').innerHTML = "Veuillez entrer votre date de naissance !"
    }
    if(errors.includes("tournois"))
    {
      document.getElementById('erreurTournois').innerHTML = "Veuillez saisir au moins une valeur numérique!"
    }
    if(errors.includes("villes"))
    {
      document.getElementById('erreurVille').innerHTML = "Veuillez choisir une option !"
    }
    if(errors.includes("conditions"))
    {
      document.getElementById('erreurConditions').innerHTML = "Veuillez accepter les termes et conditions !"
    }
  }
  else
  {
    // si je n'ai pas d'erreurs
    //PAS D'ERREURS
    const modalBody = document.querySelector(".modal-body")
    const success = document.createElement("div")
    success.setAttribute("class", "success")
    success.innerHTML = "Merci pour votre inscription<button class='btn-submit button fermer'>Fermer</button>"
    modalBody.removeChild(formulaire)
    modalBody.appendChild(success)
    
    const closeSuccess = document.querySelector(".success")
    closeSuccess.addEventListener("click", fermerAfterSuccess);
    
    function fermerAfterSuccess() {
      modalbg.style.display = "none"; 
    }
    
  }
})

