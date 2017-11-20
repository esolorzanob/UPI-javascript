var productos = localStorage.getItem('productos');
productos = JSON.parse(productos);
var cont = 0;
for (var i =0; i < productos.length; i++) {
    if(cont==0){
        var container = document.createElement('div');
        $(container).addClass("productosContainer");
    }
    var producto = document.createElement('div');
    $(producto).addClass('producto');
    var imgContainer = document.createElement('div');
    $(imgContainer).addClass('productoImageContainer');
    var imagen = document.createElement('img');
    $(imagen).attr('src', 'imgs/'+productos[i].imagen);
    $(imagen).addClass('imagen');
    imgContainer.append(imagen);
    producto.append(imgContainer);
    var nombre = document.createElement('p');
    $(nombre).addClass('nombre');
    nombre.append(productos[i].nombre);
    producto.append(nombre);
    var precio = document.createElement('label');
    $(precio).addClass('precio');
    $(precio).html('<i>Precio: </i><span>'+productos[i].precio+'</span>');
    producto.append(precio);
    container.append(producto);
    cont++;
    if(cont==3 || i == productos.length-1){
        $('#masterContainer').append(container);
        cont = 0;
    }
}