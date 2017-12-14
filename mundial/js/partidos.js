var pais = window.location.search;
pais = pais.replace('?', '');
var solicitud = {
    pais: pais,
    metodo: "selectPais"
}
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

        console.log(partidos);
    }
});