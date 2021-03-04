const compteContent = document.getElementById("content");

const connected = localStorage.getItem("client");

if (connected) {
    const client = JSON.parse(localStorage.getItem("client"));

    compteContent.innerHTML = `
    <div id="conx">
    <h2>Vous êtes connecte:</h2>
    <h3>Nom: ${client.nom}</h3>
    <h3>prenom: ${client.prenom}</h3>
    <h3>email: ${client.email}</h3>
    <p>Tel: ${client.tel}</p>
    </div>
  `;
} else {
    compteContent.innerHTML = "Non connecté...";
}