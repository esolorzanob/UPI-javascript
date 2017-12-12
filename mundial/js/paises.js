
function prueba() {
    $.ajax({
        url: "../json/paises.json",
        success: function (data) {
            data = JSON.parse(data);
        }
    });
    return false;
}