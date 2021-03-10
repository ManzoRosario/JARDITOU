// Déclaration des variables
var formValid = document.getElementById("bouton_envoi");
var nom = document.getElementById("nom");
var missNom = document.getElementById("missNom");
var prenom = document.getElementById("prenom");
var missPrenom = document.getElementById("missPrenom");
var date = document.getElementById("date");
var missDate = document.getElementById("missDate");
var zip = document.getElementById("zip");
var missZip = document.getElementById("missZip");
var email = document.getElementById("email");
var missEmail = document.getElementById("missEmail");
var sujet = document.getElementById("sujet");
var missSujet = document.getElementById("missSujet");
var question = document.getElementById("question");
var missQuestion = document.getElementById("missQuestion");
var checkbox = document.getElementById("checkbox")
var missCheckbox = document.getElementById("missCheckbox")
var nomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
var prenomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
var zipValid = /^\d{5}(?:[-\s]\d{4})?$/;
var emailValid = /^[a-z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$/;


//event click bouton
formValid.addEventListener('click', validation);


//Validation function 
function validation(event) {

    //si champs vide 
    if (nom.validity.valueMissing) {
        event.preventDefault();
        missNom.textContent = 'le nom manquant';
        missNom.style.color = 'red';

        //Si format incorrect
    } else if (nomValid.test(nom.value) == false) {
        event.preventDefault();
        missNom.textContent = 'le format incorrect';
        missNom.style.color = 'orange';
    } else {}

    //si champs vide 
    if (prenom.validity.valueMissing) {
        event.preventDefault();
        missPrenom.textContent = 'le prénom manquant';
        missPrenom.style.color = 'red';

        //Si format incorrect
    } else if (prenomValid.test(prenom.value) == false) {
        event.preventDefault();
        missPrenom.textContent = 'le format incorrect';
        missPrenom.style.color = 'orange';
    } else {}

    //Si rien n'est indiquer
    if (date.validity.valueMissing) {
        event.preventDefault();
        missDate.textContent = 'Veuillez selectionner une date';
        missDate.style.color = 'red';
    } else {}

    // si champs vide
    if (zip.value.length != 5) {
        event.preventDefault();
        missZip.textContent = 'le code postal est invalide(5 caracteres)';
        missZip.style.color = 'red';
        //si bon format
    } else if (zip.value.length == 5) {

        missZip.textContent = 'code postal valide';
        missZip.style.color = 'green';
    } else {}

    // si champs vide
    if (email.validity.valueMissing) {
        event.preventDefault();
        missEmail.textContent = 'Veuillez inserer une adresse mail';
        missEmail.style.color = 'red';

        //Si format incorrect
    } else if (emailValid.test(email.value) == false) {
        event.preventDefault();
        missEmail.textContent = 'Inserer une adresse mail valide';
        missEmail.style.color = 'orange';

        //si bon format
    } else if (emailValid.test(email.value) == true) {

        missEmail.textContent = 'email valide';
        missEmail.style.color = 'green';
    } else {}
    //si aucun choix
    if (sujet.validity.valueMissing) {
        event.preventDefault();
        missSujet.textContent = 'Veuillez selectionner un sujet';
        missSujet.style.color = 'red';
    } else {}

    //si champs vide
    if (question.validity.valueMissing) {
        event.preventDefault();
        missQuestion.textContent = 'Veuillez entrer votre question';
        missQuestion.style.color = 'red';
    } else {}

    // si non cocher
    if (checkbox.validity.valueMissing) {
        event.preventDefault();
        missCheckbox.textContent = 'Veuillez cocher la case';
        missCheckbox.style.color = 'red';
    } else {}

}