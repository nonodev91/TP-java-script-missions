"usescript"
//faire fonctionner le boutton
document.getElementById("boutton").addEventListener("click", function () {
    let txt = document.getElementById("id-mot-saisi").value;
    palindrome(txt);


});
//reconnaitre les mots en palindrome
function palindrome(txt) {
    let texte_nv = txt.toLowerCase(); //ne prend paqs en compte si une lettre est en majuscule
    let len = texte_nv.length;
    let demiL = Math.floor(len / 2);
    let resultat = document.getElementById("resultat");
    let i;


//boucle si c'est un palindrome..

    for (i = 0; i < demiL; i++) {
        if (texte_nv[i] !== texte_nv[len - 1 - i]) {
            resultat.innerText = " ce n'est pas un palindrome ";
            return;
        } else
            resultat.innerText = "oui c'est un palindrome";
    }
}



