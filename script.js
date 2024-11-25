// role : permet de faire un choix //
// parametre:non //
// return : Le choix du joueur //
function choixJoueur() {
    return prompt("faites un choix")
}

function choixOrdi() {
    return Math.ceil(Math.random() * 3)
}

function Comparer (nombre) {
    let result;
    if (nombre === 1) {
        result = `papier`;
    }

    { else if (nombre === 2)
        result = `caillou`
    }

    {else if (nombre === 3)
        result = `feuille`;
    }


}

function Afficher() {

}

function Jouer() {

}