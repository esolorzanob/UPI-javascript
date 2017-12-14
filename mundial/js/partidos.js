var pais = window.location.search;
pais = pais.replace('?', '');
var solicitud = {
    pais: pais,
    metodo: "selectPais"
}
$.ajax({
    url: "../php/paises.php",
    data: solicitud,
    method: 'POST',
    error: function (xhr) {
        alert("An error occured: " + xhr.status + " " + xhr.statusText);
    },
    success: function (pais) {
        $.ajax({
            url: "http://api.football-data.org/v1/competitions/467/fixtures",
            headers: {
                "X-Auth-Token": "29de3e65e4d84912ad46d8334beacc7c",
                "X-Response-Control": "minified"
            },
            error: function (xhr) {
                alert("An error occured: " + xhr.status + " " + xhr.statusText);
            },
            success: function (partidos) {
                console.log(pais);
                console.log(partidos);
            }
        });
    }
});