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
          console.log(usuario_response);
           
        }
    });

    return false;
}