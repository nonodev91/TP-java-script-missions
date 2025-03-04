"use strict";


function trouverMotLePlusLong(str) {
    let mots = str.split(' '); // divise une chaine de caractére
    let motLePlusLong = " ";

    //trouve le mot le plus long
    for (let i = 1; i < mots.length; i++) {
        if (mots[i].length > motLePlusLong.length) {
            motLePlusLong = mots[i];
        }
    }
    
    return motLePlusLong;
}
  
//insertion de la citation
let citation = document.getElementById("citation").innerText;


let motLePlusLong = trouverMotLePlusLong(citation);

//affichage du mot le plus long
document.getElementById("motPlusLong").innerText = "Le mot le plus long est " + motLePlusLong + " avec une longueur de " + motLePlusLong.length + " lettres.";
