$(document).ready(function () {

    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    $("#nome").html("" + currentUser.name);
    $("#bits").html("" + currentUser.bits);
    var orders = currentUser.orders;

    if (orders.length > 0) {
        $("#order1").removeClass("mostra").addClass("esconde");
        $("#divider1").removeClass("mostra").addClass("esconde");
        for (var i = 0; i < orders.length; i++) {
            $("#order" + (i + 2)).removeClass("esconde").addClass("mostra");
            $("#divider" + (i + 2)).removeClass("esconde").addClass("mostra");
            $("#orderName" + (i + 2)).html(orders[i].meal.nome);
            $("#orderPrice" + (i + 2)).html(orders[i].total + " €");
        }
    }

});