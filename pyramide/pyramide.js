"use script"
//construire pyramide 
function construirePyramide() {

    let nbLignes = document.getElementById("ligne-pyramide").value;
    let pyramide = " ";
  
    for (let i = 1; i <= nbLignes; i++) {
        let etoile = "* ";
        let espace = '&nbsp;';
        pyramide += espace.repeat(( nbLignes - i)) + etoile.repeat(i * 1 - 1) + "<br>";
    }
    // affichage pyramide 
    document.getElementById("pyramide").innerHTML = pyramide;


} 
