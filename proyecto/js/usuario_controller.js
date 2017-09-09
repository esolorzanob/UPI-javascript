function login() {
    var user = {
        username: $('#usuario').val(),
        pass: $('#pass').val(),
        metodo: "select"
    }
    $.ajax({
        url: "../php/usuario.php",
        method: "Post",
        data: user,
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function (usuario_response) {
           if(usuario_response == "Error"){
               $('#mensaje').html("Usuario no existe");
           }else{
               var usuarioGuardado = JSON.parse(usuario_response);
               if(usuarioGuardado.password == user.pass){
                   sessionStorage.setItem("usuario", usuario_response);
                   window.location.href = "../principal.html";
               }else{
                   $('#mensaje').html("Password incorrecta");
               }
           }
        }
    });

    return false;
}


function registrar() {
    var user = {
       nombre: $('#nombre').val(),
       apellidos: $('#apellidos').val(),
       telefono: $('#telefono').val(),
       correo: $('#email').val(),
       username: $('#usuario').val(),
       pass: $('#pass').val(),
       provincia: $('#provincia').val(),
       genero: $('input[name="gen"]:checked').val(),
       rol: "1",
       metodo: "insert"
    }
    $.ajax({
        url: "../php/usuario.php",
        method: "Post",
        data: user,
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function (usuario_response) {
           
        }
    });

    return false;
}

function listarUsuarios() {
    var user = {
        metodo: "selectAll"
    }
    $.ajax({
        url: "../php/usuario.php",
        method: "Post",
        data: user,
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function (usuario_response) {
          var usuarios = JSON.parse(usuario_response);
          crearTabla(usuarios);
          sessionStorage.setItem("usuarios", usuario_response);
        }
    });
    
    return false;
}

function traerUsuario(idusuario){
    var user = {
        idusuario: idusuario,
        metodo: "selectId" 
    };
    $.ajax({
        url: "../php/usuario.php",
        method: "POST",
        data: user,
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function (usuario_response) {
            var usuario = JSON.parse(usuario_response);
            $('#nombre').val(usuario.nombre);
            $('#apellidos').val(usuario.apellidos);
            $('#telefono').val(usuario.telefono);
            $('#email').val(usuario.correo);
            $('#usuario').val(usuario.username);
            $('#pass').val(usuario.password);
            $('#provincia').val(usuario.provincia);
            $('input[value=\"'+usuario.genero+'\"]').prop("checked", true);
            $('#idusuario').val(usuario.idusuarios);
        }
    });
    return false;
}

function editar() {
    var user = {
       nombre: $('#nombre').val(),
       apellidos: $('#apellidos').val(),
       telefono: $('#telefono').val(),
       correo: $('#email').val(),
       username: $('#usuario').val(),
       pass: $('#pass').val(),
       provincia: $('#provincia').val(),
       genero: $('input[name="gen"]:checked').val(),
       rol: "1",
       idusuarios: $('#idusuario').val(),
       metodo: "update"
    }
    $.ajax({
        url: "../php/usuario.php",
        method: "Post",
        data: user,
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function (usuario_response) {
            if(usuario_response == "Exito"){
                $('#mensaje').text("El usuario se ha editado con exito!");
            }else{
                $('#mensaje').text("Error al editar usuario");
            }
           
        }
    });

    return false;
}

function crearTabla(usuarios){
    usuarios.map(function(usuario){
        var fila = document.createElement("tr");
        var nombre = document.createElement("td");
        $(nombre).text(usuario.nombre);
        $(fila).append(nombre);
        var apellidos = document.createElement("td");
        $(apellidos).text(usuario.apellidos);
        $(fila).append(apellidos);
        var telfono = document.createElement("td");
        $(telfono).text(usuario.telefono);
        $(fila).append(telfono);
        var correo = document.createElement("td");
        $(correo).text(usuario.correo);
        $(fila).append(correo);
        var genero = document.createElement("td");
        $(genero).text(usuario.genero);
        $(fila).append(genero);
        var provincia = document.createElement("td");
        $(provincia).text(usuario.provincia);
        $(fila).append(provincia);
        var editar = document.createElement("td");
        $(editar).addClass("centrado");
        $(editar).html("<a href=\"editar.html?"+usuario.idusuarios+"\"><i class=\"fa fa-lg fa-pencil-square-o verde\" aria-hidden=\"true\"></i></a>");
        $(fila).append(editar);
        var borrar = document.createElement("td");
        $(borrar).addClass("centrado");
        $(borrar).html("<i class=\"fa fa-lg fa-trash-o rojo\" aria-hidden=\"true\"></i>");
        $(fila).append(borrar);
        $('#tabla').append(fila);
      });
}