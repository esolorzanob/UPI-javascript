
window.onload = function(){
    var usuarioLogueado = sessionStorage.getItem('usuario');
    if(usuarioLogueado){
        usuarioLogueado = JSON.parse(usuarioLogueado);
        if(usuarioLogueado.rol == "0"){
           usuarios = listarUsuarios();
          
        }else{
            alert("Usted no es administrador");
        }
    }else{
        alert("Usuario no esta logueado");
        window.location.href = "../index.html";
    }
}

function filtrar(){
    $('#tabla tr').not('.titulos').remove();
    if($('#provincia').val() == "Todas"){
        listarUsuarios();
    }else{
        var usuarios = JSON.parse(sessionStorage.getItem("usuarios"));
        var usuariosFiltrado = usuarios.filter(function(e){
            return e.provincia == $('#provincia').val();
        });
        crearTabla(usuariosFiltrado);
    }
    
}
