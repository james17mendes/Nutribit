$(document).ready(function () {

    console.log("Document ready...");

    function Person(name, company, email, password) {
        this.name = name;
        this.company = company;
        this.email = email;
        this.password = password;
        this.address = null;
        this.postaCode = null;
        this.phone = null;
        console.log("Creating a new person...")
    }


    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log("\nUtilizador carregado.");

    console.log("Nome: " + currentUser.name);
    console.log("Company: " + currentUser.company);
    console.log("Email: " + currentUser.email);
    console.log("Password: " + currentUser.password);

    $("#nome").html("" + currentUser.name);

    $("#sair").click(function () {
        console.log("Logout...")
        localStorage.removeItem("currentUser");
        window.location = "home.html";

    });

});