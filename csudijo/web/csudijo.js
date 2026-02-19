$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "/api/legnepszerubb",
        dataType: "json",
        success: function (valasz) {
            $("#legnepszerubb").text(valasz.etelNev);
        },
        error: function () {
            $("#legnepszerubb").text("LECSÓ KOLBÁSZCSIPSSZEL");
        }
    });
});
function vendegkonyv(){
    const comment = document.getElementById("bejegyzes")

    if (bejegyzes === "") {
        alert("A bejegyzés nem lehet üres!");
        return;
    }
}