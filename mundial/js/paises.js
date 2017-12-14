
$('#grupo').change(function () {
    var solicitud = {
        grupo: $('#grupo').val(),
        metodo: 'select'
    }
    $.ajax({
        url: "../php/paises.php",
        data: solicitud,
        method: 'POST',
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function (response) {
            $('#equiposContainer').empty();
            $('#grupoTitulo').empty();
            var paises = JSON.parse(response);
            var tituloGrupo = document.createElement('div');
            var h2 = document.createElement('h2');
            $(h2).text("Grupo " + paises[0].grupo);
            $('#grupoTitulo').append(h2);
            for (var i = 0; i < paises.length; i++) {
                var pais = document.createElement('div');
                $(pais).attr('class', 'pais');
                var nombre = document.createElement('p');
                $(nombre).text(paises[i].nombre);
                $(pais).append(nombre);
                var link = document.createElement('a');
                $(link).attr('href', 'partidos.html?' + paises[i].nombre);
                var bandera = document.createElement('img');
                $(bandera).attr('src', paises[i].bandera);
                $(bandera).attr('class', 'bandera');
                $(link).append(bandera);
                $(pais).append(link);
                $('#equiposContainer').append(pais);
            }
        }
    });
    return false;
});

