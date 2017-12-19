function partidos(day) {
    var solicitud = {
        metodo: "selectAll"
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
                    $('#partidosContainer').empty();
                    paises = JSON.parse(pais);
                    for (var i = 0; i < partidos.fixtures.length; i++) {
                        var partido = partidos.fixtures[i];
                        if (partido.matchday == day) {
                            var banderaImagenH = "";
                            var banderaImagenA = "";
                            for (var e = 0; e < paises.length; e++) {
                                if (partido.homeTeamName == paises[e].nombre) {
                                    banderaImagenH = paises[e].bandera;
                                }
                                if (partido.awayTeamName == paises[e].nombre) {
                                    banderaImagenA = paises[e].bandera;
                                }
                            }
                            var partidoContainer = document.createElement('div');
                            $(partidoContainer).addClass('partido');
                            var banderaH = document.createElement('img');
                            $(banderaH).addClass('banderaPeq');
                            $(banderaH).attr('src', banderaImagenH);
                            $(partidoContainer).append(banderaH);
                            var nombreH = document.createElement('label');
                            $(nombreH).text(partido.homeTeamName);
                            $(partidoContainer).append(nombreH);
                            var marcadorH = document.createElement('label');
                            $(marcadorH).addClass('marcador');
                            $(marcadorH).text('??');
                            $(partidoContainer).append(marcadorH);
                            var adivinarH = document.createElement('input');
                            $(adivinarH).attr('id', i + 'H');
                            $(adivinarH).attr('type', 'number');
                            $(partidoContainer).append(adivinarH);
                            $('<label class="versus">VS</label>').appendTo(partidoContainer);
                            var adivinarA = document.createElement('input');
                            $(adivinarA).attr('id', i + 'A');
                            $(adivinarA).attr('type', 'number');
                            $(partidoContainer).append(adivinarA);
                            var marcadorA = document.createElement('label');
                            $(marcadorA).addClass('marcador');
                            $(marcadorA).text('??');
                            $(partidoContainer).append(marcadorA);
                            var nombreA = document.createElement('label');
                            $(nombreA).text(partido.awayTeamName);
                            $(partidoContainer).append(nombreA);
                            var banderaA = document.createElement('img');
                            $(banderaA).addClass('banderaPeq');
                            $(banderaA).attr('src', banderaImagenA);
                            $(partidoContainer).append(banderaA);
                            $('#partidosContainer').append(partidoContainer);
                        }
                    }
                }
            });
        }
    });
}
