$(document).ready(function () {

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
    var sugestions = JSON.parse(localStorage.getItem('sugestions'));
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

    $("#validar").click(function () {

        var checker = true;
        var codigo = $("#codigo").val()
        var codigos = new Array;
        codigos = JSON.parse(localStorage.getItem("codigos"));

        if ($.trim(codigo).length != 6 || isNaN(codigo)) {
            $("#error").removeClass("desaparece").addClass("aparece");
            checker = false;
        } else {
            $("#error").removeClass("aparece").addClass("desaparece");
            checker = true;
        }

        for (var i = 0; i < codigos.length; i++) {
            if (codigo == codigos[i].codigo) {
                $("#error").removeClass("aparece").addClass("desaparece");
                currentUser.bits = currentUser.bits + codigos[i].valor;
                codigos.splice(i, 1);
                checker = true;
                break;
            } else {
                $("#error").removeClass("desaparece").addClass("aparece");
                checker = false;
            }
        }

        if (checker) {

            var users = JSON.parse(localStorage.getItem("users"));
            localStorage.setItem("codigos", JSON.stringify(codigos));
            localStorage.setItem("currentUser", JSON.stringify(currentUser));

            for (var i = 0; i < users.length; i++) {
                if (users[i].email == currentUser.email) {
                    users[i] = currentUser;
                    break;
                }
            }

            localStorage.setItem('users', JSON.stringify(users));
            $("#bits").html("" + currentUser.bits);

            $("#myModal").modal("show");
            
        }
        

    });

    $("#close").click(function () {
        window.location = "Promocao.html";
    });

});