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
                $('#principal').empty();
                pais = JSON.parse(pais);
                $('<h1 class="nombre">' + pais.nombre + '</h1>').appendTo('#principal');
                $('<img class="bandera" src="' + pais.bandera + '">').appendTo('#principal');
                $('<h2>Partidos:</h2>').appendTo('#principal');
                $('<ul id="partidos"></ul>').appendTo('#principal');
                for (var i = 0; i < partidos.fixtures.length; i++) {
                    var partidoActual = partidos.fixtures[i];
                    if (partidoActual.awayTeamName == pais.nombre
                        || partidoActual.homeTeamName == pais.nombre) {
                        var ul = document.createElement('ul');
                        $('<li>Matchday: ' + partidoActual.matchday + '</li>').appendTo(ul);
                        $('<li>Fecha: ' + partidoActual.date + '</li>').appendTo(ul);
                        $('<li>Equipo Casa: ' + partidoActual.homeTeamName + '</li>').appendTo(ul);
                        $('<li>Equipo Visita: ' + partidoActual.awayTeamName + '</li>').appendTo(ul);
                        var partido = document.createElement('li');
                        $(partido).append(ul);
                        $('#partidos').append(partido);
                    }
                }
            }
        });
    }
});