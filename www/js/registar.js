$(document).ready(function () {

    console.log("Document ready...")

    function Person(name, company, email, password, accountType) {
        this.name = name;
        this.company = company;
        this.email = email;
        this.password = password;
        this.accountType = accountType;
        this.bits = 0;
        this.address = "";
        this.postaCode = "";
        this.phone = "";
        this.pagamento = "dinheiro";
        this.orders = new Array;
        console.log("Creating a new person...")
    }
    

    var users = new Array; // Array para guardar todos os utilizadores
    var localData;


    $("#btn-registar").click(function (event) {

        console.log("\nButton clicked!");

        var checker = true;

        var name = $("#name").val();
        var email = $("#email").val();
        var company = $("#company").val();
        var password = $("#pw").val();
        var password2 = $("#pw2").val();
        var accountType = $("#account").val();

        if ($.trim(name).length < 3) {
            if ($('#name_Error').hasClass("no_error"))
                $('#name_Error').removeClass("no_error").addClass("error");
            checker = false;
            console.log("Bad name!");
        } else {
            if ($('#name_Error').hasClass("error")) {
                $('#name_Error').removeClass("error").addClass("no_error");
            }
            console.log("Good name!");
        }

        if (accountType == "rest" || accountType == "est") {
            $("#opcional").removeClass("error").addClass("no_error");
            if ($.trim(company).length < 3) {
                if ($('#company_Error').hasClass("no_error"))
                    $('#company_Error').removeClass("no_error").addClass("error");
                checker = false;
                console.log("Bad company!");
            } else {
                if ($('#company_Error').hasClass("error")) {
                    $('#company_Error').removeClass("error").addClass("no_error");
                }
                console.log("Good company!");
            }

        } else {
            $("#opcional").removeClass("no_error").addClass("error");
        }

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

        if ($.trim(password2).length > 6 && password == password2) {
            if ($('#pw2_Error').hasClass("error")) {
                $('#pw2_Error').removeClass("error").addClass("no_error");
            }
            console.log("Good pw2!");

        } else {
            if ($('#pw2_Error').hasClass("no_error"))
                $('#pw2_Error').removeClass("no_error").addClass("error");
            checker = false;
            console.log("Bad pw2!");
        }

        if (checker) {
            // preencher o Array 'users' com a informação contida no localStorage
            users = JSON.parse(localStorage.getItem('users'));
            // adicionar um novo utilizador ao Array 'users'

            // ciclo para verificar se o utilizador já está registado no sistema
            var validUser = true;
            for (var i = 0; i < users.length; i++) {
                if (users[i].email == email) {
                    validUser = false;
                }
            }

            if (validUser) {

                users.push(new Person(name, company, email, password, accountType));
                // colocar na variável localData uma string em formato JSON do array 'users'
                localData = JSON.stringify(users);
                // adicionar ao localStorage o novo array de utilizadores
                localStorage.setItem('users', localData);
                console.log("User added to array!");

                // ciclo para imprimir todos os utilizadores
                for (var i = 0; i < users.length; i++) {
                    console.log("\nNome: " + users[i].name);
                    console.log("Companhia: " + users[i].company);
                    console.log("Email: " + users[i].email);
                    console.log("Password: " + users[i].password);
                    console.log("Account Type: " + users[i].accountType);
                }
                $("#myModal2").modal("show");

                window.setTimeout(redirecionar, 3000);
                function redirecionar() {
                    window.location = "Login.html";
                }
                
            } else {
                $('#myModal').modal('show');
                console.log("\nEste utilizador já está registado!");
            }

        }

        return;

    });
});