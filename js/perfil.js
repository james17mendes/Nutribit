$(document).ready(function () {

    console.log("Document ready...");

    // Construtor de uma pessoa
    function Person(name, company, email, password, accountType, bits) {
        this.name = name;
        this.company = company;
        this.email = email;
        this.password = password;
        this.accountType = accountType;
        this.bits = bits;
        this.address = "";
        this.postaCode = "";
        this.phone = "";
        this.pagamento = "dinheiro";
        console.log("Creating a new person...")
    }

    //
    var users = new Array;

    // Carregar na variável 'currentUser' o utilizador atual no sistema
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log("\nUtilizador carregado.");

    console.log("Nome: " + currentUser.name);
    console.log("Company: " + currentUser.company);
    console.log("Email: " + currentUser.email);
    console.log("Password: " + currentUser.password);

    $("#nome").html("" + currentUser.name);
    $("#bits").html("" + currentUser.bits);

    // Preenchimentos das labels
    $("#l1").text("" + currentUser.name);
    $("#l2").text("" + currentUser.company);
    $("#l3").text("" + currentUser.address);
    $("#l4").text("" + currentUser.postaCode);
    $("#l5").text("" + currentUser.phone);

    switch (currentUser.pagamento) {
        case "dinheiro":
            $("#dinheiro").attr('checked', true);
            break;
        case "paypal":
            $("#paypal").attr('checked', true);
            break;
        case "multibanco":
            $("#multibanco").attr('checked', true);
            break;
        default:
            break;
    }

    
    $("#editarP").click(function () {
        var checker = 0;
        $("#cancelar1").removeClass("desaparece").addClass("aparece");
        $("#editarP").text("Alterar");
        for (var i = 1; i <= 3; i++) {

            if ($("#l" + i).hasClass("aparece")) {
                $("#l" + i).removeClass("aparece").addClass("desaparece");
                $("#i" + i).removeClass("desaparece").addClass("aparece").attr("value", $("#l" + i).text());
            } else {
                if ($.trim($("#i" + i).val()).length < 2) {
                    if ($("#e" + i).hasClass("desaparece")) {
                        $("#e" + i).removeClass("desaparece").addClass("aparece");
                    }
                    checker--;
                } else {
                    $("#e" + i).removeClass("aparece").addClass("desaparece");
                    checker++;
                }
            }
        }

        if ($("#l4").hasClass("aparece")) {
            $("#l4").removeClass("aparece").addClass("desaparece");
            $("#i4").removeClass("desaparece").addClass("aparece").attr("value", $("#l4").text());
        } else {
            if ($("#i4").val().length == 8 && !(isNaN($("#i4").val().substring(0, 4))) && !(isNaN($("#i4").val().substring(5, 8))) && $("#i4").val().substring(4, 5) == "-") {
                $("#e4").removeClass("aparece").addClass("desaparece");
                checker++;
            } else {
                $("#e4").removeClass("desaparece").addClass("aparece");
                checker--;
            }
        }

        if ($("#l5").hasClass("aparece")) {
            $("#l5").removeClass("aparece").addClass("desaparece");
            $("#i5").removeClass("desaparece").addClass("aparece").attr("value", $("#l5").text());
        } else {
            if ($("#i5").val().length == 9 && !(isNaN($("#i5").val()))) {
                $("#e5").removeClass("aparece").addClass("desaparece");
                checker++;
            } else {
                $("#e5").removeClass("desaparece").addClass("aparece");
                checker--;
            }
        }

        if (checker == 5) {
            users = JSON.parse(localStorage.getItem('users'));

            // Modificar os pârametros do currentUser
            currentUser.name = $("#i1").val();
            currentUser.company = $("#i2").val();
            currentUser.address = $("#i3").val();
            currentUser.postaCode = $("#i4").val();
            currentUser.phone = parseInt($("#i5").val());

            // Modificar as labels
            for (var i = 1; i <= 5; i++) {
                $("#l" + i).removeClass("desaparece").addClass("aparece");
                $("#i" + i).removeClass("aparece").addClass("desaparece");
            }

            $("#l1").text("" + currentUser.name);
            $("#l2").text("" + currentUser.company);
            $("#l3").text("" + currentUser.address);
            $("#l4").text("" + currentUser.postaCode);
            $("#l5").text("" + currentUser.phone);

            for (var i = 0; i < users.length; i++) {
                if (users[i].email == currentUser.email) {
                    users[i] = currentUser;
                }
            }

            localStorage.setItem('users', JSON.stringify(users));

            $("#nome").html("" + currentUser.name);
            $("#editarP").text("Editar perfil");
            $("#cancelar1").removeClass("aparece").addClass("desaparece");
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
    });

    $("#cancelar1").click(function () {
        for (var i = 1; i <= 5; i++) {
            $("#l" + i).removeClass("desaparece").addClass("aparece");
            $("#i" + i).removeClass("aparece").addClass("desaparece");
            $("#e" + i).removeClass("aparece").addClass("desaparece");
        }
        $("#editarP").text("Editar perfil");
        $("#cancelar1").removeClass("aparece").addClass("desaparece");
    });

    $("#btn-pw").click(function () {
        $("#btn-pw").removeClass("aparece").addClass("desaparece");
        $("#btn-email").removeClass("aparece").addClass("desaparece");
        $("#btn-conta").removeClass("aparece").addClass("desaparece");
        $("#pw").removeClass("desaparece").addClass("aparece");
    });

    $("#btn-email").click(function () {
        $("#btn-pw").removeClass("aparece").addClass("desaparece");
        $("#btn-email").removeClass("aparece").addClass("desaparece");
        $("#btn-conta").removeClass("aparece").addClass("desaparece");
        $("#email").removeClass("desaparece").addClass("aparece");
    });

    $("#btn-conta").click(function () {
        $("#btn-pw").removeClass("aparece").addClass("desaparece");
        $("#btn-email").removeClass("aparece").addClass("desaparece");
        $("#btn-conta").removeClass("aparece").addClass("desaparece");
        $("#eConta").removeClass("desaparece").addClass("aparece");
    });

    $("#cancelar2").click(function () {
        $("#btn-pw").removeClass("desaparece").addClass("aparece");
        $("#btn-email").removeClass("desaparece").addClass("aparece");
        $("#btn-conta").removeClass("desaparece").addClass("aparece");
        $("#pw").removeClass("aparece").addClass("desaparece");
        for (var i = 1; i <= 3; i++) {
            $("#e" + i).removeClass("aparece").addClass("desaparece");
            $("#pw" + i).val("");
        }
        for (var i = 6; i <= 8; i++) {
            $("#e" + i).removeClass("aparece").addClass("desaparece");
        }
        
    });

    $("#cancelar3").click(function () {
        $("#btn-pw").removeClass("desaparece").addClass("aparece");
        $("#btn-email").removeClass("desaparece").addClass("aparece");
        $("#btn-conta").removeClass("desaparece").addClass("aparece");
        $("#email").removeClass("aparece").addClass("desaparece");
        for (var i = 1; i <= 3; i++) {
            $("#email" + i).val("");
        }
        for (var i = 9; i <= 11; i++) {
            $("#e" + i).removeClass("aparece").addClass("desaparece");
        }

    });

    $("#cancelar4").click(function () {
        $("#btn-pw").removeClass("desaparece").addClass("aparece");
        $("#btn-email").removeClass("desaparece").addClass("aparece");
        $("#btn-conta").removeClass("desaparece").addClass("aparece");
        $("#pw").removeClass("aparece").addClass("desaparece");
        for (var i = 1; i <= 3; i++) {
            $("#e" + i).removeClass("aparece").addClass("desaparece");
            $("#pw" + i).val("");
        }
        for (var i = 6; i <= 8; i++) {
            $("#e" + i).removeClass("aparece").addClass("desaparece");
        }

    });

    $("#btn-pw2").click(function () {

        var pwAtual = $("#pw1").val();
        var pwNova = $("#pw2").val();
        var pwConfirmacao = $("#pw3").val();

        var checker = true;

        if (pwAtual != currentUser.password) {
            $("#e6").removeClass("desaparece").addClass("aparece");
            checker = false;
        } else {
            $("#e6").removeClass("aparece").addClass("desaparece");
        }

        if ($.trim(pwNova).length < 6) {
            $("#e7").removeClass("desaparece").addClass("aparece");
            checker = false;
        } else {
            $("#e7").removeClass("aparece").addClass("desaparece");
        }

        if ($.trim(pwConfirmacao).length < 6) {
            $("#e8").removeClass("desaparece").addClass("aparece");
            checker = false;
        } else {
            $("#e8").removeClass("aparece").addClass("desaparece");
        }

        if (pwConfirmacao != pwNova) {
            $("#e8").removeClass("desaparece").addClass("aparece");
            checker = false;
        } else {
            $("#e8").removeClass("aparece").addClass("desaparece");
        }

        if (checker) {

            currentUser.password = pwNova;

            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            var users = new Array;
            users = JSON.parse(localStorage.getItem('users'));
            for (var i = 0; i < users.length; i++) {
                if (users[i].email == currentUser.email) {
                    users[i] = currentUser;
                    break;
                }
            }

            localStorage.setItem('users', JSON.stringify(users));

            $("#myModal").modal("show");

        }
    });

    $("#btn-email2").click(function () {

        var emailAtual = $("#email1").val();
        var emailNovo = $("#email2").val();
        var pw = $("#email3").val();

        var checker = true;

        if (emailAtual != currentUser.email) {
            $("#e9").removeClass("desaparece").addClass("aparece");
            checker = false;
        } else {
            $("#e9").removeClass("aparece").addClass("desaparece");
        }

        if (emailNovo.indexOf(".") > -1 && emailNovo.indexOf("@") > -1 && emailNovo.lastIndexOf(".") > emailNovo.lastIndexOf("@")) {
            $("#e10").removeClass("aparece").addClass("desaparece");
        } else {
            $("#e10").removeClass("desaparece").addClass("aparece");
            checker = false;
        }

        if ($.trim(pw).length < 6) {
            $("#e11").removeClass("desaparece").addClass("aparece");
            checker = false;
        } else {
            $("#e11").removeClass("aparece").addClass("desaparece");
        }


        if (pw != currentUser.password) {
            $("#e11").removeClass("desaparece").addClass("aparece");
            checker = false;
        } else {
            $("#e11").removeClass("aparece").addClass("desaparece");
        }

        if (checker) {

            var users = new Array;
            users = JSON.parse(localStorage.getItem('users'));
            for (var i = 0; i < users.length; i++) {
                if (users[i].email == currentUser.email) {
                    currentUser.email = emailNovo;
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                    users[i] = currentUser;
                    break;
                }
            }

            localStorage.setItem('users', JSON.stringify(users));

            $("#myModal2").modal("show");

        }

    });

    $("#cancelar5").click(function () {
        $("#btn-pw").removeClass("desaparece").addClass("aparece");
        $("#btn-email").removeClass("desaparece").addClass("aparece");
        $("#btn-conta").removeClass("desaparece").addClass("aparece");
        $("#email").removeClass("aparece").addClass("desaparece");
        for (var i = 1; i <= 3; i++) {
            $("#email" + i).val("");
        }
        for (var i = 9; i <= 11; i++) {
            $("#e" + i).removeClass("aparece").addClass("desaparece");
        }

    });

    $("#cancelar6").click(function () {
        $("#btn-conta").removeClass("desaparece").addClass("aparece");
        $("#btn-email").removeClass("desaparece").addClass("aparece");
        $("#btn-pw").removeClass("desaparece").addClass("aparece");
        $("#eConta").removeClass("aparece").addClass("desaparece");
        for (var i = 1; i <= 2; i++) {
            $("#conta" + i).val("");
        }
        for (var i = 12; i <= 13; i++) {
            $("#e" + i).removeClass("aparece").addClass("desaparece");
        }

    });

    $("#btn-conta2").click(function () {

        var email = $("#conta1").val();
        var pw = $("#conta2").val();

        var checker = true;

        if (email.indexOf(".") > -1 && email.indexOf("@") > -1 && email.lastIndexOf(".") > email.lastIndexOf("@")) {
            $("#e12").removeClass("aparece").addClass("desaparece");
        } else {
            $("#e12").removeClass("desaparece").addClass("aparece");
            checker = false;
        }

        if ($.trim(pw).length < 6) {
            $("#e13").removeClass("desaparece").addClass("aparece");
            checker = false;
        } else {
            $("#e13").removeClass("aparece").addClass("desaparece");
        }

        if (email != currentUser.email) {
            $("#e12").removeClass("desaparece").addClass("aparece");
            checker = false;
        } else {
            $("#e12").removeClass("aparece").addClass("desaparece");
        }

        if (pw != currentUser.password) {
            $("#e13").removeClass("desaparece").addClass("aparece");
            checker = false;
        } else {
            $("#e13").removeClass("aparece").addClass("desaparece");
        }

        if (checker) {

            var users = new Array;
            users = JSON.parse(localStorage.getItem('users'));
            for (var i = 0; i < users.length; i++) {
                if (users[i].email == currentUser.email) {
                    users.pop(users[i]);
                    localStorage.removeItem('currentUser');
                    break;
                }
            }

            localStorage.setItem('users', JSON.stringify(users));

            $("#myModal3").modal("show");

            window.setTimeout(redirecionar, 3000);
            function redirecionar() {
                window.location = "home.html";

            }

        }

        

    });



    $('#pagamento').click(function () {

        if ($('#dinheiro').is(':checked')) {
            currentUser.pagamento = "dinheiro";
        }
        if ($('#paypal').is(':checked')) {
            currentUser.pagamento = "paypal";
        }
        if ($('#multibanco').is(':checked')) {
            currentUser.pagamento = "multibanco";
        }

        var users = new Array;
        users = JSON.parse(localStorage.getItem('users'));
        for (var i = 0; i < users.length; i++) {
            if (users[i].email == currentUser.email) {
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                users[i] = currentUser;
                break;
            }
        }

        localStorage.setItem('users', JSON.stringify(users));

    });



});