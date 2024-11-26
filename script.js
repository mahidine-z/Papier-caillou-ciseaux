//role : donner la possibilité au joueur de choisir entre feuille,ciseaux et pierre
// parametre:non
// retour : le choix du joueur

function choixJoueur(){
    let choixJ=prompt("Choisissez feuille, ciseaux ou pierre");
    return choixJ;
}

//role: l'ordinateur choisis de manière aléatoire un chiffre entre 1 et 3
//1= papier, 2= ciseaux, 3=pierre
//parametre:non
//retour: le choix de l'ordinateur sous forme de chaine de caractère


function choixOrdi(){
    return Math.ceeil(Math.random()*3;)
}

//role: Comparer le choix du joueur et le choix de l'ordi
//parametre: choix du joueur et choix de l'ordinateur
//retour:Le gagnant

function compare(choixJoueur,ChoixOridnateur)

let result;
if(choixJoueur=== choixOrdinateur){
    result="égalité"
}

else if {
   (choixJoueur==="ciseaux"&& choixOrdinateur==="papier")||
   (choixJoueur==="papier"&& choixOrdinateur==="pierre")||
   (choixJoueur==="pierre"&& choixOrdinateur==="ciseaux")||
    else
}
{
    result="Vous avez gagné"
}

// role: afficher les choix et le gagnant dans un alert
// parametre: choix du joueur, choix de l'ordinateur, resultat
// retour:

function affiche(choixJ, choixO, resultat){
    alert(`choix du joueur`:${choix} // choix de l'ordinateur: $ { choixO}//
}