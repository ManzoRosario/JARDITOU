let vieuxBtn = document.getElementById("vieux");
let table_multiplicationBtn = document.getElementById("table_multiplication");
let tableauBtn = document.getElementById("tableau");
let commandeBtn = document.getElementById("commande");

//Jeunes,Adultes,Vieux
function vieux() {
    window.alert("fonction qui classe les ages de jeunes a vieux et s'arrete a 100 ans");
    let age = 0;
    let nb_jeune = 0;
    let nb_adulte = 0;
    let nb_vieux = 0;



    while (age < 100) {
        age = parseInt(prompt("Quelle est l'age de la personne ?"));

        if (age < 20) {
            nb_jeune++;
        } else if (age >= 20 && age <= 40) {
            nb_adulte++;
        } else {
            nb_vieux++;
        }
    }
    window.alert("nombre de jeunes : " + nb_jeune + "\n nombre de personne de plus de 20 ans : " + nb_adulte + "\n et nombre de vieux : " + nb_vieux);

}

//multiplication
function table_multiplication() {
    nombre = window.prompt("Entrez le numéro de la table:");



    var i;
    for (i = 1; i <= 10; i++) {
        resultat = nombre * i;
        document.write(`${i}x${nombre}=${i * nombre} <br>`);
    }

}

// Recherche d'un prenom
function tableau() {
    var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
    var prenom = prompt("Veuillez écrire un prénom dans la liste suivante : " + tab);


    for (let i = 0; i < tab.length; i++) {
        tab[i] = tab[i].toUpperCase();
    };
    prenomMaj = prenom.toUpperCase();

    var check = tab.includes(prenomMaj);

    if (check) {
        tab.splice(tab.indexOf(prenomMaj), 1);
        tab.push("")

    }
    alert(tab);
}

//Total d'une commande
function commande() {

    var PU = parseFloat(prompt('Prix unitaire'));
    var QTECOM = parseInt(prompt('Quantité commandée'));
    var TOT = PU * QTECOM;
    var PORT = 0.02 * TOT;
    var REM5 = TOT * 0.05;
    var REM10 = TOT * 0.1;
    var PAP = 0;

    if (isNaN(PU && QTECOM)) {
        alert('Erreur, saisissez des nombres');
    } else {

        if (TOT > 500) {
            PAP = TOT - REM10;
            alert('Le prix à payer sera de ' + PAP + '€.');
        } else if (TOT > 200 && TOT <= 500) {
            if (PORT < 6) {
                PORT = 6;
            } else {
                PORT = 0.02 * TOT;
            }
            PAP = TOT - REM10 + PORT;
            alert('Le prix à payer sera de ' + PAP + '€.');
        } else if (TOT <= 200 && TOT >= 100) {
            PAP = TOT - REM5 + 6;
            alert('Le prix à payer sera de ' + PAP + '€.');
        } else {
            PAP = TOT + 6;
            alert('Le prix à payer sera de ' + PAP.toFixed(2) + '€.');
        }
    }
}























function ok() {
    console.log("ok")
}























































vieuxBtn.onclick = vieux;
table_multiplicationBtn.onclick = table_multiplication;
tableauBtn.onclick = tableau;
commandeBtn.onclick = commande;