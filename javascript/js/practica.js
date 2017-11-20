function color() {
    var colores = ["azul", "verde", "magenta", "cyan", "amarillo", "anaranjado", "morado"];
    if ($('#colorText').val()) {
        var color = $('#colorText').val();
    } else if ($('input[name="color"]:checked').val()) {
        var color = $('input[name="color"]:checked').val();
    }else if($('#colorSelect').val()){
        var color = $('#colorSelect').val();
    }else{
        var aleatorio = Math.floor(Math.random()*7);
        var color = colores[aleatorio];
    }
    $('#cuadro').removeClass().addClass(color);
}