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
    if (zip.validity.valueMissing) {
        event.preventDefault();
        missZip.textContent = 'le code postal manquant';
        missZip.style.color = 'red';
    } else {}

    // si champs vide
    if (email.validity.valueMissing) {
        event.preventDefault();
        missEmail.textContent = 'Veuillez inserer une adresse mail valide';
        missEmail.style.color = 'red';
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