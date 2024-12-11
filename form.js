const prenom=document.getElementById("prenom");
const nom=document.getElementById("nom");
const mail=document.getElementById("E-mail");
const password=document.getElementById("mdp");
const genre=document.getElementsByName("genre");
const pays=document.getElementById("pays");
let btn=document.getElementById("btn");
btn.addEventListener("click",verif);
function verif(event){
    event.preventDefault();
    resetErrors();
    let valid = true ;
    if (prenom.value.trim() === "") {
        showError(prenom, "Le prénom est requis.");
        valid = false;
    }

    if (nom.value.trim() === "") {
        showError(nom, "Le nom est requis.");
        valid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (mail.value.trim() === "" || !emailRegex.test(mail.value.trim())) {
        showError(mail, "Veuillez entrer un email valide.");
        valid = false;
    }

    if (datedenaissance.value === "") {
        showError(datedenaissance, "La date de naissance est requise.");
        valid = false;
    }

    if (password.value.trim() === "") {
        showError(password, "Le mot de passe est requis.");
        valid = false;
    }

    if (confirm_mdp.value.trim() !== password.value.trim()) {
        showError(confirm_mdp, "Les mots de passe ne correspondent pas.");
        valid = false;
    }

    if (![...genre].some(radio => radio.checked)) {
        showError(genre[0], "Le genre est requis.");
        valid = false;
    }

    if (pays.value === "") {
        showError(pays, "Veuillez sélectionner un pays.");
        valid = false;
    }

    if (valid) {
        alert("Formulaire validé!");}

}

function showError(element, message) {
    let errorMessage = document.createElement("p");
    errorMessage.textContent = message;
    errorMessage.style.color = "red";
    element.parentNode.appendChild(errorMessage);
}

function resetErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(msg => msg.remove());
}
