"usescript"
//liste du tirage au sort
let mangas = ["Naruto", "One Piece", "DBZ", "Bleach", "HxH", "JJK", "Spy x Family", "Sakamoto Days", "JJBA", "HnK", "Boruto"];



//tirage aléatoire 
function tirage() {
    let aleatoire = mangas[Math.floor(Math.random() * mangas.length)];

    document.getElementById("affichage").innerText = "voici le manga: " + aleatoire;
};
