window.onload = function () {
    var id = window.location.search;
    id = id.replace('?', '');
    traerUsuario(id);
}