var monPanier = new Array();

function chargerArticles() {
    const connected = localStorage.getItem("client");
    if (connected) {
        var articles = document.getElementById("content");
        for (var i = 0; i < catalogue.length; i++) {
            var article = document.createElement("div");
            article.className = "article";
            article.id = i + "-article";
            /**********Affichage du nom de l'article *****************/
            var articleNom = document.createElement("h2");
            articleNom.className = "nom_art";
            articleNom.innerText = catalogue[i].nom;
            article.appendChild(articleNom);
            /**********Affichage de la photo de l'article *****************/
            var articleImg = document.createElement("img");
            articleImg.className = "img_art ";
            articleImg.setAttribute("src", "../images/img" + catalogue[i].code + ".jpg");
            article.appendChild(articleImg);
            /********Affichage de la description de l'article **********/
            var articleDesc = document.createElement("div");
            articleDesc.className = "desc_art";
            articleDesc.innerText = catalogue[i].desc;
            article.appendChild(articleDesc);
            /**********Affichage du prix de l'article *****************/
            var articlePrix = document.createElement("div");
            articlePrix.className = "prix_art ";
            articlePrix.innerText = catalogue[i].prix + "Dh";
            article.appendChild(articlePrix);
            /**********Affichage de la zone de commande *****************/
            var zoneCmd = document.createElement("div");
            zoneCmd.className = "cmd_art";
            var inputCmd = document.createElement("input");
            inputCmd.className = "input_art";
            // On associe un id à chaque élément input 
            inputCmd.id = i + "-qte";
            // l'élément inputCmd est de type number 
            inputCmd.type = "number";
            // Par défaut la quantité affichée est égale à 0
            inputCmd.value = 0;
            // La quantité doit être comprise entre 0 et 5
            inputCmd.min = 0;
            inputCmd.max = 5;
            zoneCmd.appendChild(inputCmd);
            var bouton = document.createElement("button");
            bouton.className = "btn_art ";
            bouton.id = i + "-cmd";
            bouton.onclick = function() {
                // On récupère la valeur de l'id du bouton de commande
                var item = this.getAttribute("id");
                // On récupère la position de l'article dans le catalogue
                var pos = item.substring(0, 1);
                // On ajoute cet article au panier
                ajouterAuPanier(pos);
            }

            zoneCmd.appendChild(bouton);
            article.appendChild(zoneCmd);
            articles.appendChild(article);

        }
    } else {
        alert("vous n'ete pas  inscrit...");
    }
}

function searchDansPanier(Nom) {
    for (let index = 0; index < monPanier.length; index++) {
        if (monPanier[index].nom == Nom) {
            return true;
        } else
            return false;

    }



}

function ajouterAuPanier(pos) {
    // A l'aide de searchDansPanier, on vérifie si l'article existe déjà dans le panier 
    if (searchDansPanier(catalogue[pos].nom))
        alert("l'article se trouve déja dans le panier");


    else {
        // On récupère l'id de la zone quantité associée à l'article qu'on veut commander
        var ident = pos + "-qte";
        var qte = document.getElementById(ident).value;
        if (qte > 0) {
            // On crée un objet pour y stocker le nom, le prix et la quantité de l'article commandé
            var artcileCmd = {}; // creation d'un objet vide
            // On stocke le nom de l'article qui se trouve à la position pos dans le tableau catalogue.
            artcileCmd.nom = catalogue[pos].nom;
            artcileCmd.prix = catalogue[pos].prix
            artcileCmd.qte = qte;
            // On calcule et on stocke le prix Hors Taxe
            artcileCmd.prixHt = artcileCmd.prix * artcileCmd.qte;
            monPanier.push(artcileCmd);
            stockerPanieralert("l'article commandé nom: " + artcileCmd.nom + " prix: " + artcileCmd.prix + "DH " + " quantité: " + artcileCmd.qte);


        } else {
            alert("choisissez une quantité > 0");
        }


    }
}

function stockerPanier(data) {

    var panierJSON = {}; // On crée un objet vide

    // On met dans cet objet le tableau qu'on veut stocker

    panierJSON.monpanier = data;

    // On stocke en local à l'aide de l'objet localStorage et la méthode JSON.stringify

    localStorage.setItem("panierLocalStorage", JSON.stringify(panierJSON));
}