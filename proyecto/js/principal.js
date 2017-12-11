
window.onload = function () {
    var usuarioLogueado = sessionStorage.getItem('usuario');
    if (usuarioLogueado) {
        usuarioLogueado = JSON.parse(usuarioLogueado);
        if (usuarioLogueado.rol == "0") {
            usuarios = listarUsuarios();

        } else {
            alert("Usted no es administrador");
        }
    } else {
        alert("Usuario no esta logueado");
        // window.location.href = "../index.html";
    }
}

