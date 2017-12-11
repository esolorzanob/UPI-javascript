function registroUsuario() {
    var usuario = {
        nombre: $('#nombre').val(),
        apellidos: $('#apellidos').val(),
        correo: $('#correo').val(),
        provincia: $('#provincia').val(),
        telefono: $('#telefono').val(),
        username: $('#username').val(),
        password: $('#password').val(),
        genero: $('input[name="genero"]:checked').val(),
        metodo: "registro"
    };
    $.ajax({
        url: "../php/usuario.php",
        data: usuario,
        method: 'POST',
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function (respuesta) {
            console.log(respuesta);
        }
    });
    return false;
}