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

function login() {
    var usuario = {
        username: $('#username').val(),
        password: $('#password').val(),
        metodo: "login"
    };
    $.ajax({
        url: "../php/usuario.php",
        data: usuario,
        method: 'POST',
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function (respuesta) {
            if (respuesta == "Error") {
                $('#mensaje').text('usuario incorrecto');
            } else {
                var usuarioGuardado = JSON.parse(respuesta);
                if (usuarioGuardado.password == usuario.password) {
                    $('#mensaje').text('Exito');
                } else {
                    $('#mensaje').text('contraseña incorrecta');
                }
            }
        }
    });
    return false;
}