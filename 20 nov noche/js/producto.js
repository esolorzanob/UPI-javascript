var productos = JSON.parse(sessionStorage.getItem('productos'));
var id = window.location.search;
id = id.replace('?','');
var producto = productos[id];
$('#nombre').text(producto.nombre);
$('#imagen').attr('src', 'imgs/'+producto.imagen);