var tabPanier = new Array();

function chargerPanier() {
    // On récupère  l'objet stocké en local
    panierLocal = JSON.parse(localStorage.getItem("panierLocalStorage"));
    tabPanier = panierLocal.monpanier;
    totalHt = 0; // cette variable servira à stocker le montant HT de la commande
    monTableau = document.getElementById("panier");
    for (var i = 0; i < tabPanier.length; i++) {
        var ligne = document.createElement("tr")
        ligne.id = i + "ligne";
        var cellule1 = document.createElement("td");
        var imgElem = document.createElement("img");
        imgElem.setAttribute("src", "../images/poub.jpg");
        imgElem.className = "imgpoubelle";
        imgElem.id = i + "supp";


        imgElem.onclick = function() {

            var reponse = confirm("voulez vous retirer l'article du panier!");
            if (reponse == true) {
                var item = this.getAttribute("id");
                var pos = item.substring(0, 1, 1);
                supprimerDuPanier(pos);
                cellule1.appendChild(imgElem);
                cellule1.appendChild(ligne);
            }

        }
        for (var prop1 in tabPanier[i]) {
            var cellule2 = document.createElement("td");
            cellule2.innerText = tabPanier[i][prop1];
            ligne.appendChild(cellule2);
        }
        totalHt = totalHt + tabPanier[i].prixHt;
        monTableau.appendChild(ligne);
        total = document.createElement("p");
        total.className = "total";
        total.innerText = "Total :" + totalHt + "Dh";
        document.getElementById("montant").appendChild(total);
    }
}

function supprimerDuPanier(pos) {
    // On recalcule la montant HT de la commande
    totalHt = totalHt - tabPanier[pos].prixHt;
    var total = document.getElementById("totalht");
    monPanier.splice(pos, pos);
    // On récupère la ligne qu'on veut supprimer
    var maLigne = document.getElementById(pos + "ligne");
    monTableau.removeChild(maLigne);
    total.innerText = "Total :" + totalHt + "Dh";
    // On réinitialise le panier
    panier.monpanier = tabPanier;
    // On écrase le panier stocké en local
    localStorage.setItem("panierLocalStorage", JSON.stringify(panier));
    // On recharge la page pour que les modifications soient prises en compte 
    window.location.reload();
}