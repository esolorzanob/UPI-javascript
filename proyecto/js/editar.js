window.onload = function(){
    var usuarioLogueado = sessionStorage.getItem('usuario');
    if(usuarioLogueado){
        usuarioLogueado = JSON.parse(usuarioLogueado);
        if(usuarioLogueado.rol == "0"){
            var idusuario = window.location.search.replace("?", "");
            traerUsuario(idusuario);
        }else{
            alert("Usted no es administrador");
        }
    }else{
        alert("Usuario no esta logueado");
        window.location.href = "../index.html";
    }
}