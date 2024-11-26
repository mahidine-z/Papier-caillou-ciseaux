//role : donner la possibilité au joueur de choisir entre feuille,ciseaux et pierre
// parametre:non
// retour : le choix du joueur

function choixJoueur() {
    let choixJ = prompt("Choisissez papier, ciseaux ou pierre");
    return choixJ;
}

//role: l'ordinateur choisis de manière aléatoire un chiffre entre 1 et 3
//1= papier, 2= ciseaux, 3=pierre
//parametre:non
//retour: le choix de l'ordinateur sous forme de chaine de caractère


function choixOrdi() {
    return Math.ceil(Math.random() * 3)
}

function conversion(nbr){
    let choixO;
    if(nbr===1){
        choixO="papier"
    }
    else if (nbr===2){
        choixO="ciseaux"
    }
else if(nbr===3)
    choixO="pierre"
return choixO;

}






//role: Comparer le choix du joueur et le choix de l'ordi
//parametre: choix du joueur et choix de l'ordinateur
//retour:Le gagnant

function compare(choixJ, choixOrdinateur) {

    let result;
    if (choixJoueur === choixOrdinateur){
        result = "égalité"
        
    }else if((choixJoueur === "ciseaux" && choixOrdinateur === "papier") ||
    (choixJoueur === "papier" && choixOrdinateur === "pierre") ||
    (choixJoueur === "pierre" && choixOrdinateur === "ciseaux")){
        result = "Vous avez gagné"
    }else{
        result="l'ordi a gagné"
    }

    return result
      
}



// role: afficher les choix et le gagnant dans un alert
// parametre: choix du joueur, choix de l'ordinateur, resultat
// retour:

function affiche(choixJ, choixO, resultat) {
    alert(`choix du joueur: ${choixJ} // choix de l'ordinateur: ${choixO}//${resultat}`)
}


//role:lancer le jeu en lancant les fonctionsdans le bon ordre
// parametre:non
// retour:non
function jouer() {
    let choixJ = choixJoueur();
    let nombre = choixOrdi()
    let choixO = conversion(nombre);
    let result= compare(choixJ, choixO);
    affiche(choixJ, choixO, result);
}