var productos = localStorage.getItem('productos');
productos = JSON.parse(productos);
var id = window.location.search;
id = id.replace('?','');
var producto = productos[id];
$('#titulo').text(producto.nombre);
$('#imagen').attr('src', 'imgs/'+producto.imagen);