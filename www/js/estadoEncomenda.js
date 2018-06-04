﻿$(document).ready(function () {

    console.log("Document ready...");

    function Person(name, company, email, password, accountType, bits, address, postaCode, phone, pagamento) {
        this.name = name;
        this.company = company;
        this.email = email;
        this.password = password;
        this.accountType = accountType;
        this.bits = bits;
        this.address = address;
        this.postaCode = postaCode;
        this.phone = phone;
        this.pagamento = pagamento;
        console.log("Creating a new person...")
    }

    function Sugestao(sugestao, person) {
        this.sugestao = sugestao;
        this.person = person
    }


    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log("\nUtilizador carregado.");

    console.log("Nome: " + currentUser.name);
    console.log("Company: " + currentUser.company);
    console.log("Email: " + currentUser.email);
    console.log("Password: " + currentUser.password);
    console.log("Account type: " + currentUser.accountType);

    $("#nome").html("" + currentUser.name);
    $("#bits").html("" + currentUser.bits);

    $("#sair").click(function () {
        console.log("Logout...")
        localStorage.removeItem("currentUser");
        window.location = "home.html";
    });
});