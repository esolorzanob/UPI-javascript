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
function listarUsuarios() {
    var listar = {
        metodo: "listar"
    };
    $.ajax({
        url: "../php/usuario.php",
        data: listar,
        method: 'POST',
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function (respuesta) {
            var usuarios = JSON.parse(respuesta);
            for (var i = 0; i < usuarios.length; i++) {
                var fila = document.createElement('tr');
                var nombre = document.createElement('td');
                $(nombre).text(usuarios[i].nombre);
                $(fila).append(nombre);
                var apellidos = document.createElement('td');
                $(apellidos).text(usuarios[i].apellidos);
                $(fila).append(apellidos);
                var telefono = document.createElement('td');
                $(telefono).text(usuarios[i].telefono);
                $(fila).append(telefono);
                var correo = document.createElement('td');
                $(correo).text(usuarios[i].correo);
                $(fila).append(correo);
                var editar = document.createElement('a');
                $(editar).text("Editar");
                $(editar).attr('href', 'editarUsuario.html?' + usuarios[i].idusuarios);
                var tdEditar = document.createElement('td');
                $(tdEditar).append(editar);
                $(fila).append(tdEditar);
                var borrar = document.createElement('p');
                $(borrar).text("Borrar");
                $(borrar).addClass('rojo');
                $(borrar).attr('onclick', 'borrarUsuario(\"' + usuarios[i].idusuarios + '\")');
                var tdBorrar = document.createElement('td');
                $(tdBorrar).append(borrar);
                $(fila).append(tdBorrar);
                $('#tabla').append(fila);
            }
        }
    });
    return false;
}

function borrarUsuario(id) {
    if (confirm("Esta seguro que desea borrar al usuario?")) {
        var borrar = {
            id: id,
            metodo: "borrar"
        }
        $.ajax({
            url: "../php/usuario.php",
            data: borrar,
            method: 'POST',
            error: function (xhr) {
                alert("An error occured: " + xhr.status + " " + xhr.statusText);
            },
            success: function (respuesta) {
                location.reload();
            }
        });
    }
}
function traerUsuario(id) {
    var traer = {
        id: id,
        metodo: 'traerUsuario'
    }
    $.ajax({
        url: "../php/usuario.php",
        data: traer,
        method: 'POST',
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function (respuesta) {
            var usuario = JSON.parse(respuesta);
            $('#nombre').val(usuario.nombre);
            $('#apellidos').val(usuario.apellidos);
            $('#correo').val(usuario.correo);
            $('#telefono').val(usuario.telefono);
            $('#username').val(usuario.username);
            $('#password').val(usuario.password);
            $('#provincia').val(usuario.provincia);
            $('input[value="' + usuario.genero + '"]').prop('checked', true);
            $('#id').val(usuario.idusuarios);
        }
    });

}

function editarUsuario() {
    var usuario = {
        nombre: $('#nombre').val(),
        apellidos: $('#apellidos').val(),
        correo: $('#correo').val(),
        provincia: $('#provincia').val(),
        telefono: $('#telefono').val(),
        username: $('#username').val(),
        password: $('#password').val(),
        genero: $('input[name="genero"]:checked').val(),
        id: $('#id').val(),
        metodo: "editar"
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