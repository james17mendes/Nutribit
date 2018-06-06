$(document).ready(function () {

    console.log("Document ready...");

    function Person(name, company, email, password, accountType, bits, address, postaCode, phone, pagamento, orders) {
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
        this.orders = orders;
        console.log("Creating a new person...")
    }
    

    var user = new Array;

    $("#btn-login").click(function (event) {

        console.log("\nButton clicked!");

        var checker = true;

        var email = $("#email").val();
        var password = $("#pw").val();

        if (email.indexOf(".") > -1 && email.indexOf("@") > -1 && email.lastIndexOf(".") > email.lastIndexOf("@")) {
            if ($('#email_Error').hasClass("error")) {
                $('#email_Error').removeClass("error").addClass("no_error");
            }
            console.log("Good email!");
        } else {
            if ($('#email_Error').hasClass("no_error"))
                $('#email_Error').removeClass("no_error").addClass("error");
            checker = false;
            console.log("Bad email!");
        }

        if ($.trim(password).length < 6) {
            if ($('#pw_Error').hasClass("no_error"))
                $('#pw_Error').removeClass("no_error").addClass("error");
            checker = false;
            console.log("Bad pw!");
        } else {
            if ($('#pw_Error').hasClass("error")) {
                $('#pw_Error').removeClass("error").addClass("no_error");
            }
            console.log("Good pw!");
        }

        users = JSON.parse(localStorage.getItem('users'));
        var currentUser;
        var validUser = false;

        if (checker) {
            console.log("\nCampos validados!")
            for (var i = 0; i < users.length; i++) {
                if (email == users[i].email) {
                    console.log("\nEmail encontrado!");
                    currentUser = new Person(users[i].name, users[i].company, users[i].email, users[i].password, users[i].accountType, users[i].bits, users[i].address, users[i].postaCode, users[i].phone, users[i].pagamento, users[i].orders, users[i].weekMeals);
                    validUser = true;
                    break;
                }
            }

            if (validUser) {
                console.log("\nValidacao da password!")

                if ($('#email_Error2').hasClass("error")) {
                    $('#email_Error2').removeClass("error").addClass("no_error");
                }

                if (currentUser.password == password) {
                    console.log("\nPassword correta! A dar login...")
                    if ($('#pw_Error2').hasClass("error")) {
                        $('#pw_Error2').removeClass("error").addClass("no_error");
                    }
                    console.log("\nNome: " + currentUser.name);
                    console.log("Email: " + currentUser.email);
                    console.log("Empresa: " + currentUser.company);
                    console.log("Palavra-passe: " + currentUser.password);
                    console.log("Account type: " + currentUser.accountType);
                    localStorage.setItem("currentUser", JSON.stringify(currentUser));
                    if (currentUser.accountType == "cli") {
                        window.location = "AreaCliente.html";
                    }
                    if (currentUser.accountType == "admin" && currentUser.password == "pwdeadmin123") {
                        window.location = "AreaAdministrador.html";
                    } else {
                        currentUser.accountType == "cli";
                        window.location = "AreaCliente.html";
                    }

                    if (currentUser.accountType == "rest") {
                        window.location = "Refeicoes_restaurante.html";
                    }
                    
                } else {
                    console.log("\nPalavra-passe incorreta!")
                    if ($('#pw_Error2').hasClass("no_error"))
                        $('#pw_Error2').removeClass("no_error").addClass("error");
                }
            } else {
                console.log("\nEmail não registado!")
                if ($('#email_Error2').hasClass("no_error"))
                    $('#email_Error2').removeClass("no_error").addClass("error");
            }


        }



        return;

    });

});