const form = document.getElementById("inscription");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const client = {
        nom: "",
        email: "",
        prenom: "",
        tel: "",
        pwd: "",
        pwdcopy: "",
    };
    const context = event.target;

    client.nom = document.getElementById("nom").value;
    client.email = document.getElementById("email").value;
    client.prenom = document.getElementById("prenom").value;
    client.tel = document.getElementById("tel").value;
    client.pwd = document.getElementById("pwd").value;
    client.pwdcopy = document.getElementById("pwdcopy").value;
    localStorage.setItem("client", JSON.stringify(client));
    alert("Vous etes inscrit");
    window.open("../html/compte.html", "_self");
});