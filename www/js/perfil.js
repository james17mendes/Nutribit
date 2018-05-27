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


    $("#l1").text("" + currentUser.name);
    $("#l2").text("" + currentUser.email);
    $("#l3").text("" + currentUser.company);
    if (!currentUser.address == null) {
        $("#l4").text("" + currentUser.address);
    }
    if (!currentUser.address == null) {
        $("#l5").text("" + currentUser.postaCode);
    }
    if (!currentUser.address == null) {
        $("#l6").text("" + currentUser.phone);
    }
    
    var checker = false;
    $("#editarP").click(function () {
        for (var i = 1; i <= 6; i++) {
            if ($("#l" + i).hasClass("aparece") && $("#i" + i).hasClass("desaparece")) {
                $("#l" + i).removeClass("aparece").addClass("desaparece");
                $("#i" + i).removeClass("desaparece").addClass("aparece").attr("placeholder", $("#l" + i).text());
                $("#editarP").text("Alterar")
                checker = false;
            } else {
                $("#l" + i).removeClass("desaparece").addClass("aparece");
                $("#i" + i).removeClass("aparece").addClass("desaparece");
                $("#editarP").text("Editar Perfil");
                checker = true;
            }
            
        }

        if (checker) {
            if ($.trim($("#i1").val()).length < 3) {
                console.log("Bad name!");
            } else {
                currentUser.name = $("#i1").val();
                $("#l1").text("" + currentUser.name);
                console.log(currentUser.name);
                console.log("Good name!");
            }

        }
    });

});